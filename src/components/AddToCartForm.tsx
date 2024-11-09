import { addItemToCart } from '../cartStore';
import type { CartItem } from '../cartStore';
import type { ReactNode } from 'react';  


type Props = {
    item: CartItem;
    children: ReactNode;  
};


export default function AddToCartForm({ item, children }: Props) {

    function addToCart(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        addItemToCart(item);
       
      
    }

    return <form onSubmit={addToCart}>{children}</form>;
}
