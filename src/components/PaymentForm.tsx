import { PaymentElement, AddressElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import {  useStripe, useElements } from "@stripe/react-stripe-js";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        setIsProcessing(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: `${window.location.origin}/register`,
            },
        });

        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occured." + error.message);
        }

        setIsProcessing(false);
    };
    return (
        <div>
            <h2>Payment</h2>
            <form id="payment-form" onSubmit={handleSubmit}>
                <div>
                    <h3>Shipping address</h3>
                    <AddressElement options={{ mode: 'shipping' }} />
                </div>
                <div>
                    <h3>Payment method</h3>
                    <PaymentElement id="payment-element" />
                    <button disabled={isProcessing || !stripe || !elements} id="submit">
                        <span id="button-text">
                            {isProcessing ? "Processing ... " : "Pay now"}
                        </span>
                    </button>
                    {/* Show any error or success messages */}
                    {message && <div id="payment-message">{message}</div>}
                </div>
            </form>
        </div>
    );
};

export default PaymentForm;