import { useState } from "react";
import { CartContext } from "./CartContext";
import Swal from "sweetalert2";

const CartProvider = ({ children }) => {
  const [cartContent, setCartContent] = useState([]);
  const [itemRemovedId, setItemRemovedId] = useState(null);

  const itemToCartAlert = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
  });

  const addToCart = (product, quantity) => {
    const itemToCart = { ...product, quantity };
    setCartContent([...cartContent, itemToCart]);
    itemToCartAlert.fire({
      title: `${product.name} agregado al carrito.`,
      icon: "success",
    });
  };

  const clearCart = () => {
    setCartContent([]);
  };

  const removeCartItem = (itemId) => {
    setItemRemovedId(itemId);
    setTimeout(() => {
      setCartContent(cartContent.filter((item) => item.id !== itemId));
      setItemRemovedId(null);
    }, 500);
  };

  return (
    <CartContext.Provider
      value={{
        cartContent,
        addToCart,
        removeCartItem,
        clearCart,
        itemRemovedId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
