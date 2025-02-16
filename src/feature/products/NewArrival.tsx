import React from 'react';
import ProductCard from './card/ProductsCard';


const products = [
    {
        id: "1",
        name: "Palm Ring",
        category: "earrings",
        price: 100.0,
        image: { img1: "https://i.ibb.co.com/FqC3KKBY/242534-4-5-20240922130028605-width-1024.jpg", img2: "https://i.ibb.co.com/zHC8PLGk/242534cu1-4-5-20241016071125135-width-1024.jpg" }
    },
    {
        id: "2",
        name: "Birthstone Necklace for Women",
        category: "necklaces",
        price: 100.0,
        image: {
            img1: "https://i.ibb.co.com/SwpFghZD/252516-4-5-20250201073723631-width-1024.jpg", img2: "https://i.ibb.co.com/rfxH8L4r/252516cu1-4-5-20250201073724576-width-1024.jpg"
        }
    },
    {
        id: "4",
        name: "Palm Ring",
        category: "earrings",
        price: 100.0,
        image: { img1: "https://i.ibb.co.com/FqC3KKBY/242534-4-5-20240922130028605-width-1024.jpg", img2: "https://i.ibb.co.com/zHC8PLGk/242534cu1-4-5-20241016071125135-width-1024.jpg" }
    },
    {
        id: "3",
        name: "Birthstone Necklace for Women",
        category: "necklaces",
        price: 100.0,
        image: {
            img1: "https://i.ibb.co.com/SwpFghZD/252516-4-5-20250201073723631-width-1024.jpg", img2: "https://i.ibb.co.com/rfxH8L4r/252516cu1-4-5-20250201073724576-width-1024.jpg"
        }
    },
]




const NewArrival = () => {
    return (
        <div className='container section-gap'>
            <div className="">
                <div className="flex flex-row items-center justify-between mb-12">
                    <div className="mb-8 lg:mb-0">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            New Arrival
                        </h2>
                        <div className="h-1 w-20 bg-gray-900 rounded" />
                    </div>
                    <button className="inline-flex items-center sm:px-6 px-3 py-2 sm:py-3 border border-gray-900 text-base font-medium rounded-full text-gray-900 bg-transparent hover:bg-primary hover:border-primary hover:text-white transition-colors duration-200">
                        View All Collections
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewArrival;