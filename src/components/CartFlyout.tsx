import { useStore } from '@nanostores/react';
import { cartItems } from '../cartStore';


export default function CartFlyout() {
  
    const $cartItems = useStore(cartItems);

    return (
        <>
            {Object.values($cartItems).length ? (
                <p >Products in the cart:{Object.values($cartItems).length} </p>

            ) : (


                <p >Your cart is empty!</p>

            )}
        </>
    );
}
