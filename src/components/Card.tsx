import { useEffect, useState } from 'react';
import Icon from "../components/Icon.tsx";
import AddToCartForm from "./AddToCartForm";
import styles from "../styles/Card.module.css";
import { useStore } from '@nanostores/react';
import { cartItems, addItemToCart } from '../cartStore';

type CardProps = {
    documentId: string;
    price: number;
    imageSrc: string;
    name: string;
};

const Card = ({ documentId, price, imageSrc, name }: CardProps) => {
    const [imgSrc, setImgSrc] = useState<string | null>(null);
    const $cartItems = useStore(cartItems);

    const itemExists = !!$cartItems[documentId];

    const handleAddToCart = () => {
        addItemToCart({ id: documentId, price, name, imageSrc, quantity: 1 });
    };

    useEffect(() => {
        setImgSrc(imageSrc);
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
                {itemExists ? <p>Item in cart</p> : ""}
                <div onClick={handleAddToCart} style={{ cursor: "pointer" }}>
                    <Icon
                        Imgsrc="/imgs/skeleton_shopping_add_cart.png"
                        alt="Cart"
                        tooltipText="Add to cart"
                    />
                </div>
            </div>
        </div>
    );
};

export default Card;
