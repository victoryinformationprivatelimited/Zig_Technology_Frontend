"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

export default function Brands() {
    const router = useRouter();

    const handleXpertClick = () => {
        router.push("/pages/brands/xpert");
    };

    const handleOmsClick = () => {
        router.push("/pages/brands/oms");
    };

    const handleOnesamClick = () => {
        router.push("/pages/brands/onesam");
    };

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
                <div>
                    {/* Background circuit pattern */}
                    <div className="relative w-full h-full overflow-hidden bg-white">
                        <video
                            src="/images/Brandstopbanner.mp4"
                            className="w-full h-[80%] object-fill"
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls={false}
                        />
                    </div>
                </div>

                <div className="bg-white py-6">
                    <div className="container mx-auto px-4 mb-12 md:mb-20">
                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb" className="p-3 md:p-5">
                            <ol className="flex space-x-2 text-sm md:text-base">
                                <li>
                                    <Link href="/" className="text-blue-500 hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <span className="text-blue-500">/</span>
                                </li>
                                <li>
                                    <Link
                                        href="/pages/brands"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Our Brands
                                    </Link>
                                </li>
                            </ol>
                        </nav>

                        {/* Heading */}
                        <div className="flex flex-col items-center">
                            <div className="container mx-auto px-4 sm:px-8 md:px-16">
                                <div className="h-[3px] w-full bg-blue-200 rounded-md mt-4"></div>
                            </div>{" "}
                            <div className="py-6 md:py-10">
                                <h1 className="text-gray-400 font-bold text-2xl md:text-3xl lg:text-4xl text-center">
                                    OUR BRANDS
                                </h1>
                                <div className="relative z-10 container mx-auto px-4 py-10 text-start text-black">
                                    {/* Placeholder text - replace with actual content */}
                                    <p className="text-lg text-justify">
                                        <strong>OMS, ONESAM, and XPERT</strong> are three distinct
                                        mobile accessory brands under Zigo Technology (Pvt) Ltd,
                                        each tailored to meet different user needs.{" "}
                                        <strong>OMS</strong> focuses on everyday reliability and
                                        affordability, offering a wide range of durable mobile
                                        accessories suited for general users.{" "}
                                        <strong>ONESAM</strong> stands out with its international
                                        appeal and stylish, ergonomic designs, delivering
                                        premium-quality products that blend innovation with user
                                        comfort. <strong>XPERT</strong> targets performance-driven
                                        users, providing fast-charging, high-safety accessories
                                        built with advanced technology and sleek aesthetics—ideal
                                        for professionals and tech enthusiasts seeking speed,
                                        durability, and efficiency.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Brands Section */}
                        <div>
                            {/* Desktop Layout - 3 columns with dividers */}
                            <div className="hidden lg:flex justify-between">
                                {/* Vertical line */}
                                <div className="w-0.5 bg-gray-200 mx-2 h-64 mt-10"></div>

                                {/* OMS */}
                                <div
                                    onClick={handleOmsClick}
                                    className="flex-1 text-center bg-white rounded-xl p-5 sm:p-6 shadow-md border-t-4 border-b-4 border-red-600 hover:shadow-lg hover:bg-gradient-to-r hover:from-red-300 hover:to-gray-300  transition-all duration-300 hover:scale-105 cursor-pointer"
                                >
                                    <div className="flex justify-center">
                                        <div className="w-48 h-52 relative">
                                            <Image
                                                src="/images/Web site images-01.png"
                                                alt="OMS Brand"
                                                height={300}
                                                width={300}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-gray-400 text-xl font-medium mb-4">
                                        OMS
                                    </h3>
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
                                    <button
                                        className="border-solid border-2 border-red-400 px-4 py-2 rounded-2xl text-red-400 mt-4 hover:bg-gray-200 hover:cursor-pointer hover:ring-2 hover:scale-105 transition-all duration-300"
                                        onClick={handleOmsClick}
                                    >
                                        Read More
                                    </button>
                                </div>

                                <div className="w-0.5 bg-gray-200 mx-2 h-64 mt-10"></div>

                                {/* ONESAM */}
                                <div
                                    onClick={handleOnesamClick}
                                    className="flex-1 text-center bg-white rounded-xl p-5 sm:p-6 shadow-md border-b-4 border-t-4 border-black hover:shadow-lg hover:bg-gradient-to-r hover:from-gray-300 hover:to-orange-300 transition-all duration-300 hover:scale-105 cursor-pointer"
                                >
                                    <div className="flex justify-center">
                                        <div className="w-48 h-52 relative">
                                            <Image
                                                src="/images/Web site images-02.png"
                                                alt="ONESAM Brand"
                                                height={300}
                                                width={300}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-gray-600 text-xl font-medium mb-4">
                                        ONESAM
                                    </h3>
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
                                    <button
                                        className="border-solid border-2 border-black px-4 py-2 rounded-2xl text-black mt-4 hover:bg-gray-200 hover:cursor-pointer hover:ring-2 hover:scale-105 transition-all duration-300"
                                        onClick={handleOnesamClick}
                                    >
                                        Read More
                                    </button>
                                </div>

                                <div className="w-0.5 bg-gray-200 mx-2 h-64 mt-10"></div>

                                {/* X-PERT */}
                                <div
                                    onClick={handleXpertClick}
                                    className="flex-1 text-center bg-white rounded-xl p-5 sm:p-6 shadow-md border-b-4 border-t-4 border-pink-600 hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-300 hover:to-blue-300 transition-all duration-300 hover:scale-105 cursor-pointer"
                                >
                                    <div className="flex justify-center">
                                        <div className="w-48 h-52 relative">
                                            <Image
                                                src="/images/Web site images-03.png"
                                                alt="X-PERT Brand"
                                                height={300}
                                                width={300}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-gray-600 text-xl font-medium mb-4">
                                        X-PERT
                                    </h3>
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
                                    <button
                                        className="border-solid border-2 border-pink-400 px-4 py-2 rounded-2xl text-pink-400 mt-4 hover:bg-gray-200 hover:cursor-pointer hover:ring-2 hover:scale-105 transition-all duration-300"
                                        onClick={handleXpertClick}
                                    >
                                        Read More
                                    </button>
                                </div>

                                <div className="w-0.5 bg-gray-200 mx-2 h-64 mt-10"></div>
                            </div>

                            {/* Tablet Layout - Grid without vertical dividers */}
                            <div className="hidden md:grid lg:hidden grid-cols-1 xl:grid-cols-3 gap-8 px-4">
                                {/* OMS */}
                                <div className="text-center bg-gray-50 p-6 rounded-lg">
                                    <div className="flex justify-center mb-4">
                                        <div className="w-40 h-40 relative">
                                            <Image
                                                src="/images/Web site images-01.png"
                                                alt="OMS Brand"
                                                height={300}
                                                width={300}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-gray-400 text-xl font-medium mb-4">
                                        OMS
                                    </h3>
                                    <p className="text-gray-600 mb-6 text-sm">
                                        The <strong>OMS</strong> product range by{" "}
                                        <strong>Zigo Technology (Private) Limited </strong>
                                        offers a comprehensive selection of high-quality mobile
                                        phone accessories designed to meet the everyday needs of
                                        modern consumers. Combining innovative design, durability,
                                        and affordability, OMS products have earned a trusted
                                        reputation both in Sri Lanka and across international
                                        markets.
                                    </p>
                                    <button
                                        className="border-solid border-2 border-gray-400 px-4 py-2 rounded-2xl text-gray-400 hover:bg-gray-200 hover:cursor-pointer hover:ring-2 hover:scale-105 transition-all duration-300"
                                        onClick={handleOmsClick}
                                    >
                                        Read More
                                    </button>
                                </div>

                                {/* ONESAM */}
                                <div className="text-center bg-gray-50 p-6 rounded-lg">
                                    <div className="flex justify-center mb-4">
                                        <div className="w-40 h-40 relative">
                                            <Image
                                                src="/images/Web site images-02.png"
                                                alt="ONESAM Brand"
                                                height={300}
                                                width={300}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-gray-600 text-xl font-medium mb-4">
                                        ONESAM
                                    </h3>
                                    <p className="text-gray-600 mb-6 text-sm">
                                        ONESAM is a trusted and innovative brand specializing in
                                        high-quality mobile phone accessories and electronic
                                        gadgets. Designed to enhance everyday digital experiences,
                                        ONESAM products combine durability, functionality, and sleek
                                        design. The brand offers a wide range of accessories
                                        including USB cables, chargers, power banks, handsfree
                                        devices, phone holders, and more—crafted to meet the needs
                                        of modern tech users.
                                    </p>
                                    <button
                                        className="border-solid border-2 border-gray-400 px-4 py-2 rounded-2xl text-gray-400 hover:bg-gray-200 hover:cursor-pointer hover:ring-2 hover:scale-105 transition-all duration-300"
                                        onClick={handleOnesamClick}
                                    >
                                        Read More
                                    </button>
                                </div>

                                {/* X-PERT */}
                                <div className="text-center bg-gray-50 p-6 rounded-lg">
                                    <div className="flex justify-center mb-4">
                                        <div className="w-40 h-40 relative">
                                            <Image
                                                src="/images/Web site images-03.png"
                                                alt="X-PERT Brand"
                                                height={300}
                                                width={300}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-gray-600 text-xl font-medium mb-4">
                                        X-PERT
                                    </h3>
                                    <p className="text-gray-600 mb-6 text-sm">
                                        XPERT is the performance-driven mobile accessory line from
                                        Zigo Technology (Pvt) Ltd., engineered for users who refuse
                                        to compromise on speed, safety, and style. Every charger,
                                        cable, power bank, and audio device is built on rigorous R
                                        &D and certified components, ensuring rapid charging, stable
                                        connectivity, and long-life durability that stand up to
                                        everyday wear—whether you’re commuting across town or
                                        crossing borders for business.
                                    </p>
                                    <button
                                        className="border-solid border-2 border-gray-400 px-4 py-2 rounded-2xl text-gray-400 hover:bg-gray-200 hover:cursor-pointer hover:ring-2 hover:scale-105 transition-all duration-300"
                                        onClick={handleXpertClick}
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>

                            {/* Mobile Layout - Stacked cards */}
                            <div className="md:hidden space-y-8 px-2">
                                {/* OMS */}
                                <div className="text-center bg-gray-50 p-6 rounded-lg">
                                    <div className="flex justify-center mb-4">
                                        <div className="w-32 h-32 relative">
                                            <Image
                                                src="/images/Web site images-01.png"
                                                alt="OMS Brand"
                                                height={200}
                                                width={200}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-gray-400 text-lg font-medium mb-3">
                                        OMS
                                    </h3>
                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                        magna aliquam erat volutpat.
                                    </p>
                                    <button
                                        className="border-solid border-2 border-gray-400 px-4 py-2 rounded-2xl text-gray-400 hover:bg-gray-200 hover:cursor-pointer hover:ring-2 transition-all duration-300"
                                        onClick={handleOmsClick}
                                    >
                                        Read More
                                    </button>
                                </div>

                                {/* Horizontal divider for mobile */}
                                <div className="border-t border-gray-200 my-6"></div>

                                {/* ONESAM */}
                                <div className="text-center bg-gray-50 p-6 rounded-lg">
                                    <div className="flex justify-center mb-4">
                                        <div className="w-32 h-32 relative">
                                            <Image
                                                src="/images/Web site images-02.png"
                                                alt="ONESAM Brand"
                                                height={200}
                                                width={200}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-gray-600 text-lg font-medium mb-3">
                                        ONESAM
                                    </h3>
                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                        magna aliquam erat volutpat.
                                    </p>
                                    <button
                                        className="border-solid border-2 border-gray-400 px-4 py-2 rounded-2xl text-gray-400 hover:bg-gray-200 hover:cursor-pointer hover:ring-2 transition-all duration-300"
                                        onClick={handleOnesamClick}
                                    >
                                        Read More
                                    </button>
                                </div>

                                {/* Horizontal divider for mobile */}
                                <div className="border-t border-gray-200 my-6"></div>

                                {/* X-PERT */}
                                <div className="text-center bg-gray-50 p-6 rounded-lg">
                                    <div className="flex justify-center mb-4">
                                        <div className="w-32 h-32 relative">
                                            <Image
                                                src="/images/Web site images-03.png"
                                                alt="X-PERT Brand"
                                                height={200}
                                                width={200}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-gray-600 text-lg font-medium mb-3">
                                        X-PERT
                                    </h3>
                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                        magna aliquam erat volutpat.
                                    </p>
                                    <button
                                        className="border-solid border-2 border-gray-400 px-4 py-2 rounded-2xl text-gray-400 hover:bg-gray-200 hover:cursor-pointer hover:ring-2 transition-all duration-300"
                                        onClick={handleXpertClick}
                                    >
                                        Read More
                                    </button>
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
