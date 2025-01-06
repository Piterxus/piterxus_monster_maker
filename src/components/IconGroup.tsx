// IconGroup.tsx
import React from 'react';
import Icon from '../components/Icon';

const IconGroup: React.FC = () => {
    const handleCartClick = () => {
       console.log('Redirecting to cart...');
    };

    const handleContactClick = () => {
        console.log('Contact me at...');
    };

    const handleRequestsClick = () => {
        console.log('Requests are closed at the moment. Please try again later.');
    };

    return (
        <div className="icons">
            <Icon
                Imgsrc="/imgs/skeleton_shopping_cart.png"
                alt="Cart"
                tooltipText="Cart"
                id="cart"
                buttonType="button"
                onClick={handleCartClick}
                route="/cart"
         
            /> 
            <Icon
                Imgsrc="/imgs/contact_icon.png"
                alt="Contact"
                tooltipText="Contact"
                id="contact"
                buttonType="button"
                onClick={handleContactClick}
            />
            <Icon
                Imgsrc="/imgs/requests_icon.png"
                alt="Requests"
                tooltipText="Requests"
                id="requests"
                buttonType="button"
                onClick={handleRequestsClick}
            />
        </div>
    );
};

export default IconGroup;
