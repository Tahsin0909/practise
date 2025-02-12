"use client"

import { ArrowRight, Package, ShieldCheck, Users } from "lucide-react"
import { useState } from "react"
import SwiperCore from "swiper"
import { EffectFade, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"

const Banner = () => {
    // Fake data simulating API response
    const fakeSliderData = [
        {
            title: "Sale of the summer collection",
            imageUrl: "https://img.freepik.com/free-photo/beautiful-young-woman-wearing-sari_23-2149502953.jpg?ga=GA1.1.1088808881.1737022066&semt=ais_authors_boost"
        },
        {
            title: "Make your house into a home",
            imageUrl: "https://img.freepik.com/free-photo/young-woman-beautiful-dress_1303-17512.jpg?ga=GA1.1.1088808881.1737022066&semt=ais_authors_boost"
        },
    ]

    // State to store the slider data (using fake data)
    const [sliderData,] = useState(fakeSliderData)

    // Use Swiper modules
    SwiperCore.use([EffectFade, Navigation])

    return (
        <section className="relative">
            <Swiper navigation effect="fade" className="relative h-[calc(100vh-20vh)]">
                {sliderData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative h-full w-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.imageUrl})` }} // Dynamically set background image
                        >
                            <div className="absolute inset-0 bg-black/20">
                                <div className="container ">
                                    <div className="max-w-xl pt-20">
                                        <h2 className="mb-6 text-6xl font-bold leading-tight text-white">
                                            {slide.title} {/* Dynamically set title */}
                                        </h2>
                                        <a
                                            href="#"
                                            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-600"
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
            <div className="absolute -bottom-14 left-0 right-0 bg-white py-8 shadow-lg z-20 max-w-7xl rounded-r-full">
                <div className="container mx-auto px-10 pl-20">
                    <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <li className="flex items-start gap-4">
                            <Package className="h-8 w-8 text-orange-500" />
                            <div>
                                <h4 className="font-semibold">Free Shipping</h4>
                                <p className="text-sm text-gray-600">On purchases over $199</p>
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
