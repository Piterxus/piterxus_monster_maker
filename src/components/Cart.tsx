import styles from "./../styles/Cart.module.css";
import { useStore } from '@nanostores/react';
import { cartItems, removeItemFromCart } from '../cartStore';
import Icon from "./Icon";

const Cart = () => {
    const $cartItems = useStore(cartItems);
    const cartItemsArray = Object.values($cartItems);
    const total = cartItemsArray.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className={styles.cart_container}>
      <div className={styles.header_cart}>
                <h2>Your cart</h2>
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
                <ul className={styles.cart_list}>
                    {cartItemsArray.map((item) => (
                        <li key={item.id} className={styles.cart_item}>
                            <img src={item.imageSrc} alt="Product" />
                            <div className={styles.item_info} onClick={() => removeItemFromCart(item.id)}>
                                <p>{item.price} €</p>
                                <Icon
                                    Imgsrc="/imgs/skeleton_shopping_remove_cart.png"
                                    alt="Cart"
                                    tooltipText="Remove to cart"
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <h1 className={styles.empty}>Your cart is empty!</h1>
            )}
          <div className={styles.total}>
                <p>Total: {total} €</p>
         
          </div>

        </div>
    );
};

export default Cart;
