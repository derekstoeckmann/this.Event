import React from "react";
import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";

const LandingPage = () => {

    return (
        <div>
            <nav className={styles["navbar"]}>
                <p className={styles["navbar-brand"]}>this.Event</p>
                <Link to="/home">
                    <button className={styles["btn"]}><span className={styles["btn-style"]}>Sign Up</span></button>
                </Link>
            </nav>
            <div className={styles["header"]}>
                <h1>this.Event</h1>
                <h1 className={styles["lead"]}>Create, Customize, Join, and Manage Your Events</h1>
                <Link to="/home">
                    <button className={styles["btn"]}><span className={styles["btn-style"]}>Join</span></button>
                </Link>
            </div>
            <div className={styles["wrapper"] + " " + styles["container-fluid"]}>
                <div className={styles["background"]}>
                    <div className={styles["border"]}>
                        <div className={styles["flex-box"]}>
                            <div className={styles["inline-photo"] + " " + styles["show-on-scroll"] + " " + styles["left"]}>
                                <img src={require("./img/making-friends.png")} alt="Making Friends" />
                                <h1>Try New Things</h1>
                                <p className={styles["lead"]}>
                                    Make New Friends and Socialize With New People
                            </p>
                            </div>
                            <div>
                                <p className={styles["desc-text"]}>
                                    Meet new people and share new experiences with others. Create your own event to share
                                    with
                                    others or
                                    find an event to join. Try something new or do something you love.
                            </p>
                            </div>
                        </div>
                        <div className={styles["flex-box"]}>
                            <div>
                                <p className={styles["desc-text"]}>
                                    Whatever you love to do there's something always something happening . Create or join an
                                    event
                                    based on your interests and hobbies. Enjoy a social outing while doing the things you
                                    love.
                            </p>
                            </div>
                            <div className={styles["flex"]}>
                                <div className={styles["inline-photo"] + " " + styles["show-on-scroll"] + " " + styles["right"]}>
                                    <img src={require("./img/volleyball.png")} alt="Friends playing volleyball" />
                                    <h1>Find Your Hobbies</h1>
                                    <p className={styles["lead"]}>
                                        Find People That Enjoy The Things You Do
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles["flex-box"]}>
                            <div className={styles["inline-photo"] + " " + styles["show-on-scroll"] + " " + styles["left"]}>
                                <img src={require("./img/family.png")} alt="Family and Friends" />
                                <h1>Create Custom Events</h1>
                                <p className={styles["lead"]}>
                                    You Have The Power To Create, Manage, Join and Customize Events
                            </p>
                            </div>
                            <div>
                                <p className={styles["desc-text"]}>
                                    Create an event and customize all the details. You decide who you want to invite and
                                    when it
                                    happens. Or
                                    you can open your event to the community and invite others to join in on the fun.
                                    This.Event
                                    allows
                                    you
                                    to choose how your event happens.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;