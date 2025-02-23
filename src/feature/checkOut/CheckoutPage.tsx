/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { RootState } from "@/redux/store"
import { ShoppingBag, Trash2 } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../cart/CartSlice"
import Link from "next/link"

const CheckoutPage = () => {
    const dispatch = useDispatch()
    const { cart } = useSelector((state: RootState) => state.cart)

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    const handleRemoveItem = (id: string, size: string) => {
        dispatch(removeFromCart({ id, size }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Implement checkout submission logic (e.g., API call, payment integration)
        console.log("Checkout submitted")
    }

    console.log(cart);
    return (
        <div className="container section-gap">
            <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>

            {cart.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-8 ">
                    <div className="space-y-6  flex flex-col justify-between">
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold">Order Summary</h2>
                            {cart.map((item: any) => (
                                <div
                                    key={`${item.id}-${item.size}`}
                                    className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm"
                                >
                                    <div className="relative aspect-square h-20 w-20 overflow-hidden rounded-md">
                                        <img src={item.image || "/placeholder.svg"} alt={item.title} className="object-cover" />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="font-medium">{item.title}</h3>
                                        {item.size && <p className="text-sm text-gray-500">Size: {item.size}</p>}
                                        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                                        <p className="font-medium mt-1">${item.price.toFixed(2)}</p>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => handleRemoveItem(item.id, item.size)}
                                        className="text-gray-500 hover:text-red-500"
                                    >
                                        <Trash2 className="h-5 w-5" />
                                        <span className="sr-only">Remove item</span>
                                    </Button>
                                </div>
                            ))}
                        </div>

                        <div className="bg-primary/5 p-4 rounded-lg space-y-2">
                            <div className="flex justify-between">
                                <span>Total items</span>
                                <span className="font-medium">{totalItems}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span className="font-medium">${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span className="font-medium">Free</span>
                            </div>
                            <div className="flex justify-between text-lg font-bold pt-2 border-t">
                                <span>Total</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="firstName">First Name</label>
                                    <Input className="px-1" id="firstName" placeholder="John" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName">Last Name</label>
                                    <Input className="px-1" id="lastName" placeholder="Doe" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="address">Address</label>
                                <Input className="px-1" id="address" placeholder="123 Main St" required />
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="city">City</label>
                                    <Input className="px-1" id="city" placeholder="New York" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="postalCode">Postal Code</label>
                                    <Input className="px-1" id="postalCode" placeholder="10001" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email">Email</label>
                                <Input className="px-1" type="email" id="email" placeholder="john@example.com" required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="phone">Phone</label>
                                <Input className="px-1" type="tel" id="phone" placeholder="(123) 456-7890" required />
                            </div>
                            <Button type="submit" className="w-full mt-6" disabled={cart.length === 0}>
                                Proceed to Payment
                            </Button>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center space-y-4 bg-primary/5 lg:py-40 py-20 rounded-lg">
                    <ShoppingBag className="h-16 w-16 text-gray-400" aria-hidden="true" />
                    <p className="text-xl font-medium text-gray-600">Your cart is empty</p>
                    <Link href={"/products"} className="mt-6 border p-2 rounded-lg bg-primary text-white">
                        Continue Shopping
                    </Link>
                </div>
            )}
        </div>
    )
}

export default CheckoutPage

