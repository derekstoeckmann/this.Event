import React from "react";

const Wrapper = (props) => {
    return (
        <div className="App">
            <header>
                <span className="small-letters">this.</span><span className="large-letters">E</span><span
                    className="small-letters">vent</span>
            </header>
            {props.children}
            <br />
        </div>
    )
}

export default Wrapper;