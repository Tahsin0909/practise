import React from 'react';
import { ShoppingBag } from 'lucide-react';
import acc from "@/assets/dynamic/ssss(1).jpg"
function AllCollection() {
    return (
        <div className="min-h-screen bg-gray-50 container section-gap">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left Featured Section */}
                <div className="relative group overflow-hidden rounded-2xl">
                    <img
                        src="https://i.ibb.co.com/G3CZ7H6W/image.png"
                        alt="Spring Collection"
                        className="w-full h-[600px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8">
                        <h2 className="text-4xl font-serif text-white mb-4">
                            The Punjabi
                            <br />
                            Collection
                        </h2>
                        <button className="bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 hover:bg-primary hover:text-white transition-colors">
                            <ShoppingBag size={20} />
                            SHOP NOW
                        </button>
                    </div>
                </div>

                {/* Right Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Readers Section */}
                    <div className="relative group overflow-hidden rounded-2xl">
                        <img
                            src="https://i.ibb.co.com/JWvzTsYF/image.png"
                            alt="Readers"
                            className="w-full h-[290px] object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                        <h3 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
                            POLO
                        </h3>
                    </div>

                    {/* Progressives Section */}
                    <div className="relative group overflow-hidden rounded-2xl">
                        <img
                            src="https://i.ibb.co.com/0yM0p9Xx/image.png"
                            alt="Progressives"
                            className="w-full h-[290px] object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                        <h3 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
                            SHIRT
                        </h3>
                    </div>

                    {/* Accessories Section - Full Width */}
                    <div className="relative group overflow-hidden rounded-2xl col-span-full">
                        <img
                            src={acc.src}
                            alt="Accessories"
                            className="w-full h-[290px] object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                        <h3 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
                            ACCESSORIES
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllCollection;