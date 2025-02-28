"use client"
import Image from "next/image"

const orderedItems = [
    {
        id: "1",
        name: "Elegant Dress lor f wr e te e te ",
        imageUrl: "https://dorjibari.com.bd/cdn/shop/files/GH7A7157.jpg?v=1727157514",
        quantity: 1,
        price: 129.99,
        status: "Delivered",
        orderDate: "2024-02-15",
        deliveryDate: "2024-02-20",
    },
    {
        id: "2",
        name: "Casual Shirt",
        imageUrl: "https://dorjibari.com.bd/cdn/shop/files/GH7A7160.jpg?v=1727157514",
        quantity: 2,
        price: 59.99,
        status: "In Transit",
        orderDate: "2024-02-22",
        estimatedDelivery: "2024-02-27",
    },
    {
        id: "3",
        name: "Formal Suit",
        imageUrl: "https://dorjibari.com.bd/cdn/shop/files/GH7A7152.jpg?v=1727157514",
        quantity: 1,
        price: 299.99,
        status: "Returned",
        orderDate: "2024-02-10",
        returnDate: "2024-02-18",
    },
]

const getStatusClass = (status: string) => {
    if (status === "Delivered") return "bg-green-500 text-white"
    if (status === "In Transit") return "bg-yellow-500 text-white"
    return "bg-red-500 text-white"
}

const OrderStatus = () => {
    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full min-w-max border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="p-2 border border-gray-300">Product</th>
                        <th className="p-2 border border-gray-300">Quantity</th>
                        <th className="p-2 border border-gray-300">Price</th>
                        <th className="p-2 border border-gray-300">Status</th>
                        <th className="p-2 border border-gray-300">Order Date</th>
                        <th className="p-2 border border-gray-300">Delivery/Return Date</th>
                    </tr>
                </thead>
                <tbody>
                    {orderedItems.map((item) => (
                        <tr key={item.id} className="border-b">
                            <td className="p-2 border border-gray-300">
                                <div className="flex items-center space-x-4">
                                    <div className="relative h-16 w-16 overflow-hidden rounded-md">
                                        <Image
                                            src={item.imageUrl || "/placeholder.svg"}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 64px) 100vw, 64px"
                                        />
                                    </div>
                                    <p className="font-medium truncate max-w-[150px] md:max-w-[200px] lg:max-w-[300px]">
                                        {item.name}
                                    </p>
                                </div>
                            </td>
                            <td className="p-2 text-center border border-gray-300">{item.quantity}</td>
                            <td className="p-2 text-center border border-gray-300">${item.price.toFixed(2)}</td>
                            <td className="p-2 text-center border border-gray-300">
                                <span className={`px-2 py-1 rounded text-sm ${getStatusClass(item.status)}`}>
                                    {item.status}
                                </span>
                            </td>
                            <td className="p-2 text-center border border-gray-300">{item.orderDate}</td>
                            <td className="p-2 text-center border border-gray-300">
                                {item.status === "Delivered" && item.deliveryDate}
                                {item.status === "In Transit" && `Est. ${item.estimatedDelivery}`}
                                {item.status === "Returned" && item.returnDate}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default OrderStatus
