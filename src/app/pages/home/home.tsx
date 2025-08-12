"use client";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountUp from "react-countup";
import Link from 'next/link';
import AnimatedMilestones from "@/components/AnimatedMilestones";

export default function Home() {
  const [achievementInView, setAchievementInView] = useState(false);
  const achievementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset and start animations when entering view
            setAchievementInView(true);
          } else {
            // Reset animations when leaving view
            setAchievementInView(false);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (achievementRef.current) {
      observer.observe(achievementRef.current);
    }

    return () => {
      if (achievementRef.current) {
        observer.unobserve(achievementRef.current);
      }
    };
  }, []);

  // Handle smooth scroll to Distribution section
  const handleDistributionClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    e.preventDefault();

    if (window.location.pathname === "/pages/production") {
      // If on production page, scroll to distribution section
      const distributionSection = document.getElementById("distribution");
      if (distributionSection) {
        distributionSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      window.location.href = "/pages/production#distribution";
    }
  };


  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Head>
        <title>Zigo Technology (Pvt) Ltd.</title>
        <meta
          name="description"
          content="Your trusted partner in mobile phone accessories."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div id="hero-section" className="bg-blue-900 relative">
          {/* Background circuit pattern */}
          <div className="relative w-full h-full overflow-hidden bg-white">
            <video
              src="/images/Banner1.mp4"
              className="w-full h-[80%] object-fill"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            />
          </div>
        </div>

        {/* Service Icons Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-around items-center gap-8">
              {/* Brands */}
              <div className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 relative cursor-pointer transition-all duration-500 ease-out group-hover:scale-125 group-hover:rotate-3 transform">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 ease-out transform scale-75 group-hover:scale-100"></div>
                    <div className="absolute inset-0 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform scale-90 group-hover:scale-110 blur-sm"></div>
                    <Link href="/pages/brands">
                      <Image
                        src="/images/Brands.png"
                        alt="Brands Icon"
                        fill
                        className="object-contain relative z-10 transition-all duration-300 group-hover:brightness-110"
                      />
                    </Link>
                  </div>
                </div>
                <h3 className="text-gray-500 uppercase text-xl font-medium transition-all duration-300 group-hover:text-blue-600 group-hover:font-semibold group-hover:scale-105 group-hover:tracking-wider">
                  BRANDS
                </h3>
              </div>

              {/* Production */}
              <div className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 relative cursor-pointer transition-all duration-500 ease-out group-hover:scale-125 group-hover:rotate-[-3deg] transform">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 ease-out transform scale-75 group-hover:scale-100"></div>
                    <div className="absolute inset-0 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform scale-90 group-hover:scale-110 blur-sm"></div>
                    <Link href="/pages/production">
                      <Image
                        src="/images/Products.png"
                        alt="Production Icon"
                        fill
                        className="object-contain relative z-10 transition-all duration-300 group-hover:brightness-110"
                      />
                    </Link>
                  </div>
                </div>
                <h3 className="text-gray-500 uppercase text-xl font-medium transition-all duration-300 group-hover:text-blue-600 group-hover:font-semibold group-hover:scale-105 group-hover:tracking-wider">
                  PRODUCTION
                </h3>
              </div>

              {/* Distribution */}
              <div className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 relative cursor-pointer transition-all duration-500 ease-out group-hover:scale-125 group-hover:rotate-3 transform">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 ease-out transform scale-75 group-hover:scale-100"></div>
                    <div className="absolute inset-0 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform scale-90 group-hover:scale-110 blur-sm"></div>
                    <Link href="/pages/production#distribution" onClick={handleDistributionClick}>
                      <Image
                        src="/images/Distribution.png"
                        alt="Contact Us Icon"
                        fill
                        className="object-contain relative z-10 transition-all duration-300 group-hover:brightness-110"
                      />
                    </Link>
                  </div>
                </div>
                <h3 className="text-gray-500 uppercase text-xl font-medium transition-all duration-300 group-hover:text-blue-600 group-hover:font-semibold group-hover:scale-105 group-hover:tracking-wider">
                  DISTRIBUTION
                </h3>
              </div>
            </div>
            <div className="container mx-auto px-4 sm:px-8 md:px-16">
              <div className="h-[3px] w-full bg-blue-200 rounded-md mt-4 transition-all duration-500 hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-orange-400 hover:h-[4px] hover:shadow-lg"></div>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div id="about-us-section" className="bg-white py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-gray-700 text-5xl font-bold text-center mb-12 tracking-wide">
              ABOUT US
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
              {/* Image Section */}
              <div className="relative group">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/images/Aboutus.png"
                    alt="About us"
                    className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-start">
                <div className="mb-8">
                  <h3 className="text-gray-700 text-3xl font-bold mb-4 relative inline-block">
                    COMPANY OVERVIEW
                    <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  </h3>
                </div>

                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg">
                    <span className="font-semibold text-blue-600">Zigo Technology (Private) Limited</span> is a premier industry leader
                    in the manufacturing, exportation, importation, and
                    distribution of high-quality mobile phone accessories, repair
                    parts, and electrical equipment. As the exclusive owner of the
                    <span className="font-semibold text-purple-600"> OMS brand</span> (OMS Mobile Phone Accessories) and the sole
                    distributor of Onesam and Xpert, we are committed to
                    delivering cutting-edge solutions that enhance mobile
                    connectivity and user experience.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-l-4 border-blue-500">
                    <p>
                      With the establishment of our <span className="font-medium text-blue-700">state-of-the-art manufacturing facility in Sri Lanka in 2019</span>, we have expanded our production capabilities to
                      manufacture premium mobile accessories that meet international
                      quality standards. Our strong export operations enable us to
                      supply OEM and branded accessories to global markets,
                      strengthening our presence across <span className="font-medium">China (PRC), Thailand,
                        Singapore, Bangladesh, India, and beyond</span>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <div>
                  <p>
                    Since our inception in <span className="font-medium text-blue-600">2006</span> and formal incorporation in <span className="font-medium text-purple-600">2014</span>,
                    Zigo Technology has continuously evolved, driven by a passion
                    for innovation, efficiency, and excellence. Our ability to
                    manufacture and export high-quality mobile accessories has
                    positioned us as a trusted global supplier, ensuring seamless
                    distribution and accessibility across international markets.
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <p>
                    At Zigo Technology, our commitment to technological
                    advancement and superior manufacturing standards remains the
                    driving force behind our success. By maintaining a robust
                    distribution network and a relentless focus on quality, we
                    continue to set new benchmarks in the mobile accessories
                    industry.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full mb-12 mt-12">
                <div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <p className="mb-4">
                      Founded in 2006 and incorporated in 2014, Zigo Technology has
                      grown rapidly over the years, expanding its services
                      island-wide while maintaining a strong focus on customer
                      satisfaction. Our dedication to excellence has enabled us to
                      build strategic partnerships with international markets,
                      including the People&apos;s Republic of China (PRC),
                      Thailand, Singapore, Bangladesh, and India.
                    </p>

                    <p>
                      In <span className="font-medium text-green-600">2019</span>, we launched our own mobile phone accessory
                      manufacturing plant in Sri Lanka, marking a significant
                      milestone in our journey. With the support of our extensive
                      distribution network, we remain committed to delivering
                      high-quality products and ensuring fast, efficient
                      distribution to meet the growing demands of our customers.
                    </p>
                  </div>

                  {/* Timeline highlights */}
                  <div className="flex justify-between items-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 mt-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">2006</div>
                      <div className="text-sm text-gray-500">Founded</div>
                    </div>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 mx-4"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">2014</div>
                      <div className="text-sm text-gray-500">Incorporated</div>
                    </div>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-500 via-green-500 to-blue-500 mx-4"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">2019</div>
                      <div className="text-sm text-gray-500">Manufacturing Plant</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* Vision and Mission - Side by Side within container */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row justify-between gap-8">
                {/* Vision */}
                <div className="flex-1 text-center md:border-r md:border-gray-300 md:pr-8 group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-100 rounded-xl p-6">
                  <div className="flex justify-center mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <div className="w-24 h-24 relative overflow-hidden rounded-full shadow-lg group-hover:shadow-xl transition-all duration-500">
                      <Image
                        src="/images/vision.jpg"
                        alt="Vision Icon"
                        fill
                        className="object-contain transform transition-all duration-500 group-hover:scale-110"
                      />
                      {/* Animated overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    </div>
                  </div>
                  <h3 className="text-gray-600 text-2xl font-medium mb-4 transform transition-all duration-500 group-hover:text-blue-700 group-hover:scale-105">
                    OUR VISION
                  </h3>
                  <p className="text-gray-600 transform transition-all duration-500 group-hover:text-gray-700 leading-relaxed">
                    To become the world&apos;s leading brand in mobile accessories
                    and electronic equipment, recognized for innovation,
                    superior quality and exceptional customer experience.
                  </p>
                  {/* Animated underline */}
                  <div className="w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 transition-all duration-500 group-hover:w-full rounded-full"></div>
                </div>

                {/* Mission */}
                <div className="flex-1 text-center md:pl-8 group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-100 rounded-xl p-6">
                  <div className="flex justify-center mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <div className="w-24 h-24 relative overflow-hidden rounded-full shadow-lg group-hover:shadow-xl transition-all duration-500">
                      <Image
                        src="/images/mission.jpg"
                        alt="Mission Icon"
                        fill
                        className="object-contain transform transition-all duration-500 group-hover:scale-110"
                      />
                      {/* Animated overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    </div>
                  </div>
                  <h3 className="text-gray-600 text-2xl font-medium mb-4 transform transition-all duration-500 group-hover:text-green-700 group-hover:scale-105">
                    OUR MISSION
                  </h3>
                  <p className="text-gray-600 transform transition-all duration-500 group-hover:text-gray-700 leading-relaxed">
                    To deliver premium mobile accessories and electronic
                    equipment to customers worldwide, ensuring quality,
                    innovation and customer satisfaction.
                  </p>
                  {/* Animated underline */}
                  <div className="w-0 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto mt-4 transition-all duration-500 group-hover:w-full rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="container mx-auto px-4 sm:px-8 md:px-16">
              <div className="h-[3px] w-full bg-blue-200 rounded-md mt-8"></div>
            </div>

            {/* Core Values */}
            <div className="w-full rounded-2xl p-6 sm:p-8 md:p-10">
              <h2 className="text-gray-500 text-4xl font-medium text-center mb-6 uppercase">
                Core Values
              </h2>

              {/* Grid container for 2 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* 1 */}
                <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-blue-600 hover:shadow-lg hover:bg-blue-100 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="flex-grow">
                      <h4 className="font-bold text-blue-800 text-base sm:text-lg mb-2 uppercase">
                        Quality & Innovation
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        We prioritize high quality materials and cutting-edge
                        technology to create durable, innovative accessories
                        that enhance user experience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2 */}
                <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-green-600 hover:shadow-lg hover:bg-green-100 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="flex-grow">
                      <h4 className="font-bold text-green-800 text-base sm:text-lg mb-2 uppercase">
                        Customer – Centric Approach
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        Our customers are at the heart of everything we do. We
                        strive to exceed expectations with exceptional service,
                        reliability and value.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3 */}
                <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-purple-600 hover:shadow-lg hover:bg-purple-100 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="flex-grow">
                      <h4 className="font-bold text-purple-800 text-base sm:text-lg mb-2 uppercase">
                        Sustainability & Responsibility
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
                        We are committed to eco friendly manufacturing reducing
                        waste, and ensuring responsible sourcing of materials
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4 */}
                <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-red-600 hover:shadow-lg hover:bg-red-100 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="flex-grow">
                      <h4 className="font-bold text-red-800 text-base sm:text-lg mb-2 uppercase">
                        Integrity and Transparency
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        We conduct business with honesty, fairness and
                        transparency, building trust with customers, partners
                        and stakeholders
                      </p>
                    </div>
                  </div>
                </div>

                {/* 5 */}
                <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-yellow-600 hover:shadow-lg hover:bg-yellow-100 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="flex-grow">
                      <h4 className="font-bold text-yellow-800 text-base sm:text-lg mb-2 uppercase">
                        Global Reach, Local Commitment
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        While we operate globally, we remain dedicated to
                        understanding and meeting the unique needs of local
                        markets
                      </p>
                    </div>
                  </div>
                </div>

                {/* 6 */}
                <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-orange-600 hover:shadow-lg hover:bg-orange-100 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="flex-grow">
                      <h4 className="font-bold text-orange-800 text-base sm:text-lg mb-2 uppercase">
                        Continuous Improvement
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        We embrace change, adapt to new trends and continuously
                        improve our products and processes to stay ahead in the
                        industry.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-teal-600 hover:shadow-lg hover:bg-green-100 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="flex-grow">
                      <h4 className="font-bold text-teal-800 text-base sm:text-lg mb-2 uppercase">
                        Strong Partnerships
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        We believe in fostering long-term relationships with
                        suppliers, distributors and retailers to create a strong
                        and sustainable supply chain.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4 sm:px-8 md:px-16">
              <div className="h-[3px] w-full bg-blue-200 rounded-md mt-12"></div>
            </div>
          </div>
        </div >

        {/* Achievements Section */}
        < div
          ref={achievementRef}
          className="bg-gradient-to-b from-white to-blue-500 py-16 relative overflow-hidden"
        >
          <div className="container mx-auto px-4 relative z-10">
            <h2
              className={`text-gray-500 text-4xl font-medium text-center mb-6 transform transition-all duration-1000 ${achievementInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
                }`}
            >
              OUR ACHIEVEMENTS
            </h2>

            <div className="flex flex-wrap justify-center gap-8">
              {/* 15 Years Experience */}
              <div
                className={`p-8 text-center w-full md:w-64 transform transition-all duration-300 delay-300 ${achievementInView
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-20 opacity-0 scale-95"
                  } hover:scale-110 hover:shadow-2xl hover:bg-white hover:bg-opacity-20 rounded-xl transition-all duration-300 cursor-pointer group`}
              >
                <div className="relative">
                  <h3 className="text-blue-700 text-5xl font-bold mb-2 relative z-10 group-hover:text-blue-800 transition-colors duration-300">
                    {achievementInView && (
                      <CountUp
                        key={`years-${achievementInView}`}
                        end={15}
                        duration={3}
                        separator=","
                        delay={0.5}
                        onEnd={() => console.log("15 years animation complete")}
                      />
                    )}
                  </h3>
                </div>
                <p className="text-blue-700 font-semibold uppercase text-xl group-hover:text-blue-800 transition-colors duration-300">
                  YEARS
                </p>
                <p className="text-blue-700 text-sm group-hover:text-blue-800 transition-colors duration-300">
                  Competence On Mobile Accessory Industry
                </p>
                {/* Animated underline */}
                <div className="w-0 h-1 bg-blue-600 mx-auto mt-2 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>

              {/* 3500+ Products */}
              <div
                className={`p-8 text-center w-full md:w-64 transform transition-all duration-300 delay-500 ${achievementInView
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-20 opacity-0 scale-95"
                  } hover:scale-110 hover:shadow-2xl hover:bg-white hover:bg-opacity-20 rounded-xl transition-all duration-300 cursor-pointer group`}
              >
                <div className="relative">
                  <h3 className="text-blue-700 text-5xl font-bold mb-2 relative z-10 group-hover:text-blue-800 transition-colors duration-300">
                    {achievementInView && (
                      <CountUp
                        key={`products-${achievementInView}`}
                        end={3500}
                        duration={4}
                        separator=","
                        delay={0.8}
                        onEnd={() => console.log("3500+ animation complete")}
                      />
                    )}
                    +
                  </h3>
                </div>
                <p className="text-blue-700 text-sm group-hover:text-blue-800 transition-colors duration-300">
                  PRODUCTS
                </p>
                {/* Animated underline */}
                <div className="w-0 h-1 bg-blue-600 mx-auto mt-2 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>

              {/* Island-wide Customer Base */}
              <div
                className={`p-8 text-center w-full md:w-64 transform transition-all duration-300 delay-700 ${achievementInView
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-20 opacity-0 scale-95"
                  } hover:scale-110 hover:shadow-2xl hover:bg-white hover:bg-opacity-20 rounded-xl transition-all duration-300 cursor-pointer group`}
              >
                <div className="relative">
                  <div className="relative z-10">
                    <h3 className="text-blue-700 text-5xl font-bold mb-2 group-hover:text-blue-800 transition-colors">
                      {achievementInView && (
                        <CountUp
                          key={`customers-${achievementInView}`}
                          end={7500}
                          duration={4}
                          separator=","
                          delay={0.8}
                          onEnd={() => console.log("7500+ animation complete")}
                        />
                      )}
                      +
                    </h3>

                    <p className="text-blue-700 text-sm group-hover:text-blue-800 transition-colors duration-300">
                      ISLAND WIDE CUSTOMER BASE
                    </p>
                  </div>
                </div>
                {/* Animated underline */}
                <div className="w-0 h-1 bg-blue-600 mx-auto mt-2 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>

              {/* Island-wide Distribution Network */}
              <div
                className={`p-8 text-center w-full md:w-64 transform transition-all duration-300 delay-900 ${achievementInView
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-20 opacity-0 scale-95"
                  } hover:scale-110 hover:shadow-2xl hover:bg-white hover:bg-opacity-20 rounded-xl transition-all duration-300 cursor-pointer group`}
              >
                <div className="relative">
                  <div className="relative z-10">
                    <h3 className="text-blue-700 text-3xl font-bold mb-2 group-hover:text-blue-800 transition-colors">
                      ISLAND WIDE
                    </h3>
                    <p className="text-blue-700 text-sm uppercase group-hover:text-blue-800 transition-colors duration-300">
                      DISTRIBUTION
                    </p>
                    <p className="text-blue-700 text-sm group-hover:text-blue-800 transition-colors duration-300">
                      NETWORK
                    </p>
                  </div>
                </div>
                {/* Animated underline */}
                <div className="w-0 h-1 bg-blue-600 mx-auto mt-2 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            </div>

            <div
              className={`text-center mt-12 py-6 text-white rounded-lg transform transition-all duration-1000 delay-1100 ${achievementInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
                } hover:scale-105 transition-transform duration-300`}
            >
              <h3 className="text-4xl font-medium animate-pulse">
                LEADING MOBILE ACCESSORY MANUFACTURER IN SRI LANKA
              </h3>
              {/* Animated decorative elements */}
              <div className="flex justify-center mt-4 space-x-2">
                <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-100"></div>
                <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        </div >

        {/* Milestones */}
        < AnimatedMilestones />


      </main >
      <Footer />
    </div >

  );
}
