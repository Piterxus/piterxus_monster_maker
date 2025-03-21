import { useStore } from '@nanostores/react';
import { cartItems, addItemToCart } from '../cartStore';
import styles from "../styles/Buy.module.css";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const publishableKey = import.meta.env.PUBLIC_STRIPE_PUBLIC_KEY;
const stripePromise = loadStripe(publishableKey);


const Buy = () => {
    const $cartItems = useStore(cartItems);
    const total = Object.values($cartItems).reduce((acc, item) => acc + item.price, 0);
    const clientSecret = "pi_3R54ddQvW8H7Sj6C1zkT8qpP_secret_Xxk5Vn3cYd77KCUXYnUWp60VI";

    if (Object.keys($cartItems).length === 0) {
        // return <p>No items in cart</p>;
        //   alert("No items in cart");
        window.location.href = "/";
    }
    return (
        <Elements stripe={stripePromise} options= {{clientSecret}}>
            <PaymentForm />
        </Elements>

    );

}

export default Buy;