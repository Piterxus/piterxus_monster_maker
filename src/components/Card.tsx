import { useEffect, useState } from 'react';
import Icon from "../components/Icon.tsx";
import AddToCartForm from "./AddToCartForm";
import styles from "../styles/Card.module.css";
import { useStore } from '@nanostores/react';
import { cartItems } from '../cartStore';

type CardProps = {
    documentId: string;
    price: number;
    imageSrc: string;
    name: string;
};

const Card = ({ documentId, price, imageSrc, name }: CardProps) => {
    const [imgSrc, setImgSrc] = useState<string | null>(null);
        const $cartItems = useStore(cartItems);
   
        console.log("Cart item", Object.values($cartItems));
        const itemIdToCheck = documentId; // o cualquier id que desees verificar
        const itemExists = Object.values($cartItems).some(item => item.id === itemIdToCheck);

        console.log("Item exists in cart:", itemExists);
    useEffect(() => {
        async function fetchImage() {
            try {
             

                setImgSrc(imageSrc);
            } catch (error) {
                console.error("Error fetching image:", error);
            }
        }
        fetchImage();
    }, [documentId]);

    return (
        <div className={styles.card_test}>
            {imgSrc ? (
                <img src={imgSrc} alt="Product image" />
            ) : (
                <p>Loading...</p>
            )}
            <div className={styles.add_cart}>
                <p>{price} €</p>
                {(itemExists) ? <p>Item in cart</p> :  ""}
                <AddToCartForm item={{ id: documentId, price, name, imageSrc: imgSrc || '' }}>
                    <Icon
                        Imgsrc="/imgs/skeleton_shopping_add_cart.png"
                        alt="Cart"
                        tooltipText="Add to cart"
                        buttonType="submit"
                        id="cart"
                    />
                </AddToCartForm>
            </div>
        </div>
    );
};

export default Card;
