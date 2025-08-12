"use client";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect } from "react";
import SriLankaMap from "@/components/SriLankaMap";
import UaeMap from "@/components/UaeMap";

export default function Production() {
  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Production & Distribution | Zigo Technology (Pvt) Ltd.</title>
        <meta
          name="description"
          content="Leading manufacturer and distributor of mobile phone accessories in Sri Lanka."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative">
          {/* Background manufacturing image */}
          <div className="relative w-full h-full overflow-hidden bg-white">
            <video
              src="/images/ProductiontopBanner.mp4"
              className="w-full h-[80%] object-fill"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            />
          </div>
        </div>

        {/* Manufacturing Plant Section */}
        <div className="bg-white py-8 sm:py-12 mt-2 md:mt-6">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="container mx-auto px-4 sm:px-8 md:px-16 pt-4 pb-2"
          >
            <ol className="flex items-center space-x-2 text-sm sm:text-base">
              <li>
                <Link
                  href="/"
                  className="text-blue-500 hover:text-blue-700 hover:underline transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-1">/</span>
              </li>
              <li>
                <Link
                  href="/pages/production"
                  className="text-blue-500 hover:text-blue-700 hover:underline transition-colors"
                >
                  Production
                </Link>
              </li>
            </ol>
          </nav>

          {/* Decorative Line */}
          <div className="container mx-auto px-4 sm:px-8 md:px-16 mt-4">
            <div className="h-[3px] w-full bg-blue-200 rounded-md"></div>
          </div>

          <div className="bg-white py-8 sm:py-12">
            <div className="container mx-auto px-4 sm:px-8 md:px-16">
              <div className="py-4">
                <div className="flex flex-col items-start">
                  <div className="mb-6 sm:mb-10 flex flex-col sm:flex-row items-start sm:items-center sm:gap-6 ml-[-12]">
                    <h2 className="text-blue-900 text-2xl sm:text-3xl md:text-4xl font-extrabold text-start">
                      M A N U F A C T U R I N G
                    </h2>
                    <h2 className="text-blue-900 text-2xl sm:text-3xl md:text-4xl font-extrabold text-start">
                      P L A N T
                    </h2>
                  </div>

                  {/* Manufacturing Plant Image */}
                  <div className="w-full relative h-48 sm:h-64 md:h-96 mb-8 sm:mb-10">
                    <Image
                      src="/images/Manufacturing plant x.png"
                      alt="Zigo Technology Manufacturing Plant"
                      fill
                      className="object-cover rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Enhanced Manufacturing Process Content */}
                  <div className="w-full rounded-2xl p-6 sm:p-8 md:p-10">
                    <div className="mb-6">
                      <h3 className="text-blue-900 text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                        Our Manufacturing Excellence
                      </h3>
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        The <strong>manufacturing process</strong> is a
                        systematic approach to transforming raw materials into
                        finished products through various stages of production.
                        The process typically involves several key steps to
                        ensure efficiency, quality, and consistency. Below is a
                        general outline of the{" "}
                        <strong>manufacturing process:</strong>
                      </p>
                    </div>

                    {/* Process Steps Grid - Updated to match Home page layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                      {/* Step 1 */}
                      <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-100 cursor-pointer">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                            1
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-bold text-blue-800 text-base sm:text-lg mb-2 uppercase">
                              PRODUCT DESIGN & DEVELOPMENT
                            </h4>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                              Before manufacturing begins, engineers and
                              designers develop product blueprints, prototypes,
                              and specifications. This phase involves research,
                              testing, and refinement to ensure the final
                              product meets customer needs and industry
                              standards.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-green-600 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-100 cursor-pointer">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                            2
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-bold text-green-800 text-base sm:text-lg mb-2 uppercase">
                              MATERIAL SELECTION & PROCUREMENT
                            </h4>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                              The right materials are chosen based on
                              durability, cost, and functionality. Manufacturers
                              source raw materials from suppliers, ensuring they
                              meet quality standards and regulatory
                              requirements.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-purple-600 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-purple-100 cursor-pointer">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                            3
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-bold text-purple-800 text-base sm:text-lg mb-2 uppercase">
                              PRODUCTION & MANUFACTURING
                            </h4>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
                              Production and manufacturing processes vary based
                              on the industry and type of product but generally
                              involve several key stages. Casting and molding
                              are commonly used to form materials such as metal,
                              plastic, and rubber into specific shapes through
                              techniques like injection molding or die casting.
                              Machining and cutting involve precision shaping of
                              materials using equipment such as CNC machines,
                              lathes, or milling tools to achieve accurate
                              dimensions. Assembly and fabrication combine
                              individual components into a finished product
                              using methods like welding, soldering, riveting,
                              or adhesives, depending on the product
                              requirements. Each stage plays a vital role in
                              ensuring quality, functionality, and efficiency in
                              the final output.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Step 4 */}
                      <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-red-600 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-red-100 cursor-pointer">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                            4
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-bold text-red-800 text-base sm:text-lg mb-2 uppercase">
                              QUALITY CONTROL & TESTING
                            </h4>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                              Each product undergoes quality inspections to meet
                              industry standards and customer expectations. This
                              may include functional tests, durability
                              assessments, and compliance checks.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Step 5 */}
                      <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-yellow-600 hover:shadow-lg transition-all hover:scale-105 hover:bg-yellow-100 cursor-pointer duration-300">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                            5
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-bold text-yellow-800 text-base sm:text-lg mb-2 uppercase">
                              PACKAGING & LABELING
                            </h4>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                              Once approved, products are packaged for
                              protection during transport and storage. Proper
                              labeling ensures accurate identification,
                              branding, and regulatory compliance.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Step 6 */}
                      <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-indigo-600 hover:shadow-lg transition-all hover: duration-300 hover:scale-105 hover:bg-indigo-100 cursor-pointer">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                            6
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-bold text-indigo-800 text-base sm:text-lg mb-2 uppercase">
                              DISTRIBUTION & LOGISTICS
                            </h4>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                              Finished goods are shipped to warehouses,
                              retailers, or customers through a well-planned
                              supply chain. Inventory management and logistics
                              play a crucial role in timely delivery.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Step 7 */}
                      <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-teal-600 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-teal-100 cursor-pointer">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                            7
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-bold text-teal-800 text-base sm:text-lg mb-2 uppercase">
                              AFTER-SALES SUPPORT & MAINTENANCE
                            </h4>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                              Some products, such as electronics or machinery,
                              require warranties, customer service, and
                              maintenance support. This ensures customer
                              satisfaction and product longevity.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className=" h-[3px] w-11/12 bg-blue-200 rounded-md mx-auto"></div>
        </div>
        {/* Distribution Network Section */}
        <div id="distribution" className="py-8 sm:py-12">
          <div className="py-8 sm:py-12">
            <div className="container mx-auto px-4 sm:px-8 md:px-16">
              <div className="py-4">
                <div className="flex flex-col items-start">
                  <div className="mb-6 sm:mb-5 w-full">
                    <h2 className="text-blue-900 text-2xl sm:text-3xl md:text-4xl font-extrabold text-start">
                      LOCAL DISTRIBUTION
                    </h2>
                    <div className="w-24 h-1 rounded-full"></div>
                  </div>

                  {/* Distribution Content */}
                  <div className="w-full">
                    {/* Introduction */}
                    <div className="mb-8">
                      <div className="rounded-xl">
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                          Zigo Technology (Private) Limited operates through an
                          innovative <strong>direct distribution </strong>
                          model, delivering our premium brands{" "}
                          <strong>OMS, Onesam, and Xpert </strong>
                          efficiently across Sri Lanka. By partnering with
                          trusted courier services instead of maintaining
                          in-house distribution teams, we ensure rapid, reliable
                          product delivery to every corner of the nation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-[3px] w-11/12 bg-blue-200 rounded-md mx-auto"></div>
          </div>

          {/* Local Distribution Section - Improved Layout */}
          <div className="py-8 sm:py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-8 md:px-16">
              <div className="mb-8 sm:mb-12">
                <h2 className="text-blue-900 text-2xl sm:text-3xl md:text-4xl font-bold text-start">
                  DISTRIBUTION NETWORK
                </h2>
              </div>

              {/* Main Content Layout */}
              <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 items-start">
                {/* Map Section - Now larger and more prominent */}
                <div className="w-full xl:w-3/5 order-2 xl:order-1">
                  <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200">
                    <SriLankaMap />
                  </div>
                </div>

                {/* How Distribution Works Section - Repositioned */}
                <div className="w-full xl:w-2/5 order-1 xl:order-2">
                  <div className="mb-6">
                    <h3 className="text-blue-900 text-xl sm:text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                      HOW THE DISTRIBUTION WORKS
                    </h3>

                    {/* Vertical layout for distribution steps on larger screens */}
                    <div className="space-y-4 sm:space-y-6">
                      {/* Direct Order Processing */}
                      <div className="bg-white rounded-xl p-4 sm:p-5 shadow-md border-l-4 border-green-600 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-50 cursor-pointer">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                            <svg
                              className="w-5 h-5 sm:w-6 sm:h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              ></path>
                            </svg>
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-bold text-green-800 text-sm sm:text-base md:text-lg mb-2 uppercase">
                              Direct Order Processing
                            </h4>
                            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                              Retailers, mobile accessory shops, and corporate
                              clients place orders directly with{" "}
                              <strong>Zigo Technology.</strong> This eliminates
                              intermediaries and ensures customers receive
                              authentic products at competitive prices.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Courier-Based Delivery */}
                      <div className="bg-white rounded-xl p-4 sm:p-5 shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-50 cursor-pointer">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                            <svg
                              className="w-5 h-5 sm:w-6 sm:h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h.5a2.5 2.5 0 012.5 2.5V12a2.5 2.5 0 01-2.5 2.5H17v5a1 1 0 01-1 1H8a1 1 0 01-1-1v-5H5.5A2.5 2.5 0 013 12V9.5A2.5 2.5 0 015.5 7H8z"
                              ></path>
                            </svg>
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-bold text-blue-800 text-sm sm:text-base md:text-lg mb-2 uppercase">
                              Courier-Based Delivery
                            </h4>
                            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                              Once an order is processed, the products are
                              dispatched using <strong>courier service.</strong>{" "}
                              This enables efficient and timely delivery to
                              retailers across{" "}
                              <strong>all regions of Sri Lanka, </strong>
                              including urban and rural areas.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Centralized Inventory */}
                      <div className="bg-white rounded-xl p-4 sm:p-5 shadow-md border-l-4 border-purple-600 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-purple-50 cursor-pointer">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 text-white rounded-full flex items-center justify-center">
                            <svg
                              className="w-5 h-5 sm:w-6 sm:h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                              ></path>
                            </svg>
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-bold text-purple-800 text-sm sm:text-base md:text-lg mb-2 uppercase">
                              Centralized Inventory Management
                            </h4>
                            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                              Zigo Technology operates a{" "}
                              <strong>centralized warehouse </strong>
                              where all OMS, Onesam, and Xpert products are
                              stored and dispatched. Orders are packed and
                              shipped directly from this facility, ensuring
                              stock accuracy and quick turnaround times.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Retail and Corporate Supply */}
                      <div className="bg-white rounded-xl p-4 sm:p-5 shadow-md border-l-4 border-amber-600 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-amber-50 cursor-pointer">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-amber-600 text-white rounded-full flex items-center justify-center">
                            <svg
                              className="w-5 h-5 sm:w-6 sm:h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                              ></path>
                            </svg>
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-bold text-amber-800 text-sm sm:text-base md:text-lg mb-2 uppercase">
                              Retail & Corporate Supply
                            </h4>
                            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                              The company directly supplies{" "}
                              <strong>
                                mobile accessory shops, repair centers, and
                                corporate clients{" "}
                              </strong>
                              with bulk and individual orders. This direct model
                              strengthens business relationships and maintains
                              consistent product quality.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                  <strong>By leveraging logistics network,</strong> Zigo
                  Technology ensures
                  <strong> fast, secure, and efficient </strong> product
                  distribution across Sri Lanka while maintaining complete
                  control over its supply chain.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="mt-8 h-[3px] w-11/12 bg-blue-200 rounded-md mx-auto"></div>
          </div>

          {/* International Distribution Section */}
          <div className="py-4 sm:py-6 md:py-8 relative">
            <div className="container mx-auto px-4 sm:px-8 md:px-16">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-blue-900 text-2xl sm:text-3xl md:text-4xl font-bold text-start mb-4">
                  INTERNATIONAL DISTRIBUTION
                </h2>
              </div>

              {/* Content Section */}
              <div className="mb-8 space-y-6">
                {/* Introduction Paragraph */}
                <div>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                    As part of its ongoing global expansion strategy,{" "}
                    <strong>Zigo Technology (Private) Limited</strong> has
                    established a strong international distribution presence to
                    serve key markets outside Sri Lanka. Our international
                    operations are designed to reflect the same commitment to
                    quality, innovation, and customer service that define our
                    local operations.
                  </p>
                </div>

                {/* UAE Operations Section */}
                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200">
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      UAE
                    </span>
                    United Arab Emirates Operations
                  </h3>

                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                    In the United Arab Emirates, we operate through two key
                    entities:
                  </p>

                  {/* Entity Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-5 border-l-4 border-blue-600">
                      <h4 className="font-bold text-blue-900 text-lg mb-2">
                        Hikma Al Nur Trading LLC
                      </h4>
                      <p className="text-blue-700 font-medium mb-2 items-center">
                        <svg
                          className="w-4 h-4 inline mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Dubai
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-5 border-l-4 border-green-600">
                      <h4 className="font-bold text-green-900 text-lg mb-2">
                        Nur Al Hikma Trading LLC
                      </h4>
                      <p className="text-green-700 font-medium mb-2 items-center">
                        <svg
                          className="w-4 h-4 inline mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Abu Dhabi
                      </p>
                    </div>
                  </div>

                  {/* Operations Description */}
                  <div className="space-y-4">
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      These two companies function as our official distribution
                      arms in the UAE, facilitating the import, distribution,
                      and retail of Zigo Technology’s complete range of
                      products, including:
                    </p>

                    {/* Product Categories */}
                    <div className="flex flex-wrap gap-3 my-4">
                      <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                        Mobile Phone Accessories
                      </span>
                      <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                        Electronic Parts
                      </span>
                      <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                        Consumer Tech Solutions
                      </span>
                    </div>

                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Both{" "}
                      <strong className="text-blue-900">Hikma Al Nur</strong>{" "}
                      and{" "}
                      <strong className="text-green-900">Nur Al Hikma</strong>{" "}
                      replicate the distribution model used successfully in Sri
                      Lanka, ensuring efficient delivery, brand representation,
                      and after-sales support throughout the UAE.
                    </p>
                  </div>
                </div>

                {/* Strategic Benefits Section */}
                <div>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Through these strategic channels, Zigo Technology continues
                    to strengthen its presence in the Middle East, leveraging
                    local expertise and infrastructure while maintaining
                    centralized oversight and quality assurance from its Sri
                    Lankan headquarters. This network allows us to serve
                    wholesale and retail markets more effectively and grow the
                    footprint of our leading brands—
                    <strong>OMS, ONESAM,</strong> and
                    <strong> XPERT</strong>—internationally.
                  </p>
                </div>
              </div>

              {/* Map and Information Section */}
              <div className="flex flex-col lg:flex-row gap-8 mt-8">
                <div className="w-full lg:w-1/2">
                  <UaeMap />
                </div>

                {/* Country Information - Improved */}
                <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
                  {/* Dubai Section */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-600">
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
                      <span className="text-2xl">🏙️</span>
                      Dubai Operations
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      Dubai serves as our primary commercial hub in the UAE,
                      leveraging the emirate&apos;s position as a global trading
                      center. Through Hikma Al Nur Trading LLC, we maintain
                      strong relationships with retailers, distributors, and
                      corporate clients across the region. Our Dubai operations
                      focus on rapid market penetration and establishing brand
                      presence in this highly competitive technology market.
                    </p>
                  </div>

                  {/* Abu Dhabi Section */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-600">
                    <h3 className="text-xl sm:text-2xl font-bold text-green-900 mb-4 flex items-center gap-3">
                      <span className="text-2xl">🏛️</span>
                      Abu Dhabi Operations
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      Abu Dhabi operations through Nur Al Hikma Trading LLC
                      focus on serving the capital emirate and surrounding
                      regions. This strategic location allows us to cater to
                      government contracts, corporate clients, and retail
                      networks throughout the region. Our Abu Dhabi presence
                      ensures comprehensive coverage and strengthens our
                      position in the UAE&apos;s growing technology sector.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
