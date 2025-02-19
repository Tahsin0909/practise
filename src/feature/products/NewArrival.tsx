import React from 'react';
import ProductCard from './card/ProductsCard';


const products = [
    {
        "id": "1",
        "title": "Product 1",
        "description": "This is a description of Product 1.",
        "price": 89.99,
        "thumbnail": [
            "https://dorjibari.com.bd/cdn/shop/files/GH7A7157.jpg?v=1727157514",
            "https://dorjibari.com.bd/cdn/shop/files/GH7A7160.jpg?v=1727157514"
        ],
        "images": [
            "https://dorjibari.com.bd/cdn/shop/files/GH7A7152.jpg?v=1727157514",
            "https://dorjibari.com.bd/cdn/shop/files/GH7A7157.jpg?v=1727157514",
            "https://dorjibari.com.bd/cdn/shop/files/GH7A7160.jpg?v=1727157514"
        ],
        "size": ["32", "36", "40", "44", "48", "52"],
        "category": "clothing",
        "color": "Red",
        "fabric": "Cotton",
        "sleeve": "Full Sleeve",
        "style": "Casual"
    },
    {
        "id": "2",
        "title": "Product 2",
        "description": "This is a description of Product 2.",
        "price": 79.99,
        "thumbnail": [
            "https://dorjibari.com.bd/cdn/shop/files/GH7A7157.jpg?v=1727157514",
            "https://dorjibari.com.bd/cdn/shop/files/GH7A7160.jpg?v=1727157514"
        ],
        "images": [
            "https://dorjibari.com.bd/cdn/shop/files/GH7A7152.jpg?v=1727157514",
            "https://dorjibari.com.bd/cdn/shop/files/GH7A7157.jpg?v=1727157514",
            "https://dorjibari.com.bd/cdn/shop/files/GH7A7160.jpg?v=1727157514"
        ],
        "size": ["32", "36", "40", "44", "48", "52"],
        "category": "clothing",
        "color": "Blue",
        "fabric": "Silk",
        "sleeve": "Half Sleeve",
        "style": "Formal"
    },
    {
        "id": "3",
        "title": "Product 3",
        "description": "This is a description of Product 3.",
        "price": 129.99,
        "thumbnail": [
            "https://dorjibari.com.bd/cdn/shop/files/GH7A7157.jpg?v=1727157514",
            "https://dorjibari.com.bd/cdn/shop/files/GH7A7160.jpg?v=1727157514"
        ],
        "images": [
            "https://dorjibari.com.bd/cdn/shop/files/GH7A7152.jpg?v=1727157514",
            "https://dorjibari.com.bd/cdn/shop/files/GH7A7157.jpg?v=1727157514",
            "https://dorjibari.com.bd/cdn/shop/files/GH7A7160.jpg?v=1727157514"
        ],
        "size": ["32", "36", "40", "44", "48", "52"],
        "category": "clothing",
        "color": "Black",
        "fabric": "Denim",
        "sleeve": "Sleeveless",
        "style": "Traditional"
    },
    {
        "id": "4",
        "title": "Product 4",
        "description": "This is a description of Product 4.",
        "price": 99.99,
        "thumbnail": [
            "https://dorjibari.com.bd/cdn/shop/files/GH7A7157.jpg?v=1727157514",
            "https://dorjibari.com.bd/cdn/shop/files/GH7A7160.jpg?v=1727157514"
        ],
        "images": [
            "https://dorjibari.com.bd/cdn/shop/files/GH7A7152.jpg?v=1727157514",
            "https://dorjibari.com.bd/cdn/shop/files/GH7A7157.jpg?v=1727157514",
            "https://dorjibari.com.bd/cdn/shop/files/GH7A7160.jpg?v=1727157514"
        ],
        "size": ["32", "36", "40", "44", "48", "52"],
        "category": "clothing",
        "color": "Green",
        "fabric": "Linen",
        "sleeve": "Full Sleeve",
        "style": "Biker"
    },
    {
        "id": "5",
        "title": "Product 5",
        "description": "This is a description of Product 5.",
        "price": 119.99,
        "thumbnail": [
            "https://dorjibari.com.bd/cdn/shop/files/GH7A7157.jpg?v=1727157514",
            "https://dorjibari.com.bd/cdn/shop/files/GH7A7160.jpg?v=1727157514"
        ],
        "images": [
            "https://dorjibari.com.bd/cdn/shop/files/GH7A7152.jpg?v=1727157514",
            "https://dorjibari.com.bd/cdn/shop/files/GH7A7157.jpg?v=1727157514",
            "https://dorjibari.com.bd/cdn/shop/files/GH7A7160.jpg?v=1727157514"
        ],
        "size": ["32", "36", "40", "44", "48", "52"],
        "category": "clothing",
        "color": "White",
        "fabric": "Jacquard",
        "sleeve": "Half Sleeve",
        "style": "Regular"
    }
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