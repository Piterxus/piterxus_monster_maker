// Card.tsx
import React, { useEffect, useState } from 'react';
import Icon from "../components/Icon.tsx";
import AddToCartForm from "./AddToCartForm";
import styles from "../styles/Card.module.css";
import { query } from '../lib/strapi.ts';
const STRAPI_HOST = import.meta.env.PUBLIC_STRAPI_HOST;

type CardProps = {
    documentId: string;
    price: number;
    imageSrc: string;
};

const Card: React.FC<CardProps> = ({ documentId, price, imageSrc }) => {
    const [imgSrc, setImgSrc] = useState<string | null>(null);

    useEffect(() => {
        async function fetchImage() {
            try {
                const data = await query(`cards/${documentId}?populate=img_product`);
                // Asegúrate de usar la URL de la imagen obtenida de la API
                // console.log("DATA", `${STRAPI_HOST}${data.data.img_product[0].url}`);
                const newImgSrc = `${STRAPI_HOST}${data.data.img_product[0].url}`;
                setImgSrc(newImgSrc);
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
                <AddToCartForm item={{ id: documentId, name: "Figurine", imageSrc: imgSrc || '' }}>
                    <Icon
                        Imgsrc="/imgs/skeleton_shopping_add_cart.png"
                        alt="Cart"
                        tooltipText="Add to cart"
                        buttonType="button"
                        id="cart"
                    />
                </AddToCartForm>
            </div>
        </div>
    );
};

export default Card;
