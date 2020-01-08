import React from "react";
import styles from "./ErrorBanner.module.css"

const ErrorBanner = (props) => {
    return (
        <div className={styles["banner"]}>
            <p className={styles["text"]}>{props.children}</p>
        </div>
    )
}

export default ErrorBanner;