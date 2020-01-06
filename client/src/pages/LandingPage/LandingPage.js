import React from "react";
import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";

const LandingPage = () => {

    document.addEventListener("DOMContentLoaded", function (event) {
        const elements = [...document.querySelectorAll('.show-on-scroll')];

        const intersectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.toggle("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        });

        elements.forEach((element) => intersectionObserver.observe(element));
    });

    return (
        <div>
            <nav className={styles["navbar navbar-expand-lg navbar-light bg-light fixed"]}>
                <p className={styles["navbar-brand col-10"]}>this.Event</p>
                <button className={styles["btn btn-outline-success my-2 my-sm-0"]} type="submit"><Link to="/home">Sign Up</Link></button>
            </nav>
            <div className={styles["header"]}>
                <h1>this.Event</h1>
                <h1 className={styles["lead"]}>Create, Customize, Join, and Manage Your Events</h1>
                <button className={styles["btn btn-primary  pill"]}><Link to="/home">Join</Link></button>
            </div>
            <div className={styles["wrapper container-fluid"]}>
                <div className={styles["background"]}>
                    <div className={styles["border"]}>
                        <div className={styles["flex-box"]}>
                            <div className={styles["inline-photo show-on-scroll left"]}>
                                <img src="./img/making-friends.png" alt="" />
                                <h1>Try New Things</h1>
                                <p className={styles["lead"]}>
                                    Make New Friends and Socialize With New People
                            </p>
                            </div>
                            <div className={styles["show-on-scroll text-fade"]}>
                                <p class="lead">
                                    Meet new people and share new experiences with others. Create your own event to share
                                    with
                                    others or
                                    find an event to join. Try something new or do something you love.
                            </p>
                            </div>
                        </div>
                        <div className={styles["flex-box"]}>
                            <div className={styles["show-on-scroll text-fade"]}>
                                <p className={styles["lead"]}>
                                    Whatever you love to do there's something always something happening . Create or join an
                                    event
                                    based on your interests and hobbies. Enjoy a social outing while doing the things you
                                    love.
                            </p>
                            </div>
                            <div className={styles["flex"]}>
                                <div className={styles["inline-photo show-on-scroll right"]}>
                                    <img src="./img/volleyball.png" alt="" />
                                    <h1>Find Your Hobbies</h1>
                                    <p className={styles["lead"]}>
                                        Find People That Enjoy The Things You Do
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles["flex-box"]}>
                            <div className={styles["inline-photo show-on-scroll left"]}>
                                <img src="./img/family.png" alt="" />
                                <h1>Create Custom Events</h1>
                                <p className={styles["lead"]}>
                                    You Have The Power To Create, Manage, Join and Customize Events
                            </p>
                            </div>
                            <div className={styles["show-on-scroll text-fade"]}>
                                <p className={styles["lead"]}>
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