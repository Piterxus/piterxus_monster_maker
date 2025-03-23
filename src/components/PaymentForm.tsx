import { PaymentElement } from "@stripe/react-stripe-js";

const PaymentForm = () => {
    return (
        <div>
            <h2>Payment</h2>
            <form>
                <PaymentElement />
                <button type="submit">Pay</button>
            </form>
        </div>
    );
};

export default PaymentForm;