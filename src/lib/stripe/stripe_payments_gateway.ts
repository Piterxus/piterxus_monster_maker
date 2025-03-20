// const stripe = require('stripe')(import.meta.env.PUBLIC_STRIPE_SECRET_KEY);
import Stripe from 'stripe';
import 'dotenv/config';
const key = process.env.PUBLIC_STRIPE_SECRET_KEY;
console.log(key);
if (!key) {
    throw new Error('❌ PUBLIC_STRIPE_SECRET_KEY no está definida en el archivo .env');
}
const stripe = new Stripe(key, {
    apiVersion: '2025-02-24.acacia',
});
async function createPaymentIntent(amount: number, currency: string) {
    try {
        // Crear el Payment Intent con métodos de pago automáticos sin redirección
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
            automatic_payment_methods: {
                enabled: true,
                allow_redirects: "never"
            },
            payment_method: 'pm_card_visa', // Método de pago de prueba de Stripe
            confirm: true,
        });

        console.log('✅ Payment Intent creado:', paymentIntent);
    } catch (error) {
        console.error('❌ Error creando Payment Intent:', error);
    }
}


createPaymentIntent(1000, 'usd');
