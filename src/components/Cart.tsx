import styles from "./../styles/Cart.module.css";
import { useStore } from '@nanostores/react';
import { cartItems, removeItemFromCart } from '../cartStore';
import Icon from "./Icon";

const Cart = () => {
    const $cartItems = useStore(cartItems);
    const cartItemsArray = Object.values($cartItems);
    const total = cartItemsArray.reduce((acc, item) => acc + item.price, 0);

    const handleBuy = () => {
        // Aquí puedes agregar lógica para manejar la compra
        console.log("Compra realizada con éxito", $cartItems);
        // Limpiar el carrito, enviar datos al backend, etc.
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


        </div>
    );
};

export default Cart;
