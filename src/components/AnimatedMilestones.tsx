import React, { useState, useEffect, useRef } from "react";

const AnimatedMilestones = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [animationStage, setAnimationStage] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        // Start animation
                        setTimeout(() => setAnimationStage(1), 100); // Header animation
                        setTimeout(() => setAnimationStage(2), 100); // Path drawing
                        setTimeout(() => setAnimationStage(3), 100); // Bubbles
                        setTimeout(() => setAnimationStage(4), 100); // Fill gradient
                    } else {
                        setIsVisible(false);
                        setAnimationStage(0);
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: "-50px 0px",
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const milestones = [
        {
            x: 150,
            y: 450,
            year: "2006",
            label: "FOUND THE COMPANY",
        },
        {
            x: 280,
            y: 445,
            year: "2014",
            label:
                "INCORPORATE THE COMPANY \n LAUNCH OMS BRAND \n INTRODUCE OMS BRAND TO THE SRILANKA MARKET",
        },
        {
            x: 420,
            y: 437,
            year: "2015",
            label: "START DISTRIBUTION NETWORK IN SRI LANKA",
        },
        {
            x: 570,
            y: 418,
            year: "2016",
            label: "LAUNCH ONESAM BRAND",
        },
        {
            x: 690,
            y: 395,
            year: "2019",
            label:
                "START MANUFACTURING PLANT WITH MANUFACTURING \nDATA CABLES IN SRI LANKA",
        },
        {
            x: 790,
            y: 362,
            year: "2020",
            label: "LAUNCH XPERT BRAND",
        },
        {
            x: 880,
            y: 327,
            year: "2021",
            label: "EXPAND TO DUBAI MARKET WITH INCORPORATE NEW COMPANY",
        },
        {
            x: 980,
            y: 280,
            year: "2022",
            label: "START DISTRIBUTION NETWORK IN UAE",
        },
        {
            x: 1070,
            y: 220,
            year: "2024",
            label:
                "EXPAND TO ABHU DHABI MARKET \n INCORPORATE NEW COMPANY",
        },
        {
            x: 1145,
            y: 155,
            year: "2025",
            label:
                "START TO MANUFACTURE MOBILE CHARGERS \n INCORPORATE ZENZUL INDUSTRIES (PRIVATE) LIMITED ",
        },
    ];

    interface TooltipDimensions {
        width: number;
        height: number;
    }

    const getTooltipDimensions = (text: string): TooltipDimensions => {
        const avgCharsPerLine = 35;
        const lineHeight = 16;
        const padding = 24;

        // Calculate estimated lines needed
        const estimatedLines = Math.max(
            1,
            Math.ceil(text.length / avgCharsPerLine)
        );

        // Dynamic width based on content length
        let width: number;
        if (text.length > 80) {
            width = 450;
        } else if (text.length > 50) {
            width = 380;
        } else if (text.length > 25) {
            width = 320;
        } else {
            width = 280;
        }

        // Dynamic height based on estimated lines
        const height: number = Math.max(50, estimatedLines * lineHeight + padding + 10);

        return { width, height };
    };

    return (
        <div
            ref={sectionRef}
            className="relative py-5 flex flex-col items-center overflow-hidden min-h-screen"
        >
            {/* Background Image with low opacity */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[150%]"
                style={{
                    backgroundImage: "url('/images/Milestone background.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            {/* Gradient overlay to blend with background */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100/80 via-purple-100/80 via-blue-100/80 via-cyan-100/80 to-blue-100/80" />

            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
                <div
                    className={`absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full blur-xl transition-all duration-1000 ${isVisible ? "animate-pulse" : "opacity-0"
                        }`}
                />
                <div
                    className={`absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full blur-xl transition-all duration-1000 delay-300 ${isVisible ? "animate-pulse" : "opacity-0"
                        }`}
                />
                <div
                    className={`absolute bottom-20 left-1/4 w-36 h-36 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full blur-xl transition-all duration-1000 delay-500 ${isVisible ? "animate-pulse" : "opacity-0"
                        }`}
                />
                <div
                    className={`absolute bottom-10 right-1/3 w-28 h-28 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full blur-xl transition-all duration-1000 delay-700 ${isVisible ? "animate-pulse" : "opacity-0"
                        }`}
                />
            </div>

            {/* Content container with relative positioning */}
            <div className="relative z-10 w-full">
                <div className="container mx-auto px-4 sm:px-8 md:px-16">
                    <div
                        className={`h-[3px] w-full bg-blue-200 rounded-md mt-4 transition-all duration-1000 ${isVisible
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-full opacity-0"
                            }`}
                    />
                </div>

                <div className="container mx-auto">
                    <h2
                        className={`text-gray-500 text-2xl sm:text-3xl md:text-4xl font-medium text-center mb-5 pt-12 transition-all duration-1000 ${animationStage >= 1
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                            }`}
                    >
                        MILESTONES
                    </h2>

                    <div className="flex flex-col items-center mb-10">
                        <div className="relative h-[300px] sm:h-[400px] md:h-[650px] w-full max-w-7xl">
                            {/* SVG Graph Path */}
                            <svg
                                viewBox="0 0 1200 500"
                                className={`absolute w-full h-full transition-opacity duration-1000 ${animationStage >= 2 ? "opacity-100" : "opacity-0"
                                    }`}
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <defs>
                                    <marker
                                        id="arrowhead"
                                        markerWidth="10"
                                        markerHeight="7"
                                        refX="0"
                                        refY="3.5"
                                        orient="auto"
                                    >
                                        <polygon points="0 0, 5 3.5, 0 7" fill="#3B82F6" />
                                    </marker>
                                    <linearGradient
                                        id="curveFillGradient"
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                    >
                                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9" />
                                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                                        <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.4" />
                                    </linearGradient>
                                </defs>

                                {/* animated path stroke */}
                                <path
                                    d="M150,450 C500,450 900,400,1150,150"
                                    fill="none"
                                    stroke="#3B82F6"
                                    strokeWidth="3"
                                    strokeDasharray="2000"
                                    strokeDashoffset={animationStage >= 2 ? "0" : "2000"}
                                    className="transition-all duration-[2000ms] ease-in-out"
                                    style={{
                                        filter: "drop-shadow(0 2px 4px rgba(59, 130, 246, 0.3))",
                                    }}
                                />

                                {/* Gradient fill with delayed animation */}
                                <path
                                    d="M150,450 C500,450 900,400,1150,150 L1150,500 L150,500 Z"
                                    fill="url(#curveFillGradient)"
                                    stroke="none"
                                    opacity={animationStage >= 4 ? "1" : "0"}
                                    className="transition-opacity duration-1000"
                                />

                                {/* Milestone Bubbles */}
                                {milestones.map((milestone, i) => {
                                    // Get dynamic tooltip dimensions
                                    const { width: tooltipWidth, height: tooltipHeight } =
                                        getTooltipDimensions(milestone.label);

                                    // tooltip positioning with better calculations
                                    const baseTooltipY = milestone.y - tooltipHeight - 80;
                                    const tooltipY = Math.max(baseTooltipY, 20);
                                    const arrowStartY = milestone.y - 20;
                                    console.log(arrowStartY);

                                    // X positioning with viewport boundaries
                                    let tooltipX = milestone.x - tooltipWidth / 2;
                                    const padding = 25;
                                    const minX = padding;
                                    const maxX = 1200 - tooltipWidth - padding;
                                    tooltipX = Math.max(minX, Math.min(maxX, tooltipX));
                                    console.log(tooltipX);

                                    // Calculate arrow position relative to tooltip
                                    const arrowX = milestone.x;
                                    const arrowEndY = tooltipY + tooltipHeight + 5;
                                    console.log(arrowX, arrowEndY);

                                    const bubbleDelay = i * 50;
                                    const showBubble = animationStage >= 3;

                                    return (
                                        <g key={i} className="group cursor-pointer">
                                            {/* bubble with glow effect */}
                                            <circle
                                                cx={milestone.x}
                                                cy={milestone.y}
                                                r="12"
                                                className={`fill-white stroke-blue-400 stroke-3 cursor-pointer group-hover:fill-blue-500 group-hover:stroke-blue-600 transition-all duration-300 ease-out ${showBubble
                                                    ? "opacity-100 scale-100"
                                                    : "opacity-0 scale-0"
                                                    }`}
                                                style={{
                                                    filter:
                                                        "drop-shadow(0 4px 12px rgba(59, 130, 246, 0.4))",
                                                    transitionDelay: `${bubbleDelay}ms`,
                                                }}
                                            />

                                            <circle
                                                cx={milestone.x}
                                                cy={milestone.y}
                                                r="5"
                                                className={`fill-blue-500 group-hover:fill-white transition-all duration-300 ${showBubble ? "opacity-100" : "opacity-0"
                                                    }`}
                                                style={{
                                                    transitionDelay: `${bubbleDelay + 50}ms`,
                                                }}
                                            />

                                            {/* year label - Always visible */}
                                            <text
                                                x={milestone.x}
                                                y={milestone.y + 50}
                                                textAnchor="middle"
                                                className={`fill-blue-800 text-sm sm:text-base font-bold transition-all duration-500 ${showBubble
                                                    ? "opacity-100 translate-y-0"
                                                    : "opacity-0 translate-y-4"
                                                    }`}
                                                style={{
                                                    transitionDelay: `${bubbleDelay + 200}ms`,
                                                    filter: "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))",
                                                }}
                                            >
                                                {milestone.year}
                                            </text>
                                            <g
                                                className={`opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out ${showBubble ? "translate-y-0" : "translate-y-4"
                                                    }`}
                                                style={{
                                                    transitionDelay: `${bubbleDelay + 100}ms`,
                                                }}
                                            >
                                                {/* Connecting line */}
                                                <line
                                                    x1={milestone.x}
                                                    y1={milestone.y - 20}
                                                    x2={milestone.x}
                                                    y2={milestone.y - 80}
                                                    stroke="#60A5FA"
                                                    strokeWidth="2"
                                                />
                                                {(() => {
                                                    const lines = milestone.label.split("\n").filter((line) => line.trim());

                                                    return lines.map((line, lineIndex) => {
                                                        // const svgCenterX = 600;
                                                        // const isLeftSide = milestone.x < svgCenterX;
                                                        const spacing = 90;
                                                        const offsetY = milestone.y - spacing * (lineIndex + 1);

                                                        const maxLineLength = line.length;
                                                        const tooltipWidth = Math.max(180, Math.min(350, maxLineLength * 8 + 40));
                                                        const tooltipHeight = 50;

                                                        let tooltipX = milestone.x - (tooltipWidth / 2);
                                                        const padding = 20;
                                                        const minX = padding;
                                                        const maxX = 1200 - tooltipWidth - padding;
                                                        tooltipX = Math.max(minX, Math.min(maxX, tooltipX));

                                                        const tooltipY = offsetY - tooltipHeight;

                                                        return (
                                                            <React.Fragment key={lineIndex}>
                                                                {/* Line from bubble to tooltip */}
                                                                <line
                                                                    x1={milestone.x}
                                                                    y1={milestone.y - 20}
                                                                    x2={milestone.x}
                                                                    y2={tooltipY + tooltipHeight + 8}
                                                                    stroke="#60A5FA"
                                                                    strokeWidth="2"

                                                                />

                                                                {/* Tooltip rectangle */}
                                                                <rect
                                                                    x={milestone.year == "2025" ? tooltipX - tooltipWidth / 6 : milestone.year == "2006" ? tooltipX + tooltipWidth / 1.8 : milestone.year == "2014" ? tooltipX + tooltipWidth / 1.8 : tooltipX - tooltipWidth / 1.8}
                                                                    y={tooltipY + 30}
                                                                    width={tooltipWidth}
                                                                    height={tooltipHeight}
                                                                    rx="8"
                                                                    ry="8"
                                                                    fill="rgba(147, 197, 253, 0.95)"
                                                                    stroke="#3B82F6"
                                                                    strokeWidth="1"
                                                                    className="drop-shadow-lg"
                                                                />

                                                                {/* Tooltip tail bubble at end of line */}
                                                                <circle
                                                                    cx={milestone.x}
                                                                    cy={tooltipY + tooltipHeight + 8}
                                                                    r="4"
                                                                    fill="#3B82F6"
                                                                    z={100}
                                                                />

                                                                {/* Tooltip text */}
                                                                <foreignObject
                                                                    x={milestone.year == "2025" ? tooltipX - tooltipWidth / 6 : milestone.year == "2006" ? tooltipX + tooltipWidth / 1.8 : milestone.year == "2014" ? tooltipX + tooltipWidth / 1.8 : tooltipX - tooltipWidth / 1.8}
                                                                    y={tooltipY + 30}
                                                                    width={tooltipWidth}
                                                                    height={tooltipHeight}
                                                                >
                                                                    <div className="flex justify-center items-center h-full px-2 text-xs font-semibold text-blue-800">
                                                                        {line.trim()}
                                                                    </div>
                                                                </foreignObject>
                                                            </React.Fragment>
                                                        );
                                                    });
                                                })()}

                                            </g>
                                        </g>
                                    );
                                })}
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedMilestones;