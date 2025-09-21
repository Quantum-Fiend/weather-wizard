"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AnimatedSky from "../../Components/AnimatedSky";
import WeatherCard from "../../Components/WeatherCard";
import ForecastCard from "../../Components/ForecastCard";
import FavoriteCities from "../Components/FavoriteCities";

const API_KEY = "d76a0537a03797649775dafe39cc19b7";

type Location = { lat: number; lon: number } | null;
type FavoriteCity = string;
type CurrentWeather = {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
    deg: number;
  };
  sys?: {
    country?: string;
    sunrise?: number;
    sunset?: number;
  };
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(
    null
  );
  const [forecastData, setForecastData] = useState([]);
  const [favorites, setFavorites] = useState<FavoriteCity[]>([]);
  const [location, setLocation] = useState<Location>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>("");

  const fetchWeatherByCity = async (city: string, unitType: string) => {
    const currentURL = `https://api.openweathermap.org/data/2.5/weather`;
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast`;

    try {
      const [currentRes, forecastRes] = await Promise.all([
        axios.get(currentURL, {
          params: {
            q: city,
            units: unitType,
            appid: API_KEY,
          },
        }),
        axios.get(forecastURL, {
          params: {
            q: city,
            units: unitType,
            appid: API_KEY,
          },
        }),
      ]);
      return {
        current: currentRes.data,
        forecast: forecastRes.data.list.slice(0, 5),
      };
    } catch (err) {
      throw err;
    }
  };

  const fetchWeatherByCoords = async (
    lat: number,
    lon: number,
    unitType: string
  ) => {
    const currentURL = `https://api.openweathermap.org/data/2.5/weather`;
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast`;

    try {
      const [currentRes, forecastRes] = await Promise.all([
        axios.get(currentURL, {
          params: {
            lat,
            lon,
            units: unitType,
            appid: API_KEY,
          },
        }),
        axios.get(forecastURL, {
          params: {
            lat,
            lon,
            units: unitType,
            appid: API_KEY,
          },
        }),
      ]);
      return {
        current: currentRes.data,
        forecast: forecastRes.data.list.slice(0, 5),
      };
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    const fetchByLocation = () => {
      if (navigator.geolocation) {
        setIsLoading(true);
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            try {
              const data = await fetchWeatherByCoords(
                latitude,
                longitude,
                unit
              );
              setCurrentWeather(data.current);
              setForecastData(data.forecast);
              setLocation({ lat: latitude, lon: longitude });
            } catch (err) {
              console.error("Error fetching by coords:", err);
              setError("Unable to fetch weather by your location.");
            } finally {
              setIsLoading(false);
            }
          },
          (geoError) => {
            console.error("Geolocation error:", geoError);
            setError("Permission to access location was denied.");
            setIsLoading(false);
          }
        );
      } else {
        setError("Geolocation is not supported by your browser.");
      }
    };

    fetchByLocation();
  }, [unit]);

  const handleSearch = async () => {
    if (!searchTerm) return;
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchWeatherByCity(searchTerm, unit);
      setCurrentWeather(data.current);
      setForecastData(data.forecast);
      setSelectedCity(searchTerm);
    } catch (err) {
      console.error("Search fetch error:", err);
      setError("Failed to fetch weather for that city.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnitToggle = () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";
    setUnit(newUnit);

    if (selectedCity) {
      // re-search current city
      fetchWeatherByCity(selectedCity, newUnit)
        .then((data) => {
          setCurrentWeather(data.current);
          setForecastData(data.forecast);
        })
        .catch((err) => {
          console.error("Error toggling unit for city:", err);
          setError("Failed to update unit-based weather.");
        });
    } else if (location) {
      fetchWeatherByCoords(location.lat, location.lon, newUnit)
        .then((data) => {
          setCurrentWeather(data.current);
          setForecastData(data.forecast);
        })
        .catch((err) => {
          console.error("Error toggling unit for location:", err);
          setError("Failed to update unit-based weather.");
        });
    }
  };

  const handleAddFavourite = (city: FavoriteCity) => {
    if (!favorites.includes(city)) {
      setFavorites([...favorites, city]);
    } else {
      setFavorites(favorites.filter((fav) => fav !== city));
    }
  };

  const handleCitySelect = (city: string) => {
    setSearchTerm(city);
    setSelectedCity(city);
    // perform search for that city
    fetchWeatherByCity(city, unit)
      .then((data) => {
        setCurrentWeather(data.current);
        setForecastData(data.forecast);
      })
      .catch((err) => {
        console.error("Error selecting city:", err);
        setError("Failed to fetch weather for selected favorite city.");
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b0c1a] text-white pb-20">
      <AnimatedSky />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 space-y-12">
        <h1 className="text-5xl font-extrabold tracking-tight">
          🌙 Weather Wizard
        </h1>

        {/* Search & Unit Toggle */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="text"
            placeholder="🔍 Enter city"
            className="w-full md:w-1/2 px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-white placeholder-white transition"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button
            onClick={handleSearch}
            className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl transition duration-300 shadow-lg"
          >
            Search
          </button>
          <button
            onClick={handleUnitToggle}
            className="px-4 py-3 bg-pink-600 hover:bg-pink-700 rounded-xl transition duration-300 shadow-lg"
          >
            {unit === "metric" ? "Show °F" : "Show °C"}
          </button>
        </div>

        {/* Loading / Error */}
        {isLoading && <p className="text-center text-gray-400">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Current Weather */}
        {currentWeather ? (
          <WeatherCard
            data={currentWeather}
            unit={unit}
            onAddFavourite={() => handleAddFavourite(currentWeather.name)}
          />
        ) : (
          !isLoading && (
            <p className="text-center text-gray-400">
              No weather data available.
            </p>
          )
        )}

        {/* Forecast */}
        {forecastData && forecastData.length > 0 && (
          <>
            <h2 className="text-3xl font-semibold mt-10">📆 5-Day Forecast</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {forecastData.map((day, idx) => (
                <ForecastCard key={idx} data={day} unit={unit} />
              ))}
            </div>
          </>
        )}

        {/* Favorites */}
        <h2 className="text-3xl font-semibold mt-10">❤️ Favorite Cities</h2>
        {favorites.length > 0 ? (
          <FavoriteCities cities={favorites} onCitySelect={handleCitySelect} />
        ) : (
          <p className="text-center text-gray-400">No favorite cities added.</p>
        )}
      </div>

      <AnimatedSky />
    </main>
  );
}
