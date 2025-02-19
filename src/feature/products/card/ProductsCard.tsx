"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { addToCart } from "@/feature/cart/CartSlice"
import { cn } from "@/lib/utils"
import { Eye, Heart, ShoppingCart } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"
import { useDispatch } from "react-redux"

type Product = {
    id: string;
    title: string;
    description: string;
    price: number;
    thumbnail: string[];
    images: string[];
    size: string[];
    category: string;
    color: string;
    fabric: string;
    sleeve: string;
    style: string;
};

interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const ref = useRef<HTMLDivElement>(null);
    const navigate = useRouter();
    const dispatch = useDispatch();
    const handleDetails = (event: React.MouseEvent, id: string) => {
        if (ref.current && ref.current.contains(event.target as Node)) {
            return; // Prevent triggering if clicking inside ref
        }
        navigate.push(`/products/${id}`); // Redirect to the product details page
    };

    const handleCart = async () => {

        dispatch(addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: 1,
            image: product.thumbnail[0],
            size: "42"
        }));
    };

    return (
        <div onClick={(event) => handleDetails(event, product.id)}>
            <div className="group relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-sm transition-all duration-300" >
                    {/* First Image */}
                    <Image
                        src={product.thumbnail[0]}
                        alt={product.title}
                        width={400}
                        height={400}
                        className="absolute inset-0 object-cover w-full h-full transition-opacity duration-500 ease-in-out"
                        style={{ opacity: isHovered ? 0 : 1 }}
                    />
                    {/* Second Image */}
                    <Image
                        src={product.thumbnail[1]}
                        alt={product.title}
                        width={400}
                        height={400}
                        className="absolute inset-0 object-cover w-full h-full transition-opacity duration-500 ease-in-out"
                        style={{ opacity: isHovered ? 1 : 0 }}
                    />


                    {/* Icon Buttons */}
                    <div
                        ref={ref}
                        className={cn(
                            "absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2 transition-all duration-300",
                            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                        )}
                    >
                        <Button
                            size="icon"
                            variant="secondary"
                            className="h-10 w-10 rounded-full bg-white hover:bg-primary hover:text-white transition-colors"
                            onClick={handleCart}
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
                    <h3 className="text-sm font-medium text-gray-900">{product.title}</h3>
                    <p className="text-sm text-gray-500">{product.category}</p>
                    <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
                </div>
            </div>

            {/* Quick View Modal */}
            <Dialog

                open={showModal} onOpenChange={setShowModal}>
                <DialogContent ref={ref} className="max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>Quick View</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4 md:grid-cols-2">
                        <div className="relative aspect-square">
                            <Image
                                alt={product.title}
                                src={product.thumbnail[0]}
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">{product.title}</h2>
                                <p className="text-gray-500">{product.category}</p>
                                {product.price && <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>}
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua.
                                </p>
                            </div>
                            <Button className="mt-4 w-full" onClick={handleCart}>
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

