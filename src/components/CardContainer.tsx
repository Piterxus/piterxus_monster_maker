import { useState, useEffect } from "react";
import Card from "../components/Card";
import { getCardInfo } from "../lib/get-card-info";


const STRAPI_HOST = import.meta.env.PUBLIC_STRAPI_HOST;

const CardContainer = () => {
    const [cardInfoMap, setCardInfoMap] = useState<any[]>([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getCardInfo();
            console.log(data);
            setCardInfoMap(data);
        }
        fetchData();
    }, []);

    return (
        <>
            {cardInfoMap
            .filter((card) => card.productStatus !== 'reserved')
            .map((card) => (
                <Card
                    key={card.documentId}
                    documentId={card.documentId}
                    price={card.price}
                    imageSrc={STRAPI_HOST + card.img_product[0].url}
                    name={card.name}
                />
            ))}
        </>
    );
};

export default CardContainer;
