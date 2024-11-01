// Card.tsx
import React, { useEffect, useState } from 'react';
// const STRAPI_HOST = import.meta.env.PUBLIC_STRAPI_HOST;
import Icon from "../components/Icon.tsx";
import AddToCartForm from "./AddToCartForm";
import styles from "../styles/Card.module.css";
// import { query } from '../lib/strapi.ts';
// import { getCardInfo } from '../lib/get-card-info.ts';
// const cardInfo = await getCardInfo();
// const { img_product } = cardInfo[0];
// const imageSrc = STRAPI_HOST + img_product[0].url;
import { useStore } from '@nanostores/react';
import { cartItems, isCartOpen } from '../cartStore';

type CardProps = {
    documentId: string;
    price: number;
    imageSrc: string;
    name: string;
};

    const Card: React.FC<CardProps> = ({ documentId, price, imageSrc, name }) => {
    const [imgSrc, setImgSrc] = useState<string | null>(null);
        const $cartItems = useStore(cartItems);
   
        console.log("Cart item", Object.values($cartItems));
        const itemIdToCheck = documentId; // o cualquier id que desees verificar
        const itemExists = Object.values($cartItems).some(item => item.id === itemIdToCheck);

        console.log("Item exists in cart:", itemExists);
    useEffect(() => {
        async function fetchImage() {
            try {
                // const data = await query(`cards/${documentId}?populate=img_product`);
                // Asegúrate de usar la URL de la imagen obtenida de la API
                // console.log("DATA", `${STRAPI_HOST}${data.data.img_product[0].url}`);
                // console.log("DATA", imageSrc);
                // const newImgSrc = `${STRAPI_HOST}${data.data.img_product[0].url}`;

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
