import { persistentAtom } from '@nanostores/persistent';

export interface CartItem {
    id: string;
    name: string;
    imageSrc: string;
    price: number;
    quantity: number;
}

const updateItemStatus = async (documentId: CartItem["id"], status:string) => {
    try{
        console.log("Actualizando producto a disponible:", documentId);
        console.log("Estado del producto:", [status]);
        const response = await fetch("http://localhost:1337/api/card/bulk-update", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                documentIds: [documentId],
                productStatus: status
            })
        });
        const data = await response.json();
        if (response.ok) {
            console.log(`Producto actualizado a ${status}`, data);
        } else {
            console.error("Error al actualizar el producto:", data);
        }
    }catch(error){
        console.error("Error de red al actualizar el producto:", error);
    }
};

export const cartItems = persistentAtom<Record<string, CartItem>>('cartItems', {}, {
    encode: JSON.stringify,
    decode: JSON.parse
});

// Función para agregar un elemento al carrito
export const addItemToCart = (item: CartItem) => {
    updateItemStatus(item.id, "reserved");
    cartItems.set({
        ...cartItems.get(),
        [item.id]: item
    });
};

// Función para eliminar un elemento del carrito
export const removeItemFromCart = (itemId: string) => {
    updateItemStatus(itemId, "available");
    const updatedCart = { ...cartItems.get() };
    delete updatedCart[itemId];
    cartItems.set(updatedCart);
};
