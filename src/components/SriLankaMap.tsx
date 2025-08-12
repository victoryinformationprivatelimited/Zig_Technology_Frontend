import React, { useState } from "react";
import Image from "next/image";

// Define the District type
interface District {
  name: string;
  x: number;
  y: number;
}

const SriLankaMap = () => {
  const [hoveredDistrict, setHoveredDistrict] = useState<District | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);

  // District coordinates and names (one dot per district)
  const districts: District[] = [
    { name: "JAFFNA", x: 48, y: 20 },
    { name: "ANURADHAPURA", x: 49, y: 38 },
    { name: "POLONNARUWA", x: 63, y: 42 },
    { name: "CHILAW", x: 40, y: 45 },
    { name: "KURUNAGELA", x: 45, y: 54 },
    { name: "BATTICALOA", x: 69, y: 50 },
    { name: "AMPARA", x: 70, y: 62 },
    { name: "GAMPAHA", x: 42, y: 64 },
    { name: "COLOMBO", x: 40, y: 71 },
    { name: "KALUTHARA", x: 46, y: 75 },
    { name: "KANDY", x: 54, y: 62 },
    { name: "BADULLA", x: 60, y: 72 },
    { name: "MATARA", x: 50, y: 83 },
    { name: "AMBILIPITIYA", x: 62, y: 82 },
  ];

  const handleMouseEnter = (
    district: District,
    event: React.MouseEvent<SVGCircleElement>
  ) => {
    setHoveredDistrict(district);
    setMousePosition({ x: event.clientX, y: event.clientY });
    setSelectedDistrict(district);
  };

  const handleMouseMove = (event: React.MouseEvent<SVGCircleElement>) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredDistrict(null);
    setSelectedDistrict(null);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative w-full" style={{ paddingBottom: "100%" }}>
        {/* Base Map Image */}
        <Image
          src="/images/srilanka.png"
          alt="Sri Lanka Distribution Network Map"
          className="absolute inset-0 w-full h-full object-contain "
          width={500}
          height={500}
        />
        {selectedDistrict && (
          <Image
            src={`/images/districts/${selectedDistrict.name.toLowerCase()}.png`}
            alt={`${selectedDistrict.name} Overlay`}
            className="absolute inset-0 w-full h-full object-contain pointer-events-none transition-opacity duration-300 ease-in-out"
            width={200}
            height={200}
            style={{
              opacity: 1,
              // border: '2px solid white',
              filter: 'drop-shadow(0 0 20px rgba(255, 255, 246, 0.9))'
            }}
          />
        )}
        {/* white dots */}
        <svg
          className="absolute inset-0 w-full h-full cursor-pointer"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
        >
          {districts.map((district, index) => (
            <circle
              key={index}
              cx={`${district.x}%`}
              cy={`${district.y}%`}
              r="0.9"
              fill="white"
              //stroke="blue-"
              strokeWidth="0.2"
              className="transition-all duration-200 cursor-pointer hover:stroke-blue-300 hover:stroke-1 drop-shadow-md"
              style={{
                filter: "drop-shadow(0 0 3px rgba(220, 38, 38, 0.6))",
              }}
              onMouseEnter={(e) => handleMouseEnter(district, e)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            // onClick={() => setSelectedDistrict(district)}
            />
          ))}
        </svg>
      </div>

      {/* Tooltip */}
      {hoveredDistrict && (
        <div
          className="fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-full"
          style={{
            left: mousePosition.x,
            top: mousePosition.y - 10,
          }}
        >
          <div
            className="relative animate-bounce-in"
            style={{
              animation: "bounceIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
            }}
          >
            {/* Glowing background effect */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-md opacity-75 animate-pulse" /> */}
            <div className="absolute inset-0  rounded-xs blur-md animate-pulse" />

            {/* Main tooltip */}
            {/* <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-md border border-white/20 overflow-hidden"> */}
            <div className="relative min-w-2xs z-10 bg-blue-400 text-white px-6 py-4 rounded-xs shadow-2xl overflow-hidden">
              {/* Animated shine effect */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                style={{
                  animation: "shine 2s ease-in-out infinite",
                  transform: "translateX(-100%)",
                }}
              />
              <div className="relative z-10">
                <div
                  className="text-xl font-bold mb-1"
                  style={{
                    animation: "typewriter 0.8s steps(20) 0.2s both",
                  }}
                >
                  {hoveredDistrict.name}
                </div>
                <div className="text-sm opacity-90 underline"> Sales Area</div>
              </div>

              <div className="absolute top-1 right-2 w-1 h-1 bg-white rounded-full opacity-70 animate-ping" />
              <div className="absolute bottom-2 left-3 w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-pulse" />
            </div>
            {/* Longer arrow */}
            <div className="flex justify-center">
              <div
                className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[45px] border-transparent border-t-blue-400 relative"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(96,165,250))",
                  animation: "arrowBounce 1s ease-in-out infinite alternate",
                }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes bounceIn {
          0% {
            transform: scale(0.3) translateY(10px);
            opacity: 0;
          }
          50% {
            transform: scale(1.05) translateY(-5px);
          }
          70% {
            transform: scale(0.9) translateY(0px);
          }
          100% {
            transform: scale(1) translateY(0px);
            opacity: 1;
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes arrowBounce {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-3px);
          }
        }
      `}</style>
    </div>
  );
};

export default SriLankaMap;