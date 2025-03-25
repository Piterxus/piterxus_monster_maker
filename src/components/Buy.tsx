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
    // const clientSecret = "pi_3R54ddQvW8H7Sj6C1zkT8qpP_secret_Xxk5Vn3cYd77KCUXYnUWp60VI";
    const clientSecret = "pi_3R6U1QQvW8H7Sj6C1rxW2wtl_secret_sakEbFaL2t0OKqrm5DlJaX1O9"
    

    if (Object.keys($cartItems).length === 0) {
        // return <p>No items in cart</p>;
        //   alert("No items in cart");
        window.location.href = "/";
    }
    return (
        <Elements stripe={stripePromise} options={{
            clientSecret,
            appearance: {
                theme: 'night', // También puedes probar 'night', 'flat' o 'none'
                variables: {
                    // fontFamily: 'Arial, sans-serif',
                    colorText: '#ffffff', // Color del texto de los labels e inputs
                    // colorBackground: '#f8f8f8', // Color de fondo del formulario
                    // colorPrimary: '#000', // Color de botones y acentos
                }
            }
        }}>
           <div className={styles.buyContainer}>
                <PaymentForm />
           </div>
        </Elements>

    );

}

export default Buy;