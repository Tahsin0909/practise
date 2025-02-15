"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, ShoppingCart, Eye } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Product {
    id: string
    name: string
    category: string
    price: number
    image: {
        img1: string, img2: string
    }
}

interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const handleAddToCart = () => {
        // Add your cart logic here
        console.log("Added to cart:", product.name)
    }

    return (
        <>
            <div className="group relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-sm transition-all duration-300" >
                    <Image
                        src={isHovered ? product.image.img2 : product.image.img1}
                        alt={product.name}
                        width={400}
                        height={400}
                        className={cn("object-cover w-full h-full transition-all duration-300", isHovered && "scale-110")}
                    />

                    {/* Add to Cart Overlay */}
                    {/* <div
                        className={cn(
                            "absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300",
                            isHovered ? "opacity-100" : "opacity-0",
                        )}
                    >
                        <Button
                            variant="default"
                            className="bg-white text-black hover:bg-primary hover:text-white transition-colors"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </Button>
                    </div> */}

                    {/* Icon Buttons */}
                    <div
                        className={cn(
                            "absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2 transition-all duration-300",
                            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                        )}
                    >
                        <Button
                            size="icon"
                            variant="secondary"
                            className="h-10 w-10 rounded-full bg-white hover:bg-primary hover:text-white transition-colors"
                            onClick={handleAddToCart}
                        >
                            <ShoppingCart className="h-4 w-4" />
                        </Button>
                        <Button
                            size="icon"
                            variant="secondary"
                            className="h-10 w-10 rounded-full bg-white hover:bg-primary hover:text-white transition-colors"
                            onClick={() => setShowModal(true)}
                        >
                            <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                            size="icon"
                            variant="secondary"
                            className="h-10 w-10 rounded-full bg-white hover:bg-primary hover:text-white transition-colors"
                        >
                            <Heart className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Product Info */}
                <div className="mt-4 space-y-2">
                    <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.category}</p>
                    <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
                </div>
            </div>

            {/* Quick View Modal */}
            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogContent className="max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>Quick View</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4 md:grid-cols-2">
                        <div className="relative aspect-square">
                            <Image
                                src={product.image.img1}
                                alt={product.name}
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">{product.name}</h2>
                                <p className="text-gray-500">{product.category}</p>
                                {product.price && <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>}
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua.
                                </p>
                            </div>
                            <Button className="mt-4 w-full" onClick={handleAddToCart}>
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}

