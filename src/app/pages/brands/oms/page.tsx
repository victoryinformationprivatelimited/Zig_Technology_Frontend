import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import pro1 from "../../../../../public/images/products/OMS/OMS Products-9.png";
import pro2 from "../../../../../public/images/products/OMS/OMS Products-2.png";
import pro3 from "../../../../../public/images/products/OMS/OMS Products-5.png";
import pro4 from "../../../../../public/images/products/OMS/OMS Products-1.png";
import pro5 from "../../../../../public/images/products/OMS/OMS Products-12.png";
import pro6 from "../../../../../public/images/products/OMS/OMS Products-8.png";
import pro7 from "../../../../../public/images/products/OMS/OMS Products-7.png";
import pro8 from "../../../../../public/images/products/OMS/OMS Products-6.png";
import pro9 from "../../../../../public/images/products/OMS/OMS Products-3.png";
import pro10 from "../../../../../public/images/products/OMS/OMS Products-4.png";
import pro11 from "../../../../../public/images/products/OMS/OMS Products-11.png";
import pro12 from "../../../../../public/images/products/OMS/OMS Products-10.png";

export default function OMS() {
  const productCategories = [
    { image: pro1, name: "Chargers" },
    { image: pro2, name: "Car Chargers" },
    { image: pro3, name: "Power Banks" },
    { image: pro4, name: "Earbuds" },
    { image: pro5, name: "Earphones" },
    { image: pro6, name: "Neck Brands" },
    { image: pro7, name: "Headsets" },
    { image: pro8, name: "Cables" },
    { image: pro9, name: "Speakers" },
    { image: pro10, name: "SD Cards" },
    { image: pro11, name: "Pen Drives" },
    { image: pro12, name: "Power Extensions" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
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
        <div className="relative">
          {/* Background circuit pattern */}
          <div className="relative w-full h-full overflow-hidden bg-white">
            <video
              src="/images/Commonbanner.mp4"
              className="w-full h-[80%] object-fill"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10">
              <Image
                src="/images/Web site images-01.png"
                alt="Vision Icon"
                height={350}
                width={350}
                className="object-contain mx-auto"
              />
              {/* Main title with gradient and effects */}
              {/* <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-2 tracking-wider">
                  <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent drop-shadow-lg">
                    OMS
                  </span>
                </h1> */}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="p-5">
              <ol className="flex space-x-2">
                <li>
                  <Link
                    href="/"
                    className="text-red-600 hover:underline hover:text-red-700"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <span className="text-gray-500">/</span>
                </li>
                <li>
                  <Link
                    href="/pages/brands"
                    className="text-red-600 hover:underline hover:text-red-700"
                  >
                    Our Brands
                  </Link>
                </li>
                <li>
                  <span className="text-gray-500">/</span>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-red-600 hover:underline hover:text-red-700"
                  >
                    OMS
                  </Link>
                </li>
              </ol>
            </nav>
            {/* Heading */}
            <div className="flex flex-col items-center">
              <div className="mt-8 h-[3px] w-11/12 bg-gradient-to-r from-red-400 to-red-600 rounded-md mx-auto"></div>
            </div>

            {/* brands */}
            <div className="flex flex-col md:flex-row justify-between mt-10">
              {/* Vertical line */}
              <div className="w-0.5 bg-gradient-to-b from-red-400 to-gray-400 mx-2 h-1vh mt-10"></div>
              {/* OMS */}
              <div className="flex-1 text-center p-6 justify-center mt-[-50]">

                <div className="bg-white rounded-lg shadow-sm border-l-4 border-red-500 p-6 mb-6">
                  <p className="text-gray-700 max-w-auto text-justify leading-relaxed">
                    The <strong>OMS</strong> product range by{" "}
                    <strong>Zigo Technology (Private) Limited </strong>
                    offers a comprehensive selection of high-quality mobile
                    phone accessories designed to meet the everyday needs of
                    modern consumers. Combining innovative design, durability,
                    and affordability, OMS products have earned a trusted
                    reputation both in Sri Lanka and across international
                    markets.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border-r-4 border-gray-500 p-6 mb-6">
                  <p className="text-gray-700 max-w-auto text-justify leading-relaxed">
                    The range includes fast-charging solutions such as wall
                    chargers, car chargers, wireless charging pads, and durable
                    cables compatible with all major smartphone brands. OMS also
                    features premium audio accessories including wired and
                    wireless earphones, Bluetooth speakers, and hands-free
                    devices, all delivering clear sound and reliable
                    performance.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border-l-4 border-red-500 p-6 mb-6">
                  <p className="text-gray-700 max-w-auto text-justify leading-relaxed">
                    For power on the go, OMS power banks are available in sleek,
                    compact designs with high-capacity batteries and built-in
                    safety features. The product line extends to mobile
                    protection with stylish phone cases, shockproof covers,
                    tempered glass screen protectors, and camera lens guards
                    that offer superior defense without compromising on
                    aesthetics.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border-r-4 border-gray-500 p-6 mb-6">
                  <p className="text-gray-700 max-w-auto text-justify leading-relaxed">
                    Additionally, OMS offers a variety of data cables, adapters,
                    mounts, and holders—providing practical solutions for
                    seamless connectivity and user convenience. With a
                    commitment to quality and user satisfaction, OMS continues
                    to enhance the mobile experience through reliable,
                    functional, and stylish accessory options.
                  </p>
                </div>

                <div>
                  <div className="flex flex-col items-center">
                    <div className="p-10">
                      <h1 className="text-gray-600 font-bold text-4xl uppercase relative">
                        <span className="text-red-500">PRODUCT</span> CATEGORIES
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-red-400 to-gray-400 rounded"></div>
                      </h1>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 pb-12 rounded-xl">
                    {productCategories.map((product, index) => (
                      <div
                        key={index}
                        className="bg-white shadow-md rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl border-t-4 border-red-400 group"
                      >
                        <div className="relative w-full h-64 bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                          <Image
                            src={product.image}
                            alt={product.name}
                            layout="fill"
                            className="object-contain p-6"
                          />
                        </div>
                        <div className="p-4 text-center bg-gradient-to-r from-gray-50 to-red-50">
                          <h3 className="text-lg font-semibold text-gray-700 group-hover:text-red-600 transition-colors duration-300 mb-2">
                            {product.name}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
              <div className="w-0.5 bg-gradient-to-b from-gray-400 to-red-400 mx-2 h-1vh mt-10"></div>
            </div>
          </div>
        </div>
      </main >
      <Footer />
    </div >
  );
}



// {/* Animated scroll indicator */}
//                 <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//                   <div className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center">
//                     <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-bounce"></div>
//                   </div>
//                 </div>