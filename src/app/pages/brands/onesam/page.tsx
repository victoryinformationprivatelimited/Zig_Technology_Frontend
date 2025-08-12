import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import pro1 from "../../../../../public/images/products/ONESAM/Airpods.png";
import pro2 from "../../../../../public/images/products/ONESAM/Cable.png";
import pro3 from "../../../../../public/images/products/ONESAM/Car cha.png";
import pro4 from "../../../../../public/images/products/ONESAM/Chargers.png";
import pro5 from "../../../../../public/images/products/ONESAM/Earphone.png";
import pro6 from "../../../../../public/images/products/ONESAM/Neckband.png";
import pro7 from "../../../../../public/images/products/ONESAM/Phone holder.png";
import pro8 from "../../../../../public/images/products/ONESAM/Power banks.png";
import pro9 from "../../../../../public/images/products/ONESAM/Power extentions.png";
import pro10 from "../../../../../public/images/products/ONESAM/Selfie Sticks.png";
import pro11 from "../../../../../public/images/products/ONESAM/Speakers.png";

export default function OneSam() {
    const productCategories = [
        { image: pro1, name: "Earbuds" },
        { image: pro2, name: "Cables" },
        { image: pro3, name: "Car Chargers" },
        { image: pro4, name: "Chargers" },
        { image: pro5, name: "Earphones" },
        { image: pro6, name: "Neck Brands" },
        { image: pro7, name: "Phone Holders" },
        { image: pro8, name: "Power Banks" },
        { image: pro9, name: "Power Extensions" },
        { image: pro10, name: "Selfie Sticks" },
        { image: pro11, name: "Speakers" },
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
                                src="/images/Web site images-02.png"
                                alt="Vision Icon"
                                height={350}
                                width={350}
                                className="object-contain mx-auto"
                            />
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
                                        className="text-orange-600 hover:underline hover:text-orange-700"
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
                                        className="text-orange-600 hover:underline hover:text-orange-700"
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
                                        className="text-orange-600 hover:underline hover:text-orange-700"
                                    >
                                        ONESAM
                                    </Link>
                                </li>
                            </ol>
                        </nav>
                        {/* Heading */}
                        <div className="flex flex-col items-center">
                            <div className="mt-8 h-[3px] w-11/12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-md mx-auto"></div>
                        </div>

                        {/* brands */}
                        <div className="flex flex-col md:flex-row justify-between mt-10">
                            {/* Vertical line */}
                            <div className="w-0.5 bg-gradient-to-b from-orange-400 to-gray-400 mx-2 h-1vh mt-10"></div>
                            {/* ONE SAM */}
                            <div className="flex-1 text-center p-6 justify-center mt-[-50]">


                                <div className="bg-white rounded-lg shadow-sm border-l-4 border-orange-500 p-6 mb-6">
                                    <p className="text-gray-700 max-w-auto text-justify leading-relaxed">
                                        ONESAM is a trusted and innovative brand specializing in
                                        high-quality mobile phone accessories and electronic
                                        gadgets. Designed to enhance everyday digital experiences,
                                        ONESAM products combine durability, functionality, and sleek
                                        design. The brand offers a wide range of accessories
                                        including USB cables, chargers, power banks, handsfree
                                        devices, phone holders, and more—crafted to meet the needs
                                        of modern tech users.
                                    </p>
                                </div>

                                <div className="bg-white rounded-lg shadow-sm border-r-4 border-black-500 p-6 mb-6">
                                    <p className="text-gray-700 max-w-auto text-justify leading-relaxed">
                                        Each product is developed using advanced technology and
                                        premium materials to ensure optimal performance, safety, and
                                        user convenience. ONESAM stands out for its commitment to
                                        quality and affordability, making it a popular choice for
                                        consumers seeking reliable mobile solutions.
                                    </p>
                                </div>

                                <div className="bg-white rounded-lg shadow-sm border-l-4 border-orange-500 p-6 mb-6">
                                    <p className="text-gray-700 max-w-auto text-justify leading-relaxed">
                                        With a strong presence in local and international markets,
                                        ONESAM continues to expand its portfolio by adapting to the
                                        latest trends and customer demands—offering smart, stylish,
                                        and practical accessories that elevate mobile device
                                        usability.
                                    </p>
                                </div>

                                <div>
                                    <div className="flex flex-col items-center">
                                        <div className="p-10">
                                            <h1 className="text-gray-600 font-bold text-4xl uppercase relative">
                                                <span className="text-orange-500">PRODUCT</span> CATEGORIES
                                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-orange-400 to-gray-400 rounded"></div>
                                            </h1>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 pb-12">
                                        {productCategories.map(
                                            (product, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-white shadow-md rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl border-t-4 border-orange-400 group"
                                                >
                                                    <div className="relative w-full h-64 bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                                                        <Image
                                                            src={product.image}
                                                            alt={product.name}
                                                            layout="fill"
                                                            className="object-contain p-6"
                                                        />
                                                    </div>
                                                    <div className="p-4 text-center bg-gradient-to-r from-gray-50 to-orange-50">
                                                        <h3 className="text-lg font-semibold text-gray-700 group-hover:text-orange-600 transition-colors duration-300">
                                                            {product.name}
                                                        </h3>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="w-0.5 bg-gradient-to-b from-gray-400 to-orange-400 mx-2 h-1vh mt-10"></div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}