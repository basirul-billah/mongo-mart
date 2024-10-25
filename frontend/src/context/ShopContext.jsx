import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId, size) => {

        let cartData = structuredClone(cartItems);

        // if no size selected toast will be invoked and function will return null
        if (!size) {
            toast.error("Select a product size first!");
            return;
        }

        // if the cart has an item present in it then it will increase the quantity by 1
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        // if not then will create a new cartData object and increase its size to 1
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItems(cartData);
    }

    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart
    }

    return (
        <ShopContext.Provider value={value}>
            { props.children }
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;