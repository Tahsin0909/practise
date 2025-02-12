import { ShoppingCart } from 'lucide-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDrawer } from './CartSlice';
import { RootState } from '@/redux/store';

const CartIcon = () => {
    const dispatch = useDispatch();
    const { isOpen } = useSelector((state: RootState) => state.cart);
    console.log(isOpen);
    return (
        <div>
            <button onClick={() => { dispatch(toggleDrawer()); console.log("clicked"); }} className=''>
                <ShoppingCart className="h-6 w-6 hover:cursor-pointer" />
            </button>
        </div>
    );
};

export default CartIcon;