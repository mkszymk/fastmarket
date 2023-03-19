import { useState } from "react";
import { CartContext } from "./CartContext";
import Swal from "sweetalert2";
import "./style.css";

const CartProvider = ({ children }) => {
  const [cartContent, setCartContent] = useState([]);
  const [itemRemovedId, setItemRemovedId] = useState([]);

  const itemToCartAlert = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    showCloseButton: true,
    customClass: {
      container: "alertContainer",
    },
  });

  const isInCart = (productId) => {
    return cartContent.some((product) => {
      return product.id === productId;
    });
  };

  const addToCart = (product, quantity) => {
    const _productsInCart = [...cartContent];
    if (isInCart(product.id)) {
      _productsInCart.forEach((_product) => {
        if (_product.id === product.id) {
          _product.quantity =
            _product.quantity + quantity > _product.stock
              ? _product.stock
              : _product.quantity + quantity;
        }
      });
      setCartContent(_productsInCart);
    } else {
      const itemToCart = { ...product, quantity };
      setCartContent([...cartContent, itemToCart]);
    }
    // if (cartContent.length !== 0) {
    //   const itemToCart = { ...product, quantity };
    //   setCartContent([...cartContent, itemToCart]);
    // }

    itemToCartAlert.fire({
      title: `${product.name} agregado al carrito.`,
      icon: "success",
    });
  };

  const clearCart = () => {
    let _itemsId = [];
    cartContent.forEach((item) => {
      _itemsId.push(item.id);
    });
    setItemRemovedId(_itemsId);
    setTimeout(() => {
      setCartContent([]);
      setItemRemovedId([]);
    }, 500);
  };

  const removeCartItem = (itemId) => {
    setItemRemovedId([...itemRemovedId, itemId]);
    setTimeout(() => {
      setCartContent(cartContent.filter((item) => item.id !== itemId));
      setItemRemovedId([]);
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
