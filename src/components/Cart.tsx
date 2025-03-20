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

    // const handleBuy = async () => {
    //     const documentIds = Object.values($cartItems).map(item => item.id);
    //     console.log("Comprando los productos con IDs:", documentIds);
    
    //     try {
    //         const response = await fetch("http://localhost:1337/api/card/bulk-update", {
    //             method: "PUT",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 documentIds,
    //                 productStatus: "reserved"
    //             })
    //         });
    
    //         const data = await response.json();
    
    //         if (response.ok) {
    //             console.log("Compra realizada con éxito:", data);
    //             setShowPopup(true);
    //             // Aquí puedes limpiar el carrito o actualizar el estado según sea necesario
    //         } else {
    //             console.error("Error al realizar la compra:", data);
    //             alert("No se pudo realizar la compra. Por favor, inténtalo de nuevo.");
    //         }
    //     } catch (error) {
    //         console.error("Error de red al realizar la compra:", error);
    //         alert("Hubo un problema al conectar con el servidor.");
    //     }
    // };
    

    const handleClosePopup = () => {
        // Cierra el popup
        setShowPopup(false);
    };

    const handleGuestCheckout = () => {
        console.log("Checkout como invitado.");
        setShowPopup(false);
        window.location.href = "/buy";
        // Aquí puedes redirigir al flujo de compra para invitados
    };

    const handleRegisterCheckout = () => {
        console.log("Ir al registro.");
        setShowPopup(false);
        window.location.href = "/register";
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
