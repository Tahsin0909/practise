import React from 'react';
import { ShoppingCart, Eye, Heart } from 'lucide-react';

interface Product {
    id: number;
    name: string;
    image: string;
    price?: string;
    category: string;
}

const products: Product[] = [
    {
        id: 1,
        name: "Palm Ring",
        image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=500&q=80",
        category: "earrings"
    },
    {
        id: 2,
        name: "Birthstone Necklace for Women",
        image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=500&q=80",
        price: "$100.00",
        category: "necklaces"
    }
];

function ProductCard({ product }: { product: Product }) {
    return (
        <div className="relative group">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-square">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute right-2 top-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 bg-white rounded-full shadow hover:bg-gray-50">
                            <ShoppingCart className="w-5 h-5" />
                        </button>
                        <button className="p-2 bg-white rounded-full shadow hover:bg-gray-50">
                            <Eye className="w-5 h-5" />
                        </button>
                        <button className="p-2 bg-white rounded-full shadow hover:bg-gray-50">
                            <Heart className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                    <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-gray-500">{product.category}</span>
                        {product.price && (
                            <span className="text-gray-900 font-medium">{product.price}</span>
                        )}
                    </div>
                    {!product.price && (
                        <button className="mt-2 w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                            Add to Cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

function ProductCardApp() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductCardApp;