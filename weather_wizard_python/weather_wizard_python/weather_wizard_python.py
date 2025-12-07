import reflex as rx
import httpx
from typing import List, Dict, Any, Optional
import datetime
from reflex.base import Base

# --- Constants ---
API_KEY = "d76a0537a03797649775dafe39cc19b7"

class ForecastItem(Base):
    dt_txt: str
    main: Dict[str, float]
    weather: List[Dict[str, str]]

class CurrentWeather(Base):
    name: str = ""
    main: Dict[str, float] = {}
    weather: List[Dict[str, str]] = []


class WeatherState(rx.State):
    """The app state."""
    search_term: str = ""
    unit: str = "metric"
    current_weather: CurrentWeather = CurrentWeather()
    forecast_data: List[ForecastItem] = []
    favorites: List[str] = []
    loading: bool = False
    error: str = ""
    selected_city: str = ""

    def handle_input_change(self, val: str):
        self.search_term = val

    def toggle_unit(self):
        self.unit = "imperial" if self.unit == "metric" else "metric"
        if self.selected_city:
            self.get_weather(self.selected_city)

    def add_favorite(self):
        if self.current_weather.name:
            city_name = self.current_weather.name
            if city_name not in self.favorites:
                self.favorites.append(city_name)
            else:
                self.favorites.remove(city_name)

    def select_favorite(self, city: str):
        self.search_term = city
        self.get_weather(city)

    async def get_weather(self, city: str = ""):
        search_city = city if city else self.search_term
        if not search_city:
            return

        self.loading = True
        self.error = ""
        self.selected_city = search_city
        
        try:
            # Current Weather
            async with httpx.AsyncClient() as client:
                current_res = await client.get(
                    "https://api.openweathermap.org/data/2.5/weather",
                    params={
                        "q": search_city,
                        "units": self.unit,
                        "appid": API_KEY
                    }
                )
                current_data = current_res.json()
                
                if current_res.status_code != 200:
                    self.error = current_data.get("message", "Failed to fetch weather")
                    self.current_weather = CurrentWeather()
                    self.forecast_data = []
                    self.loading = False
                    return

                self.current_weather = CurrentWeather(**current_data)

                # Forecast
                forecast_res = await client.get(
                    "https://api.openweathermap.org/data/2.5/forecast",
                    params={
                        "q": search_city,
                        "units": self.unit,
                        "appid": API_KEY
                    }
                )
                forecast_data_full = forecast_res.json()
                if "list" in forecast_data_full:
                    # Take every 8th item (approx 24h) or just next 5 items
                    # The original code took slice(0, 5) which is just next 15 hours hours (3h intervals)
                    self.forecast_data = [ForecastItem(**item) for item in forecast_data_full["list"][:5]]
                else:
                    self.forecast_data = []

        except Exception as e:
            self.error = str(e)
            self.current_weather = CurrentWeather()
        finally:
            self.loading = False

    def on_load(self):
        # Can't easily do geolocation on pure server-side python safely without JS event
        pass


# --- UI Components ---

def search_bar():
    return rx.flex(
        rx.input(
            placeholder="🔍 Enter city",
            value=WeatherState.search_term,
            on_change=WeatherState.handle_input_change,
            class_name="search-input"
        ),
        rx.button(
            "Search",
            on_click=lambda: WeatherState.get_weather(""),
            class_name="search-btn"
        ),
        rx.button(
            rx.cond(WeatherState.unit == "metric", "Show °F", "Show °C"),
            on_click=WeatherState.toggle_unit,
            class_name="unit-btn"
        ),
        class_name="search-bar"
    )

def weather_card():
    return rx.cond(
        WeatherState.current_weather.name != "",
        rx.box(
            rx.heading(WeatherState.current_weather.name),
            rx.text( "Temp: ", rx.text.strong(WeatherState.current_weather.main["temp"])),
            rx.button(
                "❤️ Favorite",
                on_click=WeatherState.add_favorite,
                margin_top="1rem"
            ),
            class_name="weather-card"
        ),
        rx.text("No weather data")
    )

def forecast_card(data: ForecastItem):
    # simplified to avoid deep access crash during render if data is not fully structured
    return rx.box(
        rx.text(data.dt_txt),
        rx.text(data.main["temp"]),
        rx.text(data.weather[0]["main"]),
        class_name="forecast-card"
    )

def forecast_section():
    return rx.cond(
        WeatherState.forecast_data,
        rx.box(
            rx.heading("📆 5-Day Forecast", class_name="section-title"),
            rx.grid(
                rx.foreach(
                    WeatherState.forecast_data,
                    forecast_card
                ),
                class_name="forecast-grid"
            )
        )
    )

def favorites_section():
    return rx.box(
        rx.heading("❤️ Favorite Cities", class_name="section-title"),
        rx.flex(
            rx.foreach(
                WeatherState.favorites,
                lambda city: rx.box(
                    city,
                    on_click=lambda: WeatherState.select_favorite(city),
                    class_name="fav-chip"
                )
            ),
            class_name="favorites-list"
        )
    )

def index():
    return rx.box(
        rx.box(
            rx.heading("🌙 Weather Wizard", class_name="app-title"),
            search_bar(),
            rx.cond(WeatherState.error, rx.text(WeatherState.error, color="red")),
            weather_card(),
            forecast_section(),
            favorites_section(),
            class_name="content-wrapper"
        ),
        class_name="weather-container"
    )

# --- App ---
app = rx.App(stylesheets=["/styles.css"]) # We will compile SCSS to CSS or use it directly if supported
app.add_page(index, on_load=WeatherState.on_load)
