import React from "react";

// Add this interface:
interface ForecastCardProps {
  data: {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
    };
    weather: Array<{
      id: number;
      main: string;
      description: string;
      icon: string;
    }>;
    wind: {
      speed: number;
      deg: number;
    };
    // ...add other known properties as needed...
  };
  unit: "metric" | "imperial";
}

// Update your component to use the props:
const ForecastCard: React.FC<ForecastCardProps> = ({ data, unit }) => {
  // ...existing code...
  return (
    <div>
      {/* Render forecast info */}
      <p>{new Date(data.dt * 1000).toLocaleDateString()}</p>
      <p>
        {data.main.temp} {unit === "metric" ? "°C" : "°F"}
      </p>
      {/* ...other UI... */}
    </div>
  );
};

export default ForecastCard;
