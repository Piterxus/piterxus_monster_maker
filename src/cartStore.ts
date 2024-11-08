import { persistentAtom } from '@nanostores/persistent';

export interface CartItem {
    id: string;
    name: string;
    imageSrc: string;
    price: number;
    quantity: number;
}

export const cartItems = persistentAtom<Record<string, CartItem>>('cartItems', {}, {
    encode: JSON.stringify,
    decode: JSON.parse
});

// Función para agregar un elemento al carrito
export const addItemToCart = (item: CartItem) => {
    cartItems.set({
        ...cartItems.get(),
        [item.id]: item
    });
};

// Función para eliminar un elemento del carrito
export const removeItemFromCart = (itemId: string) => {
    const updatedCart = { ...cartItems.get() };
    delete updatedCart[itemId];
    cartItems.set(updatedCart);
};
