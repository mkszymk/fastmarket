import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import {
  collection,
  addDoc,
  getFirestore,
  doc,
  updateDoc,
} from "firebase/firestore";
import Swal from "sweetalert2";

export default function Cart() {
  const { cartContent, removeCartItem, itemRemovedId, clearCart } =
    useContext(CartContext);

  const createOrder = () => {
    Swal.fire({
      title: "Completa tus datos:",
      html: "<div class='buyFormContainer'><div class='nameContainer'>Nombre: <input id='buyer-name' required></input></div><div class='mailContainer'>Email: <input id='buyer-mail' type='email' required></input></div><div class='phoneContainer'>Teléfono: <input id='buyer-phone' required></input></div></div>",
      preConfirm: () => {
        return new Promise(function (resolve) {
          resolve([
            document.getElementById("buyer-name").value,
            document.getElementById("buyer-mail").value,
            document.getElementById("buyer-phone").value,
          ]);
        });
      },
    }).then((r) => {
      if (!r.value[0] || !r.value[1] || !r.value[2]) {
        Swal.fire(
          "Error",
          "Debes completar todos los datos, intenta nuevamente",
          "error"
        );
      } else {
        const db = getFirestore();
        const querySnapshot = collection(db, "orders");

        addDoc(querySnapshot, {
          buyer: {
            email: r.value[1],
            name: r.value[0],
            phone: r.value[2],
          },
          products: cartContent.map((product) => {
            return {
              title: product.name,
              price: product.price,
              id: product.id,
              quantity: product.quantity,
            };
          }),
          total: cartContent.reduce(
            (acc, currProd) => acc + currProd.price * currProd.quantity,
            0
          ),
        })
          .then((r) => {
            Swal.fire(
              "Orden creada!",
              "Tu orden con ID: <b>" + r.id + "</b> ha sido creada con éxito!",
              "success"
            );
            updateStocks();
            clearCart();
          })
          .catch((e) => console.log(e));
      }
    });
  };

  const updateStocks = () => {
    const db = getFirestore();
    cartContent.forEach((product) => {
      const querySnapshot = doc(db, "products", product.id);

      updateDoc(querySnapshot, {
        stock: product.stock - product.quantity,
      })
        .then()
        .catch((e) => console.log(e));
    });
  };

  return (
    <div className="cartItemsContainer">
      <div className="cartTitleContainer">
        <h2>Mi carrito</h2>
        {cartContent.length !== 0 ? (
          <button className="clearCartButton" onClick={clearCart}>
            Limpiar carrito
          </button>
        ) : (
          <></>
        )}
      </div>
      {cartContent.length === 0 ? (
        <div className="emptyCart">
          El carrito está vacío, encuentra productos en la{" "}
          <Link to={"/"} className="cartLink">
            página principal
          </Link>
          .
        </div>
      ) : (
        cartContent.map((product, i) => (
          <div
            key={product.id}
            className={
              i + 1 === cartContent.length
                ? "singleItemContainerCart lastCartItem"
                : "singleItemContainerCart"
            }
            style={
              itemRemovedId.includes(product.id)
                ? { animation: "removedItemAnimation 0.5s forwards" }
                : {}
            }
          >
            <div className="cartDescContainer cartImgContainer">
              <img
                className=" cartProductInfo cartProductImg"
                src={product.img}
                alt={product.name}
              ></img>
            </div>
            <div className="cartDescContainer cartProductNameContainer">
              <div className="cartProductInfo cartProductName">
                {product.name}
              </div>
            </div>
            <div className="cartDescContainer cartProductDescriptionContainer">
              <div className="cartProductInfo cartProductDescription">
                {product.description}
              </div>
            </div>
            <div className="cartDescContainer cartProductQuantityContainer">
              <div className="cartProductInfo cartProductQuantity">
                Unidades: {product.quantity}
              </div>
            </div>
            <div className="cartDescContainer cartProductPriceContainer">
              <div className="cartProductInfo cartProductPrice">
                USD {product.price} c/u
              </div>
            </div>
            <div className="cartDescContainer cartProductRemoveBtnContainer">
              <button
                className="cartProductInfo removeCartItemButton"
                onClick={() => removeCartItem(product.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))
      )}
      {cartContent.length !== 0 && (
        <div className="cartTotalContainer">
          <div className="orderTotal">
            Total de la orden:{" "}
            <div className="totalPriceNumber">
              USD{" "}
              {cartContent.reduce(
                (acc, curr) => acc + curr.price * curr.quantity,
                0
              )}
            </div>
          </div>
          <div className="purchaseButtonContainer">
            <button className="purchaseButton" onClick={createOrder}>
              Terminar compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
