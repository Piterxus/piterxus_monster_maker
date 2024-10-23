import { isCartOpen, addCartItem } from '../cartStore';
import type { CartItemDisplayInfo } from '../cartStore';
import type { ReactNode } from 'react';  // Importa ReactNode en lugar de Children ya que que Children en React no es un tipo, sino un valor que hace referencia al API de utilidades para manipular los hijos de un componente.

// type Props = {
//     item: CartItemDisplayInfo;
//     children: ReactNode;  // Usa ReactNode para definir los hijos
// };
// Prescindo por el momento de item
type Props = {
    item: CartItemDisplayInfo;
    children: ReactNode;  // Usa ReactNode para definir los hijos
};
// export default function AddToCartForm({ item, children }: Props) {
//     // function addToCart(e: React.FormEvent<HTMLFormElement>) {  // Ajusta el tipo del evento
//     //     e.preventDefault();
//     //     isCartOpen.set(true);
//     //     addCartItem(item);
//     // }
//     function addToCart(e: React.FormEvent<HTMLFormElement>) {
//         e.preventDefault();
//         alert('Añadir al carrito');
//         console.log('Añadir al carrito');
//     }

//     return <form onSubmit={addToCart}>{children}</form>;
// }

export default function AddToCartForm({ item, children }: Props) {
    // function addToCart(e: React.FormEvent<HTMLFormElement>) {  // Ajusta el tipo del evento
    //     e.preventDefault();
    //     isCartOpen.set(true);
    //     addCartItem(item);
    // }
    function addToCart(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        addCartItem(item);
       
        console.log('Cantidad de productos en el carrito: ', item);
    }

    return <form onSubmit={addToCart}>{children}</form>;
}
