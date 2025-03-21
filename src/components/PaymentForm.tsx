import { PaymentElement } from "@stripe/react-stripe-js";

const PaymentForm = () => {
    return (
        <div>
            <h2>Payment</h2>
            <PaymentElement />
        </div>
    );
};

export default PaymentForm;