import React from "react";
import styles from "./ErrorBanner.module.css"

const ErrorBanner = (props) => {
    const error = props.children
    if (error) {
        return (
            <div className={styles.banner}>
                <p className={styles.text}>{props.children}</p>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default ErrorBanner;