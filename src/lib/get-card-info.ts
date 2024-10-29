import { query } from './strapi';

// export async function getCardInfo (id: string) {
//     return query(`cards/${id}`);
// }

// export function getCardInfo() {
//     return query(`cards`)
//     .then((res) => res.json());
// }

export function getCardInfo() {
    return query(`cards`)
        .then((res) => {
            console.log(res);
            // return res;
        });
}