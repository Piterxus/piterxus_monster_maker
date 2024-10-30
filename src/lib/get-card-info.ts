import { query } from './strapi';
const STRAPI_HOST = import.meta.env.PUBLIC_STRAPI_HOST;

// export async function getCardInfo (id: string) {
//     return query(`cards/${id}`);
// }

// export function getCardInfo() {
//     return query(`cards`)
//     .then((res) => res.json());
// }

export function getCardInfo() {
    return query(`cards?populate=img_product`)
        .then((res) => {
            // console.log(res.data);
            const image = `${STRAPI_HOST}${res.data[0].img_product[0].url}`;
            console.log(image);
            // console.log(res.data[0].img_product[0].url);
            return res.data;
        });
}