import React,{createContext, useState, useEffect} from 'react';
import {
    addItemToCart,
    removeItemFromCart,
    filterItemFromCart,
    getCartItemsCount,
    getCartItemsTotal} from './cart.utils';


export const CartContext = createContext({
    hidden: true,
    toggleHidden: ()=>{},
    cartItems: [],
    addItem:()=>{},
    removeItem: ()=>{},
    clearItemFromCart: ()=>{},
    cartItemCount: 0,
    total: 0
})

const CartProvider = ({children})=>{
    const [hidden, setHidden] = useState(true);
    const toggleHidden = ()=>setHidden(!hidden);

    const [cartItems, setCartItems]= useState([]);
    const addItem = item => setCartItems(addItemToCart(cartItems, item));
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
    const clearItemFromCart = item => setCartItems(filterItemFromCart(cartItems, item));

    const [cartItemCount, setCartItemsCount] = useState(0);
    useEffect(()=>{
        setCartItemsCount(getCartItemsCount(cartItems))
    }, [cartItems]);

    const [total, setTotal] = useState(0);
    useEffect(()=>{
        setTotal(getCartItemsTotal(cartItems))
    }, [cartItems]);

    return(
        <CartContext.Provider value={ {
            hidden,
            toggleHidden,
            cartItems,
            addItem,
            removeItem,
            clearItemFromCart,
            cartItemCount,
            total
        }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider;