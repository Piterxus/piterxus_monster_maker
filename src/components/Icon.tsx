import styles from "../styles/Icon.module.css";

type IconProps = {
    Imgsrc: string;
    alt: string;
    tooltipText?: string;
    id?: string;
    buttonType?: "button" | "submit" | "reset" | undefined;
    route?: string; // Agregas una prop para la ruta
};

const Icon = ({ Imgsrc, alt, tooltipText, id, buttonType, route }: IconProps) => {
    const handleClick = () => {
        if (route) {
            window.location.href = route; // Redirige al hacer clic
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
