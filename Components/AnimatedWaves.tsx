export default function AnimatedWaves() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-0 overflow-hidden leading-none rotate-180">
      <svg
        className="relative block w-[200%] h-40 animate-waveMove"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#1e1e2f"
          fillOpacity="1"
          d="M0,64L30,85.3C60,107,120,149,180,165.3C240,181,300,171,360,165.3C420,160,480,160,540,149.3C600,139,660,117,720,106.7C780,96,840,96,900,122.7C960,149,1020,203,1080,218.7C1140,235,1200,213,1260,202.7C1320,192,1380,192,1410,192L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
