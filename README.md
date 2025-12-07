# 🌙 Weather Wizard (Python Edition)

![Weather Wizard Desktop](C:/Users/tusha/.gemini/antigravity/brain/d482ffa5-727f-4f05-aa81-3e90bf26e5f2/weather_wizard_desktop_1765133299002.png)

A beautiful, fully responsive weather application built entirely in **Python** using the **Reflex** framework. This project demonstrates a modern frontend architecture ported to a pure Python stack, featuring dynamic SCSS styling and real-time weather data.

## 🚀 Features

-   **Real-time Weather Data**: Current temperature, weather conditions, and humidity powered by OpenWeatherMap API.
-   **5-Day Forecast**: Accurate forecast for the upcoming days.
-   **City Search**: Instant weather updates for any city worldwide.
-   **Unit Conversion**: Toggle between Metric (°C) and Imperial (°F) units seamlessly.
-   **Favorites System**: Save your favorite cities for quick access.
-   **Fully Responsive**: Optimized for Desktop, Tablet, and Mobile devices.
-   **Modern UI**: Glassmorphism design with dynamic SCSS styling.

## 📱 Responsive Design

The application adapts perfectly to any screen size.

### Mobile View
<img src="C:/Users/tusha/.gemini/antigravity/brain/d482ffa5-727f-4f05-aa81-3e90bf26e5f2/weather_wizard_mobile_1765133325838.png" width="375" alt="Weather Wizard Mobile">

## 🛠️ Tech Stack

-   **Language**: [Python 3.14+](https://www.python.org/)
-   **Framework**: [Reflex](https://reflex.dev/) (Full-stack Python web framework)
-   **Styling**: SCSS (Sass) / CSS
-   **API**: [OpenWeatherMap](https://openweathermap.org/)
-   **HTTP Client**: `httpx`
-   **Type Safety**: `Pydantic`

## ⚙️ Installation & Run

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/weather-wizard-python.git
    cd weather-wizard-python
    ```

2.  **Install Dependencies**
    ```bash
    pip install reflex requests httpx
    ```

3.  **Run the App**
    ```bash
    reflex run
    ```
    The application will start at `http://localhost:3000`.

## 📂 Project Structure

```
weather_wizard_python/
├── assets/
│   └── styles.scss       # Main SCSS styles
├── weather_wizard_python/
│   └── weather_wizard_python.py  # Main Application Logic & UI
└── rxconfig.py           # Reflex Configuration
```

---
*Built with ❤️ using Python & Reflex.*
