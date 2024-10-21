import { isCartOpen, addCartItem } from '../cartStore';
import type { CartItemDisplayInfo } from '../cartStore';
import type { ReactNode } from 'react';  // Importa ReactNode en lugar de Children ya que que Children en React no es un tipo, sino un valor que hace referencia al API de utilidades para manipular los hijos de un componente.

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
