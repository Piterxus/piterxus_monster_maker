import { atom, map } from 'nanostores';

export const isCartOpen = atom(false);

export type CartItem = {
    id: string;
    name: string;
    imageSrc: string;
    price: number;
    quantity: number;
};

export type CartItemDisplayInfo = Pick<CartItem, 'id' | 'name' | 'imageSrc' | 'price'>;

export const cartItems = map<Record<string, CartItem>>({});

export function addCartItem({ id, name, imageSrc, price }: CartItemDisplayInfo) {
    const existingEntry = cartItems.get()[id];

    if (!existingEntry) {
        cartItems.setKey(id, {
                    id,
                    name,
                    imageSrc,
                    price,
                    quantity: 1,
        });
    } 
}
