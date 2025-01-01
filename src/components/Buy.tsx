import { useStore } from '@nanostores/react';
import { cartItems, addItemToCart } from '../cartStore';


const Buy = () =>{
    const $cartItems = useStore(cartItems);

    if (Object.keys($cartItems).length === 0) {
        // return <p>No items in cart</p>;
    //   alert("No items in cart");
    window.location.href = "/";
    }
    // return (
    //     <div>
    //         <h2>Buy</h2>
    //         <button>Buy</button>
    //     </div>
    // );

}

export default Buy;