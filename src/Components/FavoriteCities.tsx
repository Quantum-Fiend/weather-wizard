import React from "react";

type FavoriteCitiesProps = {
  cities: string[];
  onCitySelect: (city: string) => void;
};

export default function FavoriteCities({
  cities,
  onCitySelect,
}: FavoriteCitiesProps) {
  return (
    <ul>
      {cities.map((city) => (
        <li
          key={city}
          className="cursor-pointer hover:underline"
          onClick={() => onCitySelect(city)}
        >
          {city}
        </li>
      ))}
    </ul>
  );
}
