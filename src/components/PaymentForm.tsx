import { PaymentElement, AddressElement } from "@stripe/react-stripe-js";

const PaymentForm = () => {
    return (
        <div>
            <h2>Payment</h2>
            <form>
                <AddressElement options={{ mode: 'shipping' }} />
                <PaymentElement />
                <button type="submit">Pay</button>
            </form>
        </div>
    );
};

export default PaymentForm;