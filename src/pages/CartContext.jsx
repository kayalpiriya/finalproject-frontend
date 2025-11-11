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




// import { createContext, useState, useEffect } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState(() => {
//     return JSON.parse(localStorage.getItem("cart")) || [];
//   });

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (product) => {
//     setCartItems((prev) => {
//       const exist = prev.find((item) => item._id === product._id);
//       if (exist) {
//         const newQty = Math.min(exist.quantity + 1, product.stock || Infinity);
//         return prev.map((item) =>
//           item._id === product._id ? { ...item, quantity: newQty } : item
//         );
//       } else {
//         return [...prev, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart, // ✅ make sure addToCart is included here
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const token = localStorage.getItem("token");

  // 🔄 Fetch cart from backend
  const fetchCart = async () => {
    if (!token) return;
    try {
      const res = await axios.get("http://localhost:5000/cart", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.data?.items) {
        setCartItems(
          res.data.items.map((i) => ({
            _id: i.product._id,
            title: i.product.name,
            price: i.product.price,
            img: i.product.img,
            quantity: i.quantity,
            stock: i.product.stock || Infinity,
          }))
        );
      }
    } catch (err) {
      console.error("Fetch cart error:", err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [token]);

  // ➕ Add to Cart
  const addToCart = async (product) => {
    if (token) {
      try {
        await axios.post(
          "http://localhost:5000/cart/add",
          { productId: product._id, quantity: 1 },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        fetchCart();
      } catch (err) {
        console.error("Add to cart error:", err);
      }
    } else {
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
    }
  };

  // 🔼 Update quantity
  const updateQuantity = async (productId, newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity < 1
    const token = localStorage.getItem("token");

    if (!token) {
      setCartItems((prev) =>
        prev.map((item) =>
          item._id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    } else {
      try {
        await axios.post(
          "http://localhost:5000/cart/add",
          { productId, quantity: newQuantity },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        fetchCart();
      } catch (err) {
        console.error("Update quantity error:", err);
      }
    }
  };

  // ❌ Remove item
  const removeFromCart = async (productId) => {
    if (token) {
      try {
        await axios.delete("http://localhost:5000/cart/remove", {
          headers: { Authorization: `Bearer ${token}` },
          data: { productId },
        });
        fetchCart();
      } catch (err) {
        console.error("Remove from cart error:", err);
      }
    } else {
      setCartItems((prev) => prev.filter((item) => item._id !== productId));
    }
  };

  // 🧹 Clear cart
  const clearCart = async () => {
    if (token) {
      try {
        await axios.delete("http://localhost:5000/cart/clear", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCartItems([]);
      } catch (err) {
        console.error("Clear cart error:", err);
      }
    } else {
      setCartItems([]);
    }
  };

  // // 🛒 Place order
  // const placeOrder = async (paymentMethod = "Cash on Delivery") => {
  //   if (!token) return alert("Please login first!");
  //   if (cartItems.length === 0) return alert("Cart is empty!");

  //   const orderData = {
  //     products: cartItems.map((item) => ({
  //       productId: item._id,
  //       quantity: item.quantity,
  //     })),
  //     paymentMethod,
  //     total: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
  //   };

  //   try {
  //     await axios.post("http://localhost:5000/orders", orderData, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     alert("Order placed successfully!");
  //     clearCart();
  //     fetchCart(); // update stock in frontend
  //   } catch (err) {
  //     console.error("Order error:", err);
  //     alert(err.response?.data?.message || "Failed to place order");
  //   }
  // };

  const placeOrder = async (paymentMethod, address) => {
    const token = localStorage.getItem("token");
    if (!token) return alert("⚠️ Please login to place an order.");
  
    if (cartItems.length === 0) return alert("Cart is empty!");
  
    try {
      const res = await axios.post(
        "http://localhost:5000/orders",
        {
          products: cartItems.map(p => ({ productId: p._id, quantity: p.quantity })),
          total: totalPrice,
          paymentMethod,
          address
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
  
      const order = res.data;
  
      // Clear cart after creating order
      await clearCart();

      // 2️⃣ Call backend payment endpoint to create Stripe session
    const resPayment = await axios.post(
      "http://localhost:5000/payments",
      {
        orderId: order._id,
        amount: totalPrice
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    // 3️⃣ Redirect to Stripe-hosted payment page
    window.location.href = resPayment.data.url;

  
      return order; // ✅ important: return order data
    } catch (err) {
      console.error("Place order error:", err);
      alert("Failed to place order. Try again.");
    }
  };
  

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
