/* eslint-disable @next/next/no-img-element */
"use client";

import CartIcon from "@/feature/cart/CartIcon";
import { collections } from "@/lib/fakedata/category";
import { cn } from "@/lib/utils";
import { Heart, Menu, Search, User, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const handleCategoryHover = (category: string | null) => {
        setActiveCategory(category);
    };

    return (
        <header className="border-b relative bg-white z-50">
            {/* Top Bar */}
            <div className="bg-white">
                <div className="container">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <span className="text-2xl font-bold tracking-wider">BOFFO</span>
                        </Link>



                        {/* Right Icons */}
                        <div className="flex items-center gap-10">
                            {/* Search */}
                            <div className="hidden md:flex items-center">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-80 px-3 py-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                                />
                                <Search className="h-5 w-5 text-gray-500 -ml-8" />
                            </div>

                            {/* Icons */}
                            <button className="text-gray-700 hover:text-primary">
                                <Heart className="h-6 w-6" />
                            </button>
                            <div className="hover:cursor-pointer">
                                <CartIcon />
                            </div>

                            <button className="text-gray-700 hover:text-primary">
                                <User className="h-6 w-6" />
                            </button>
                            <button
                                className="md:hidden text-gray-700"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Secondary Navigation with Mega Menu */}
            <div className="bg-white border-t">
                <div className="container">
                    <div className="hidden md:flex justify-between py-4">
                        <div className="flex space-x-8">
                            {collections.map((category) => (
                                <div
                                    key={category.id}
                                    className="relative"
                                    onMouseEnter={() => handleCategoryHover(category.id)}
                                    onMouseLeave={() => handleCategoryHover(null)}
                                >
                                    <button className="text-gray-700 hover:text-primary font-medium">
                                        {category.name}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mega Menu Dropdown */}
            <div
                className={cn(
                    "absolute top-[105px] left-0 right-0 bg-white border-b shadow-lg transition-all duration-300 ease-in-out",
                    activeCategory ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                )}
                onMouseEnter={() => handleCategoryHover(activeCategory)}
                onMouseLeave={() => handleCategoryHover(null)}
            >
                <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8 py-8">
                    <div className="flex">
                        {activeCategory && getCategoryContent(activeCategory)}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-4 py-2">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                    </div>
                    <nav className="px-4 py-2">
                        <Link href="/men" className="block py-2 text-gray-700">Men</Link>
                        <Link href="/women" className="block py-2 text-gray-700">Women</Link>
                        <Link href="/kids" className="block py-2 text-gray-700">Kids</Link>
                        <Link href="/sale" className="block py-2 text-gray-700">Sale</Link>
                        <Link href="/blog" className="block py-2 text-gray-700">Blog</Link>
                        <Link href="/contacts" className="block py-2 text-gray-700">Contacts</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}





export function getCategoryContent(categoryId: string) {
    const category = collections.find((c) => c.id === categoryId);
    if (!category) return null;

    return (
        <div className="flex items-start justify-center gap-6">
            <div className="">
                <h3 className="font-bold text-gray-900">{category.name}</h3>
                <ul className="gap-4 mt-2 grid grid-cols-3 ">
                    {category.children.map((child) => (
                        <li key={child.id}>
                            <Link
                                href={`/${category.slug}/${child.slug}`}
                                className="text-gray-600 hover:text-primary transition-colors"
                            >
                                {child.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {category.featured && (
                <div className="col-span-1">
                    <div className=" rounded-lg overflow-hidden relative">
                        <Link href={category.featured.href} className="group ">
                            <img
                                src={category.featured.image}
                                alt={category.featured.title}
                                className="w-[300px] h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity" />
                            <div className="absolute bottom-4 left-4 right-4">
                                <h3 className="text-white font-bold text-lg">{category.featured.title}</h3>
                                <p className="text-white text-sm mt-1">Shop Now →</p>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}




