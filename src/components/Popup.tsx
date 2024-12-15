// Popup.tsx
import React from "react";
import styles from "./../styles/Popup.module.css"; // Estilos específicos para el popup

interface PopupProps {
    onClose: () => void;
    onGuestCheckout: () => void;
    onRegisterCheckout: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose, onGuestCheckout, onRegisterCheckout }) => {
    return (
        <div className={styles.popup_overlay}>
            <div className={styles.popup_content}>
                <h3>¿Cómo quieres continuar?</h3>
                <button onClick={onGuestCheckout} className={styles.guest_button}>
                    Continuar como invitado
                </button>
                <button onClick={onRegisterCheckout} className={styles.register_button}>
                    Crear una cuenta
                </button>
                <button onClick={onClose} className={styles.close_button}>
                    Cancelar
                </button>
            </div>
        </div>
    );
};

export default Popup;
