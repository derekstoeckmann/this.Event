import React from "react";
import styles from "./Wrapper.module.css"

const Wrapper = (props) => {
    return (
        <div className="App">
            <header>
                <span className={styles["small-letters"]}>this.</span><span className={styles["large-letters"]}>E</span><span
                    className={styles["small-letters"]}>vent</span>
            </header>
            {props.children}
            <br />
        </div>
    )
}

export default Wrapper;