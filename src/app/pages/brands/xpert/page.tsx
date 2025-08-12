import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import pro1 from "../../../../../public/images/products/XPERT/Cables.png";
import pro2 from "../../../../../public/images/products/XPERT/Chargers.png";
import pro3 from "../../../../../public/images/products/XPERT/Power Banks.png";

export default function XPert() {
    const productCategories = [
        { image: pro1, name: "Cables" },
        { image: pro2, name: "Chargers" },
        { image: pro3, name: "Power Banks" },
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
                                src="/images/Web site images-03.png"
                                alt="Vision Icon"
                                height={350}
                                width={350}
                                className="object-contain mx-auto"
                            />
                        </div>
                    </div>

                </div>

                <div className="bg-gray-50 py-3">
                    <div className="container mx-auto px-4">
                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb" className="p-5">
                            <ol className="flex space-x-2">
                                <li>
                                    <Link
                                        href="/"
                                        className="text-blue-600 hover:underline hover:text-pink-600 transition-colors"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <span className="text-blue-500">/</span>
                                </li>
                                <li>
                                    <Link
                                        href="/pages/brands"
                                        className="text-blue-600 hover:underline hover:text-pink-600 transition-colors"
                                    >
                                        Our Brands
                                    </Link>
                                </li>
                                <li>
                                    <span className="text-blue-500">/</span>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-pink-600 hover:underline hover:text-blue-600 transition-colors"
                                    >
                                        X-Pert
                                    </Link>
                                </li>
                            </ol>
                        </nav>
                        {/* Heading */}
                        <div className="flex flex-col items-center">
                            <div className="mt-8 h-[3px] w-11/12 bg-gradient-to-r from-blue-400 via-pink-400 to-blue-400 rounded-md mx-auto"></div>
                        </div>

                        {/* brands */}
                        <div className="flex flex-col md:flex-row justify-between mt-10">
                            {/* Vertical line */}
                            <div className="w-0.5 bg-gradient-to-b from-pink-400 to-blue-400 mx-2 h-1vh mt-10"></div>
                            {/* X-PERT */}
                            <div className="flex-1 text-center p-6 justify-center mt-[-50]">


                                <div className="bg-white rounded-lg shadow-md border-l-4 border-pink-500 p-6 mb-6">
                                    <p className="text-gray-700 max-w-auto text-justify leading-relaxed">
                                        XPERT is the performance-driven mobile accessory line from
                                        Zigo Technology (Pvt) Ltd., engineered for users who refuse
                                        to compromise on speed, safety, and style. Every charger,
                                        cable, power bank, and audio device is built on rigorous R
                                        &D and certified components, ensuring rapid charging, stable
                                        connectivity, and long-life durability that stand up to
                                        everyday wear—whether you’re commuting across town or
                                        crossing borders for business.
                                    </p>
                                </div>

                                <div className="bg-white rounded-lg shadow-md border-r-4 border-blue-500 p-6 mb-6">
                                    <p className="text-gray-700 max-w-auto text-justify leading-relaxed">
                                        Beyond raw specs, XPERT products reflect a design language
                                        that blends minimal aesthetics with practical ergonomics.
                                        Sleek anodized finishes, reinforced braided cables, and
                                        compact, travel-friendly form factors make each piece as
                                        visually appealing as it is functional, while smart-chip
                                        protection shields both devices and users from over-voltage,
                                        overheating, and short circuits.
                                    </p>
                                </div>

                                <div className="bg-white rounded-lg shadow-md border-l-4 border-pink-500 p-6 mb-6">
                                    <p className="text-gray-700 max-w-auto text-justify leading-relaxed">
                                        From flagship-grade USB-C PD chargers to Bluetooth earphones
                                        tuned for crisp highs and punchy bass, XPERT’s portfolio is
                                        continually expanding alongside new mobile standards. Backed
                                        by Zigo’s country-wide service network and stringent quality
                                        assurance, the brand promises not just accessories, but a
                                        reliable ecosystem that empowers professionals, gamers, and
                                        everyday users to stay effortlessly connected—anytime,
                                        anywhere.
                                    </p>
                                </div>

                                <div>
                                    <div className="flex flex-col items-center">
                                        <div className="p-10">
                                            <h1 className="text-gray-600 font-bold text-4xl uppercase relative">
                                                <span className="text-pink-500">PRO</span>
                                                <span className="text-pink-500">DUCT</span>
                                                <span className="text-blue-500"> CATEGORIES</span>
                                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-pink-400 to-blue-400 rounded"></div>
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 pb-12">
                                        {productCategories.map(
                                            (product, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-white shadow-md rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl border-t-4 border-gradient-to-r from-pink-400 to-blue-400 group"
                                                    style={{
                                                        borderImage:
                                                            "linear-gradient(to right, #f472b6, #60a5fa) 1",
                                                    }}
                                                >
                                                    <div className="relative w-full h-64 bg-gradient-to-br from-pink-50 to-blue-50 group-hover:from-pink-100 group-hover:to-blue-100 transition-all duration-300">
                                                        <Image
                                                            src={product.image}
                                                            alt={product.name}
                                                            layout="fill"
                                                            className="object-contain p-6"
                                                        />
                                                    </div>
                                                    <div className="p-4 text-center bg-gradient-to-r from-pink-50 to-blue-50">
                                                        <h3 className="text-lg font-semibold text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-blue-600 transition-all duration-300">
                                                            {product.name}
                                                        </h3>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="w-0.5 bg-gradient-to-b from-blue-400 to-pink-400 mx-2 h-1vh mt-10"></div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}