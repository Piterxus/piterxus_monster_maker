import { addCartItem } from '../cartStore';
import type { CartItemDisplayInfo } from '../cartStore';
import type { ReactNode } from 'react';  


type Props = {
    item: CartItemDisplayInfo;
    children: ReactNode;  
};


export default function AddToCartForm({ item, children }: Props) {

    function addToCart(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        addCartItem(item);
       
      
    }

    return <form onSubmit={addToCart}>{children}</form>;
}
