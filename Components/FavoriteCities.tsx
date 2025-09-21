export default function FavoriteCities() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {["🏙️ London", "🌉 San Francisco", "🌆 Berlin"].map((city, i) => (
        <button
          key={i}
          className="bg-white/10 border border-white/20 px-4 py-2 rounded-xl text-white hover:bg-white/20 transition-all backdrop-blur-md shadow-sm"
        >
          {city}
        </button>
      ))}
    </div>
  );
}
