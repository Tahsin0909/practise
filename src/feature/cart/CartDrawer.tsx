"use client"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { RootState } from "@/redux/store";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from './CartSlice';

const CartDrawer = () => {
    const dispatch = useDispatch();
    const { isOpen } = useSelector((state: RootState) => state.cart);
    const sidebarItems = [
        { id: 1, title: "Dashboard", description: "View your dashboard" },
        { id: 2, title: "Profile", description: "Manage your profile" },
        { id: 3, title: "Settings", description: "Adjust your settings" },
        { id: 4, title: "Help", description: "Get help and support" },
    ];

    return (
        <Sheet open={isOpen} onOpenChange={() => dispatch(toggleDrawer())}>
            <SheetTrigger asChild>

            </SheetTrigger>
            <DialogTitle />
            <SheetContent side="right" className="w-[300px] p-4">
                <SheetHeader className="text-xl font-bold mb-4">Menu Items</SheetHeader>
                <ul>
                    {sidebarItems.map((item) => (
                        <li key={item.id} className="mb-4">
                            <h3 className="font-semibold">{item.title}</h3>
                            <p className="text-sm text-gray-500">{item.description}</p>
                        </li>
                    ))}
                </ul>
            </SheetContent>
        </Sheet>
    );
};

export default CartDrawer;
