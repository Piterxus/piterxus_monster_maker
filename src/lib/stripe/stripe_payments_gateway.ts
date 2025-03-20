// const stripe = require('stripe')(import.meta.env.PUBLIC_STRIPE_SECRET_KEY);
import Stripe from 'stripe';
const stripe = new Stripe("sk_test_51R4gEpQvW8H7Sj6CctcEZpHz36I77eii2Zq6Nj7nJ6WkXJEY8lA4kzLAlMdbLBIsJJwd8NOJlVOFm1XsCsaTghPs00PT3vINpb", {
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
