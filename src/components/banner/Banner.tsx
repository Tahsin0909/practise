"use client"

import { ArrowRight, Package, ShieldCheck, Users } from "lucide-react"
import { useState } from "react"
import SwiperCore from "swiper"
import { EffectFade, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import slide1 from "@/assets/dynamic/photo-1.jpg"
import slide2 from "@/assets/dynamic/photo-4.jpg"
import slide3 from "@/assets/dynamic/photo-6.jpg"

import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"

const Banner = () => {
    // Fake data simulating API response
    const fakeSliderData = [
        {
            title: "Embrace Tradition with Our Elegant and Stylish Punjabi Collection",
            imageUrl: slide2.src
        },
        {
            title: "Discover the Essence of Luxury with Our Exclusive Attar Collection",
            imageUrl: slide1.src
        },

        {
            title: "Embrace Tradition with Our Elegant and Stylish Accessories Collection",
            imageUrl: slide3.src
        },
    ]


    // State to store the slider data (using fake data)
    const [sliderData,] = useState(fakeSliderData)

    // Use Swiper modules
    SwiperCore.use([EffectFade, Navigation, Autoplay])

    const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
    const [currentImage, setCurrentImage] = useState<number>(0);

    return (
        <section className="relative lg:mb-20">
            <Swiper effect="fade" className="relative lg:h-[calc(100vh-20vh)] h-[calc(60vh-10vh)] sm:h-[calc(50vh-10vh)]"
                autoplay={{
                    delay: 3000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false,
                    stopOnLastSlide: false,
                }}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                onSlideChange={(swiper) => setCurrentImage(swiper.realIndex)}
            >
                {sliderData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative h-full w-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.imageUrl})` }} // Dynamically set background image
                        >
                            <div className="absolute inset-0 bg-black/20">
                                <div className="container flex items-start justify-center flex-col w-full h-full ">
                                    <div className="max-w-2xl  ">
                                        <h2 className="mb-6 md:text-4xl text-2xl lg:text-6xl font-bold leading-tight text-white">
                                            {slide.title} {/* Dynamically set title */}
                                        </h2>
                                        <a
                                            href="#"
                                            className="inline-flex items-center gap-2 rounded-full bg-primary/80 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary"
                                        >
                                            Shop now
                                            <ArrowRight className="h-4 w-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex items-center gap-1 justify-end mx-20 relative z-20 -translate-y-8">
                {fakeSliderData?.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => swiperInstance?.slideTo(idx)}
                        className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${currentImage === idx ? "bg-primary" : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>
            <div className="lg:absolute  lg:-bottom-14 left-0 right-0 bg-white py-8 lg:shadow-lg z-20 max-w-7xl lg:rounded-r-full">
                <div className="container mx-auto lg:px-10 lg:pl-20">
                    <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <li className="flex items-start gap-4">
                            <Package className="h-8 w-8 text-orange-500" />
                            <div>
                                <h4 className="font-semibold">Free Shipping</h4>
                                <p className="text-sm text-gray-600">On purchases over BDT 2500 tk</p>
                            </div>
                        </li>

                        <li className="flex items-start gap-4">
                            <Users className="h-8 w-8 text-orange-500" />
                            <div>
                                <h4 className="font-semibold">99% Satisfied Customers</h4>
                                <p className="text-sm text-gray-600">Our clients&apos; opinions speak for themselves</p>
                            </div>
                        </li>

                        <li className="flex items-start gap-4">
                            <ShieldCheck className="h-8 w-8 text-orange-500" />
                            <div>
                                <h4 className="font-semibold">Originality Guaranteed</h4>
                                <p className="text-sm text-gray-600">30 days warranty for each product from our store</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Banner
