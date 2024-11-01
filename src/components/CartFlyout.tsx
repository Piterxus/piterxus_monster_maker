import { useStore } from '@nanostores/react';
import { cartItems, isCartOpen } from '../cartStore';
import styles from './CartFlyout.module.css';

export default function CartFlyout() {
    const $isCartOpen = useStore(isCartOpen);
    const $cartItems = useStore(cartItems);

    return (
        <>
            {Object.values($cartItems).length ? (
                <p >Products in the cart:{ Object.values($cartItems).length} </p>
                // <>
                //     {Object.values($cartItems).map((cartItem) => (

                //         <p key={cartItem.id}>Products in the cart: {cartItem.quantity}</p>

                //     ))}
                // </>
            ) : (
                // <p>Your cart is empty!</p>

                <p >Your cart is empty!</p>

            )}
        </>
    );
}
