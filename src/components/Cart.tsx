import styles from "../styles/Cart.module.css";
import { useStore } from '@nanostores/react';
import { cartItems, removeItemFromCart } from '../cartStore';

const Cart = () => {
    const $cartItems = useStore(cartItems);
    const cartItemsArray = Object.values($cartItems);

    return (
        <div>
            <h2>Cart</h2>
            {cartItemsArray.length ? (
                <ul className={styles.cart_list}>
                    {cartItemsArray.map((item) => (
                        <li key={item.id} className={styles.cart_item}>
                            <img src={item.imageSrc} alt="Product" />
                            <div>
                                <p>{item.name}</p>
                                <p>{item.price} €</p>
                                <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your cart is empty!</p>
            )}
        </div>
    );
};

export default Cart;
