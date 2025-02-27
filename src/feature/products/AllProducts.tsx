"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data for ordered items
const orderedItems = [
    {
        id: "1",
        name: "Elegant Dress",
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

const OrderStatus = () => {
    return (
        <div className="container mx-auto p-6 space-y-8">
            <h1 className="text-3xl font-bold">My Orders</h1>

            <Card>
                <CardContent className="p-6">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Product</TableHead>
                                <TableHead>Quantity</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Order Date</TableHead>
                                <TableHead>Delivery/Return Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {orderedItems.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>
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
                                            <div>
                                                <p className="font-medium">{item.name}</p>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>{item.quantity}</TableCell>
                                    <TableCell>${item.price.toFixed(2)}</TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={
                                                item.status === "Delivered"
                                                    ? "success"
                                                    : item.status === "In Transit"
                                                        ? "default"
                                                        : "destructive"
                                            }
                                        >
                                            {item.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{item.orderDate}</TableCell>
                                    <TableCell>
                                        {item.status === "Delivered" && item.deliveryDate}
                                        {item.status === "In Transit" && `Est. ${item.estimatedDelivery}`}
                                        {item.status === "Returned" && item.returnDate}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}

export default OrderStatus

