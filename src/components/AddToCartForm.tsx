import { isCartOpen, addCartItem } from '../cartStore';
import type { CartItemDisplayInfo } from '../cartStore';
import type { ReactNode } from 'react';  // Importa ReactNode en lugar de Children

type Props = {
    item: CartItemDisplayInfo;
    children: ReactNode;  // Usa ReactNode para definir los hijos
};

export default function AddToCartForm({ item, children }: Props) {
    function addToCart(e: React.FormEvent<HTMLFormElement>) {  // Ajusta el tipo del evento
        e.preventDefault();
        isCartOpen.set(true);
        addCartItem(item);
    }

    return <form onSubmit={addToCart}>{children}</form>;
}
