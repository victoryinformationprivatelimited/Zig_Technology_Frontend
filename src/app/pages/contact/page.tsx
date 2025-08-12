"use client";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Contact Us | Zigo Technology (Pvt) Ltd.</title>
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
          <div className="relative w-full h-full overflow-hidden bg-white">
            <video
              src="/images/Contactus.mp4"
              className="w-full h-[80%] object-fill"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            />
          </div>
        </div>

        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="bg-white container mx-auto px-4 sm:px-8 md:px-16 pt-8 pb-4 mt-10"
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
                href="/pages/contact"
                className="text-blue-500 hover:text-blue-700 hover:underline transition-colors"
              >
                Contact us
              </Link>
            </li>
          </ol>
        </nav>

        <div className="flex flex-col items-center">
          <div className="bg-blue-200 rounded-md mx-auto h-[3px] w-11/12"></div>
        </div>

        {/* Main Contact Section */}
        <div className="bg-white py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-8 md:px-16">
            {/* Company Name Header */}
            <h2 className="text-gray-500 text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
              ZIGO TECHNOLOGY (PVT) LTD
            </h2>

            <div className="flex flex-col lg:flex-row gap-20">
              {/* Contact Information Section */}
              <div className="w-full lg:w-1/2 space-y-8">
                {/* Company Description */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg border border-blue-100">
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Have questions or need assistance? We&apos;re here to
                      help! Reach out to{" "}
                      <strong className="text-blue-700">
                        Zigo Technology (Private) Limited
                      </strong>{" "}
                      for inquiries about our products, services, or
                      distribution opportunities. Our team is ready to support
                      you across Sri Lanka and international markets. Get in
                      touch via phone, email, or visit us at our head office —
                      we&apos;d love to hear from you!
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-white">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-medium text-gray-800">
                      Address
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed ml-13">
                    <strong>No 99, Rathnapura Road, Horana.</strong>
                  </p>
                </div>

                {/* Hotline */}
                <div className="bg-white">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-medium text-gray-800">
                        Hotline
                      </h3>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-blue-600 font-medium text-base sm:text-lg transition-colors">
                        034 2266990
                      </p>
                      <p className="text-blue-600 font-medium text-base sm:text-lg transition-colors">
                        071 1260260
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map Section - Shows below hotline on tablet screens */}
                <div className="block lg:hidden w-full h-120 border-black border-2">
                  <div className="w-full h-full relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.435158858868!2d80.06153227475505!3d6.7166321932792155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24b0004cb2755%3A0x279db2921fcba636!2sZigo%20Technology%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1751357570172!5m2!1sen!2slk"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Map Section - Shows on right side for desktop */}
              <div className="hidden lg:block w-full lg:w-[500px] h-120 border-black border-2">
                <div className="w-full h-full relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.435158858868!2d80.06153227475505!3d6.7166321932792155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24b0004cb2755%3A0x279db2921fcba636!2sZigo%20Technology%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1751357570172!5m2!1sen!2slk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="mt-16 sm:mt-20 md:mt-24">
              {/* Descriptive Text Section */}
              <div className="text-center mb-12 sm:mb-16">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                    Get In Touch
                  </h3>
                  <p className="text-gray-600 text-lg sm:text-xl leading-relaxed px-4">
                    If you want more details, what to know from where to buy our
                    products in your hometown or join as a reseller please send
                    your inquiry and we will respond you shortly.
                  </p>
                </div>
              </div>

              {/* Contact Form Container */}
              <div className="relative overflow-hidden">
                {/* Glassmorphism Overlay */}
                <div className="absolute inset-0"></div>

                <div className="relative z-10 px-6 sm:px-12 md:px-16 py-6 sm:py-8 md:py-10">
                  {/* Contact Form */}
                  <ContactForm />
                </div>
              </div>
            </div>
            {/* Island Wide Sales Officers Section */}
            <div className="mt-16 sm:mt-20 md:mt-8"></div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
