import { useStore } from '@nanostores/react';
import { cartItems, addItemToCart } from '../cartStore';
import styles from "../styles/Buy.module.css";


const Buy = () => {
    const $cartItems = useStore(cartItems);

    if (Object.keys($cartItems).length === 0) {
        // return <p>No items in cart</p>;
        //   alert("No items in cart");
        window.location.href = "/";
    }
    return (
        <div className={styles.buyContainer}>
            <form className='buyForm'>
                <h2>Buy</h2>
                <div className={styles.inputContainer}>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' name='name' required />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' required />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor='phone'>Phone:</label>
                    <input type='tel' id='phone' name='phone' required />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor='address'>Address:</label>
                    <input type='text' id='address' name='address' required />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor='city'>City:</label>
                    <input type='text' id='city' name='city' required />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor='zip'>Zip:</label>
                    <input type='text' id='zip' name='zip' required />
                </div>


                <button>Buy</button>
            </form>
        </div>
    );

}

export default Buy;