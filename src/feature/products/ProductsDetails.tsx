'use client'

import { Heart, Info, Minus, Plus, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cart/CartSlice';

const ProductDetails = () => {
    const result = {
        id: "1",
        title: "Sample Product",
        description: "This is a description of the sample product.",
        price: 99.99,
        thumbnail: ["https://dorjibari.com.bd/cdn/shop/files/GH7A7157.jpg?v=1727157514", "https://dorjibari.com.bd/cdn/shop/files/GH7A7160.jpg?v=1727157514"],
        images: [
            "https://dorjibari.com.bd/cdn/shop/files/GH7A7152.jpg?v=1727157514",
            "https://dorjibari.com.bd/cdn/shop/files/GH7A7157.jpg?v=1727157514",
            "https://dorjibari.com.bd/cdn/shop/files/GH7A7160.jpg?v=1727157514",
            "https://i.ibb.co.com/FqC3KKBY/242534-4-5-20240922130028605-width-1024.jpg",

        ],
        size: ["38", "40", "42", "44", "46"],
        category: "clothing",
        color: "Red",
        fabric: "Jacquard",
        sleeve: "Full Sleeve",
        style: "Regular",
    };

    const dispatch = useDispatch();
    const [mainImage, setMainImage] = useState<string>(result.thumbnail[0]);
    const [selectedSize, setSelectedSize] = useState<string>("");
    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isSize, setIsSize] = useState(false)

    const handleQuantityChange = (type: 'increase' | 'decrease') => {
        if (type === 'increase') {
            setQuantity(prev => prev + 1);
        } else if (type === 'decrease' && quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };


    const handleCart = async () => {
        if (!selectedSize) {
            setIsSize(true);
            return;
        }

        dispatch(addToCart({
            id: result.id,
            title: result.title,
            price: result.price,
            quantity: quantity,
            image: result.thumbnail[0],
            size: selectedSize
        }));
        // dispatch(toggleDrawer());
    };


    const handleBuyNow = async () => {
        console.log("Proceeding to checkout:", { id: result.id, quantity });
    };

    return (
        <div className="container section-gap">
            <div className="bg-white shadow-sm">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Image Gallery Section */}
                    <div className='space-y-4'>
                        <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
                            <Image
                                src={mainImage}
                                alt="Product Image"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-4 pb-2">
                            {result.images.map((img, index) => (
                                <div
                                    key={index}
                                    className={cn(
                                        "relative aspect-square cursor-pointer rounded-lg overflow-hidden",
                                        mainImage === img && "ring-2 ring-primary"
                                    )}
                                    onClick={() => setMainImage(img)}
                                >
                                    <Image
                                        src={img}
                                        alt={`Product image ${index + 1}`}
                                        fill
                                        className="object-cover hover:opacity-80 transition-opacity"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Details Section */}
                    <div className="space-y-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">{result.title}</h1>
                                <p className="mt-2 text-gray-500">{result.description}</p>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-10 w-10"
                                onClick={() => setIsFavorite(!isFavorite)}
                            >
                                <Heart
                                    className={cn(
                                        "h-6 w-6 transition-colors",
                                        isFavorite ? "fill-primary text-primary" : "text-gray-500"
                                    )}
                                />
                            </Button>
                        </div>

                        <div className="pt-4 border-t">
                            <p className="text-3xl font-bold text-gray-900">${result.price}</p>
                        </div>

                        {/* Product Specifications */}
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                            <div>
                                <h4 className="font-medium text-gray-900">Color</h4>
                                <p className="text-gray-500">{result.color}</p>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900">Fabric</h4>
                                <p className="text-gray-500">{result.fabric}</p>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900">Sleeve</h4>
                                <p className="text-gray-500">{result.sleeve}</p>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900">Style</h4>
                                <p className="text-gray-500">{result.style}</p>
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div className="pt-4 border-t">
                            <h4 className="font-medium text-gray-900 mb-3">Select Size</h4>
                            <div className="flex flex-wrap gap-2">
                                {result.size.map((size) => (
                                    <Button
                                        key={size}
                                        variant={selectedSize === size ? "default" : "outline"}
                                        onClick={() => {
                                            setSelectedSize(size)
                                            setIsSize(false)
                                        }}
                                        className="h-11 w-11"
                                    >
                                        {size}
                                    </Button>
                                ))}
                            </div>
                            {
                                isSize && <div className='text-sm text-warning flex items-center gap-1 py-1'>
                                    <Info size={15} />
                                    <span>Please select a size</span>
                                </div>
                            }
                        </div>

                        {/* Quantity Selection */}
                        <div className="pt-4 border-t">
                            <h4 className="font-medium text-gray-900 mb-3">Quantity</h4>
                            <div className="flex items-center space-x-4">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => handleQuantityChange('decrease')}
                                    disabled={quantity <= 1}
                                >
                                    <Minus className="h-4 w-4" />
                                </Button>
                                <span className="text-lg font-medium w-12 text-center">
                                    {quantity}
                                </span>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => handleQuantityChange('increase')}
                                >
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="pt-6 border-t flex flex-col sm:flex-row gap-4">
                            <Button
                                className="flex-1"
                                variant="outline"
                                onClick={handleCart}
                            >
                                <ShoppingCart className="mr-2 h-5 w-5" />
                                Add to Cart
                            </Button>
                            <Button
                                className="flex-1"
                                onClick={handleBuyNow}
                            >
                                Buy Now
                            </Button>
                        </div>

                        {/* Wash Care Instructions */}
                        <div className="p-4  rounded-lg bg-primary/5">
                            <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-1"> <Info size={15} /> Wash Care</h4>
                            <p className="text-gray-500">Wash separately in mild detergent</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;