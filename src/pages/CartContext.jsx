// import { createContext, useState } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prev) => {
//       const exist = prev.find((item) => item._id === product._id);
//       if (exist) {
//         return prev.map((item) =>
//           item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       } else {
//         return [...prev, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCartItems((prev) => prev.filter((item) => item._id !== productId));
//   };

//   const clearCart = () => setCartItems([]);

//   const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);


//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart,totalItems }}>
//       {children}
//     </CartContext.Provider>
//   );
// };




import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exist = prev.find((item) => item._id === product._id);
      if (exist) {
        const newQty = Math.min(exist.quantity + 1, product.stock || Infinity);
        return prev.map((item) =>
          item._id === product._id ? { ...item, quantity: newQty } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart, // ✅ make sure addToCart is included here
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

