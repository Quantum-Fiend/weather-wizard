import React from "react";

// Add this interface:
interface WeatherCardProps {
  data: {
    name: string;
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
    sys?: {
      country?: string;
      sunrise?: number;
      sunset?: number;
    };
  };
  unit: "metric" | "imperial";
  onAddFavourite: () => void;
}

// Update your component to use the props:
const WeatherCard: React.FC<WeatherCardProps> = ({
  data,
  unit,
  onAddFavourite,
}) => {
  // ...existing code...
  return (
    <div>
      {/* Render weather info */}
      <h2>{data.name}</h2>
      <p>
        {data.main.temp} {unit === "metric" ? "°C" : "°F"}
      </p>
      <button onClick={onAddFavourite}>Add/Remove Favourite</button>
      {/* ...other UI... */}
    </div>
  );
};

export default WeatherCard;
