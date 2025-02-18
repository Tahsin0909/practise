"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import ProductCard from "@/feature/products/card/ProductsCard"
import ProductFilters from "@/feature/products/ProductsFilter"

const products = [
    {
        id: "1",
        name: "Palm Ring",
        category: "earrings",
        price: 8500,
        size: "S",
        color: "Gold",
        image: {
            img1: "https://i.ibb.co.com/FqC3KKBY/242534-4-5-20240922130028605-width-1024.jpg",
            img2: "https://i.ibb.co.com/zHC8PLGk/242534cu1-4-5-20241016071125135-width-1024.jpg",
        },
    },
    {
        id: "2",
        name: "Birthstone Necklace for Women",
        category: "necklaces",
        price: 12000,
        size: "M",
        color: "Silver",
        image: {
            img1: "https://i.ibb.co.com/SwpFghZD/252516-4-5-20250201073723631-width-1024.jpg",
            img2: "https://i.ibb.co.com/rfxH8L4r/252516cu1-4-5-20250201073724576-width-1024.jpg",
        },
    },
    {
        id: "3",
        name: "Diamond Stud Earrings",
        category: "earrings",
        price: 15000,
        size: "L",
        color: "White Gold",
        image: {
            img1: "https://i.ibb.co.com/FqC3KKBY/242534-4-5-20240922130028605-width-1024.jpg",
            img2: "https://i.ibb.co.com/zHC8PLGk/242534cu1-4-5-20241016071125135-width-1024.jpg",
        },
    },
    {
        id: "4",
        name: "Pearl Bracelet",
        category: "bracelets",
        price: 9500,
        size: "M",
        color: "Pearl",
        image: {
            img1: "https://i.ibb.co.com/SwpFghZD/252516-4-5-20250201073723631-width-1024.jpg",
            img2: "https://i.ibb.co.com/rfxH8L4r/252516cu1-4-5-20250201073724576-width-1024.jpg",
        },
    },
]

function Page() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [filteredProducts, setFilteredProducts] = useState(products)
    const [searchQuery, setSearchQuery] = useState("")

    // States for each filter category
    const [selectedColor, setSelectedColor] = useState<string | null>(null)
    const [selectedSize, setSelectedSize] = useState<string | null>(null)
    const [selectedPrice, setSelectedPrice] = useState<string | null>(null)
    const [selectedSortBy, setSelectedSortBy] = useState<string | null>(null)
    useEffect(() => {
        let result = [...products]

        // Apply search filter
        if (searchQuery) {
            result = result.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
        }

        // Apply size filter
        if (selectedSize !== "all") {
            result = result.filter((product) => product.size === selectedSize)
        }

        // Apply color filter
        if (selectedColor !== "all") {
            result = result.filter((product) => product.color === selectedColor)
        }

        // Apply price range filter
        // result = result.filter((product) => product.price >= priceRange.min && product.price <= priceRange.max)

        // Apply sorting

        setFilteredProducts(result)
    }, [searchQuery, selectedSize, selectedColor,])





    return (
        <div className="min-h-screen container mx-auto ">
            {/* Header */}
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Our Collection</h1>
            </header>

            {/* Filters Section */}
            <div className="mb-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                    {/* Search Bar */}
                    <div className="relative flex-1 max-w-xs">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <ProductFilters selectedColor={selectedColor} selectedPrice={selectedPrice} selectedSize={selectedSize} selectedSortBy={selectedSortBy} setSelectedColor={setSelectedColor} setSelectedPrice={setSelectedPrice} setSelectedSize={setSelectedSize} setSelectedSortBy={setSelectedSortBy} />
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Page

