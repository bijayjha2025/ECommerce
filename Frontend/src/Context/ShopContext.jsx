import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
 const [cartItems, setCartItems] = useState([]);
 const [wishlist, setWishlist] = useState([]);
 const [search, setSearch] = useState('');
 
 const addToCart = async (productData, size) => {
   if (!size) {
    toast.error('Select Product Size');
    return;
    }

    let cartData = structuredClone(cartItems);
    
    const matchIndex = cartData.findIndex(
     (item) => item.id === productData.id && item.size === size
    );

    if (matchIndex !== -1) {
      cartData[matchIndex].quantity += 1;
    } else {
      cartData.push({ ...productData, size, quantity: 1 });
    }
    
    setCartItems(cartData);
    toast.success('Added to Cart');
    };

    const updateQuantity = async (itemId, size, quantity) => {
     let cartData = structuredClone(cartItems);
     
     const matchIndex = cartData.findIndex(
        (item) => item.id === itemId && item.size === size
     );

     if (matchIndex !== -1) {
        cartData[matchIndex].quantity = quantity;
        setCartItems(cartData);
     }
    };

    const removeItem = async (itemId, size) => {
      let cartData = structuredClone(cartItems);
      cartData = cartData.filter(
        (item) => !(item.id === itemId && item.size === size)
      );
      setCartItems(cartData);
      toast.success('Removed from Cart');
    };

    const getCartCount = () => {
      return cartItems.reduce((acc, item) => acc + item.quantity, 0);
    };

    const getCartAmount = () => {
      return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    const toggleWishlist = (product) => {
     let list = structuredClone(wishlist);
     const existingIndex = list.findIndex((item) => item.id === product.id);

     if (existingIndex > -1) {
        list.splice(existingIndex, 1);
        toast.success('Removed from Favorites');
     } else {
        list.push(product);
        toast.success('Added to Favorites');
     }
        setWishlist(list);
    };

    const value = {
        cartItems,
        addToCart,
        updateQuantity,
        removeItem,
        getCartCount,
        getCartAmount,
        setCartItems,
        wishlist,
        setWishlist,
        toggleWishlist,
        search,
        setSearch,
    };

    return (
        <ShopContext.Provider value={value}>
          {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
