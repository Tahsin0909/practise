/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Package, Truck, RotateCcw, Calendar, Clock } from 'lucide-react';

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
];

const getStatusIcon = (status: string) => {
    if (status === "Delivered") return <Package size={16} className="mr-1" />;
    if (status === "In Transit") return <Truck size={16} className="mr-1" />;
    return <RotateCcw size={16} className="mr-1" />;
};

const getStatusClass = (status: string) => {
    if (status === "Delivered") return "bg-emerald-100 text-emerald-800";
    if (status === "In Transit") return "bg-amber-100 text-amber-800";
    return "bg-rose-100 text-rose-800";
};

const OrderStatus = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">My Orders</h2>

            <div className="space-y-6">
                {orderedItems.map((item) => (
                    <div key={item.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-100">
                        <div className="p-4 md:p-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <div className="flex items-center mb-4 md:mb-0">
                                    <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0 bg-gray-200">
                                        <img
                                            src={item.imageUrl}
                                            alt={item.name}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="font-medium text-gray-900 mb-1 line-clamp-1">{item.name}</h3>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <span className="mr-2">Qty: {item.quantity}</span>
                                            <span>${item.price.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col md:items-end">
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(item.status)}`}>
                                        {getStatusIcon(item.status)}
                                        {item.status}
                                    </span>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-4 mt-2">
                                <div className="flex flex-col sm:flex-row justify-between text-sm text-gray-500">
                                    <div className="flex items-center mb-2 sm:mb-0">
                                        <Calendar size={14} className="mr-1" />
                                        <span>Ordered: {item.orderDate}</span>
                                    </div>

                                    <div className="flex items-center">
                                        <Clock size={14} className="mr-1" />
                                        {item.status === "Delivered" && <span>Delivered: {item.deliveryDate}</span>}
                                        {item.status === "In Transit" && <span>Est. Delivery: {item.estimatedDelivery}</span>}
                                        {item.status === "Returned" && <span>Returned: {item.returnDate}</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderStatus;