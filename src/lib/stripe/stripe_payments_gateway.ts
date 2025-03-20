// const stripe = require('stripe')(import.meta.env.PUBLIC_STRIPE_SECRET_KEY);
import Stripe from 'stripe';
const stripe = new Stripe(import.meta.env.PUBLIC_STRIPE_SECRET_KEY, {
    apiVersion: '2025-02-24.acacia',
});

function createPaymentIntent(amount: number, currency: string) {
    // return stripe.paymentIntents.create({
    //     amount,
    //     currency,
    // });
    let payment_method = stripe.paymentMethods.create({
        type: 'card',
        card: {
            number: '4242424242424242',
            exp_month: 2,
            exp_year: 2022,
            cvc: '314',
        },
    });
    console.log('✅ Payment Method creado:', payment_method);
}   

