


import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const token = localStorage.getItem("token");

  // Fetch cart from backend
  const fetchCart = async () => {
    if (!token) return;
    try {
      const res = await axios.get("https://finalproject-backend-7rqa.onrender.com/cart", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.data?.items && Array.isArray(res.data.items)) {
        setCartItems(
          res.data.items
            .filter(i => i.product) // ✅ only keep items with product
            .map((i) => ({
              _id: i.product?._id || "", // ✅ optional chaining
              title: i.product?.name || "Unknown",
              price: i.product?.price || 0,
              img: i.product?.img || "",
              quantity: i.quantity || 1,
              stock: i.product?.stock || Infinity,
            }))
        );
      }
    } catch (err) {
      console.error("Fetch cart error:", err);
      setCartItems([]); // fallback to empty cart
    }
  };

  useEffect(() => {
    fetchCart();
  }, [token]);

  // Add to Cart (returns promise)
  const addToCart = async (product) => {
    if (!product?._id) return; // ✅ prevent null product

    if (token) {
      try {
        await axios.post(
          "https://finalproject-backend-7rqa.onrender.com/cart/add",
          { productId: product._id, quantity: 1 },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        await fetchCart(); // wait for cart update
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

  // Update Quantity
  const updateQuantity = async (productId, newQuantity) => {
    if (!productId || newQuantity < 1) return;

    if (!token) {
      setCartItems((prev) =>
        prev.map((item) =>
          item._id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    } else {
      try {
        await axios.post(
          "https://finalproject-backend-7rqa.onrender.com/cart/add",
          { productId, quantity: newQuantity },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        await fetchCart();
      } catch (err) {
        console.error("Update quantity error:", err);
      }
    }
  };

  // Remove from Cart
  const removeFromCart = async (productId) => {
    if (!productId) return;

    if (token) {
      try {
        await axios.delete("https://finalproject-backend-7rqa.onrender.com/cart/remove", {
          headers: { Authorization: `Bearer ${token}` },
          data: { productId },
        });
        await fetchCart();
      } catch (err) {
        console.error("Remove from cart error:", err);
      }
    } else {
      setCartItems((prev) => prev.filter((item) => item._id !== productId));
    }
  };

  // Clear Cart
  const clearCart = async () => {
    if (token) {
      try {
        await axios.delete("https://finalproject-backend-7rqa.onrender.com/cart/clear", {
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

  // Place Order
  const placeOrder = async (paymentMethod, address) => {
    if (!token) return alert("⚠️ Please login to place an order.");
    if (cartItems.length === 0) return alert("Cart is empty!");

    const totalPrice = cartItems.reduce(
      (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
      0
    );

    try {
      const res = await axios.post(
        "https://finalproject-backend-7rqa.onrender.com/orders",
        {
          products: cartItems.map((p) => ({ productId: p._id, quantity: p.quantity })),
          total: totalPrice,
          paymentMethod,
          address,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const order = res.data;

      // Clear cart
      await clearCart();

      // Redirect to Stripe
      const resPayment = await axios.post(
        "https://finalproject-backend-7rqa.onrender.com/payments",
        { orderId: order._id, amount: totalPrice },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      window.location.href = resPayment.data.url;

      return order;
    } catch (err) {
      console.error("Place order error:", err);
      alert("Failed to place order.");
    }
  };

  const totalItems = cartItems.reduce((acc, item) => acc + (item.quantity || 0), 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 0), 0);

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
