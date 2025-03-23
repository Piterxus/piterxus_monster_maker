import { PaymentElement, AddressElement } from "@stripe/react-stripe-js";

const PaymentForm = () => {
    return (
        <div>
            <h2>Payment</h2>
            <form>
                <div>
                    <h3>Shipping address</h3>
                    <AddressElement options={{ mode: 'shipping' }} />
                </div>
                <div>
                    <h3>Payment method</h3>
                    <PaymentElement />
                    <button type="submit">Pay</button>
                </div>
            </form>
        </div>
    );
};

export default PaymentForm;