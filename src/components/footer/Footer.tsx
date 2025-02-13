import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-white " >
            <div className="container py-10">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

                    {/* logo  */}
                    <div className="space-y-2">
                        <p className="text-xl font-semibold">BOFFO</p>
                        <p>Best Punjabi in Town</p>

                    </div>
                    {/* Who We Are */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Who We Are</h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link href="/about" className="text-sm text-gray-600 hover:text-primary">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/news" className="text-sm text-gray-600 hover:text-primary">
                                    News & Offers
                                </Link>
                            </li>
                            <li>
                                <Link href="/articles" className="text-sm text-gray-600 hover:text-primary">
                                    Articles
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Categories</h3>
                        <ul className="mt-4 space-y-3">
                            {["Women", "Men", "Kids", "Teen", "Accessories", "Home Decor"].map((category) => (
                                <li key={category}>
                                    <Link
                                        href={`/category/${category.toLowerCase()}`}
                                        className="text-sm text-gray-600 hover:text-primary"
                                    >
                                        {category}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Customer Service</h3>
                        <ul className="mt-4 space-y-3">
                            {["Billing & Payments", "Shipping & Delivery", "Contact Us", "FAQs", "Return & Exchanges"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase().replace(/ & /g, "-")}`}
                                        className="text-sm text-gray-600 hover:text-primary"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* More */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">More</h3>
                        <ul className="mt-4 space-y-3">
                            {["Blogs", "Privacy Policy", "Find a Store", "Terms & Conditions", "Site Map"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase().replace(/ & /g, "-")}`}
                                        className="text-sm text-gray-600 hover:text-primary"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Download App */}

                </div>

                <div className="mt-8 border-t border-gray-200 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex space-x-6">
                            <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-primary">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-sm text-gray-600 hover:text-primary">
                                Terms of Use
                            </Link>
                            <Link href="/offer-terms" className="text-sm text-gray-600 hover:text-primary">
                                Offer Terms
                            </Link>
                        </div>
                        <p className="text-sm text-gray-600">© {new Date().getFullYear()} boffo All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

