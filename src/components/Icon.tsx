import styles from "../styles/Icon.module.css";

type IconProps = {
    Imgsrc: string;
    alt: string;
    tooltipText?: string;
    id?: string;
    buttonType?: "button" | "submit" | "reset" | undefined;
    route?: string; // Agregas una prop para la ruta
    onClick?: () => void;
};

const Icon = ({ Imgsrc, alt, tooltipText, id, buttonType, route, onClick }: IconProps) => {
    const handleClick = () => {
        if (onClick) {
            onClick(); // Ejecuta la función pasada como propiedad si existe
        }
        if (route) {
            window.location.href = route; // Redirige si no se proporciona una función onClick
        }
    };

    return (
        <button id={id} type={buttonType} aria-label={tooltipText} className={`${styles.tooltip_container} ${styles.icon}`} onClick={handleClick}>
            <img src={Imgsrc} alt={alt} />
            {tooltipText && <span className={styles.tooltip_text}>{tooltipText}</span>}
        </button>
    );
};

export default Icon;
