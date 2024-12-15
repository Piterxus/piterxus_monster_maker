import React, { useState } from "react";
import styles from "./../styles/Cart.module.css";
import { useStore } from '@nanostores/react';
import { cartItems, removeItemFromCart } from '../cartStore';
import Icon from "./Icon";
import Popup from "./Popup";

const Cart = () => {
    const $cartItems = useStore(cartItems);
    const cartItemsArray = Object.values($cartItems);
    const total = cartItemsArray.reduce((acc, item) => acc + item.price, 0);

    const [showPopup, setShowPopup] = useState(false);

    const handleBuy = () => {
        // Aquí puedes agregar lógica para manejar la compra
        console.log("Compra realizada con éxito", $cartItems);
        setShowPopup(true);
        // Limpiar el carrito, enviar datos al backend, etc.
    };

    const handleClosePopup = () => {
        // Cierra el popup
        setShowPopup(false);
    };

    const handleGuestCheckout = () => {
        alert("Checkout como invitado.");
        setShowPopup(false);
        // Aquí puedes redirigir al flujo de compra para invitados
    };

    const handleRegisterCheckout = () => {
        alert("Ir al registro.");
        setShowPopup(false);
        // Aquí puedes redirigir al formulario de registro
    };

    return (
        <div className={styles.cart_container}>
            <div className={styles.header_cart}>
                <h1>YOUR CART</h1>
                <Icon
                    Imgsrc="/imgs/home.png"
                    alt="Cart"
                    tooltipText="Back to home"
                    id="home"
                    buttonType="button"
                    route="/"

                />
            </div>
            {cartItemsArray.length ? (
                <>
                    <ul className={styles.cart_list}>
                        {cartItemsArray.map((item) => (
                            <li key={item.id} className={styles.cart_item}>
                                <img src={item.imageSrc} alt="Product" />
                                <div className={styles.item_info} >
                                    <p>{item.price} €</p>
                                    <Icon
                                        Imgsrc="/imgs/skeleton_shopping_remove_cart.png"
                                        alt="Cart"
                                        tooltipText="Remove to cart"
                                        onClick={() => removeItemFromCart(item.id)}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.total}>
                        <h2>Total: {total} €</h2>
                        <Icon
                            Imgsrc="/imgs/buy.png"
                            alt="Buy icon"
                            tooltipText="Buy!"
                            onClick={handleBuy}
                        />
                    </div>
                </>
            ) : (
                <h1 className={styles.empty}>Your cart is empty!</h1>
            )}

            {/* Renderiza el popup si está visible */}
            {showPopup && (
                <Popup
                    onClose={handleClosePopup}
                    onGuestCheckout={handleGuestCheckout}
                    onRegisterCheckout={handleRegisterCheckout}
                />
            )}
        </div>
    );
};

export default Cart;
