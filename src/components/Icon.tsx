// Icon.tsx
import React from 'react';
import styles from "../styles/Icon.module.css";

type IconProps = {
    Imgsrc: string;
    alt: string;
    tooltipText?: string;
    id?: string;
    buttonType?: "button" | "submit" | "reset" | undefined;
};

const Icon= ({ Imgsrc, alt, tooltipText, id, buttonType }: IconProps) => (
    <button id={id} type={buttonType} aria-label={tooltipText} className={`${styles.tooltip_container} ${styles.icon}`}>
        <img src={Imgsrc} alt={alt} />
        {tooltipText && <span className={styles.tooltip_text}>{tooltipText}</span>}
    </button>
);

export default Icon;
