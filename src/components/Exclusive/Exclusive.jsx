import React from "react";
import "./Exclusive.css";

function Exclusive() {
    return (
        <div>
            <section className="exclusive">
                <div><h2>Exclusive</h2></div>
                <div className="features">
                <div className="left">
                    <div className="promotion about-box">
                        <img src="./assets/feature-1.jpg" alt=""/>
                        <div className="description">
                            <h3>Promotions and Discounts</h3>
                            <p>Get 60% off on every spring collection product</p>
                            <a href="">Shop Now<ion-icon name="arrow-forward-outline"></ion-icon></a>
                        </div>
                    </div>
                    <div className="trending about-box">
                        <img src="./assets/feature-2.jpg" alt="aaa"/>
                        <div className="description">
                            <h3>Trending Now</h3>
                            <p>Explore the trending world of our products</p>
                            <a href="">Explore<ion-icon name="arrow-forward-outline"></ion-icon></a>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="custom about-box">
                        <img src="./assets/feature-3.jpg" alt=""/>
                        <div className="description">
                            <h3>Customize Product</h3>
                            <p>You can customize your design from us.</p>
                            <a href="">Let's Do<ion-icon name="arrow-forward-outline"></ion-icon></a>
                        </div>
                    </div>
                    <div className="blog about-box">
                        <img src="./assets/feature-4.jpg" alt=""/>
                        <div className="description">
                            <h3>Blogs On Socials</h3>
                            <p>Explore the influencers on social media</p>
                            <a href="">Explore<ion-icon name="arrow-forward-outline"></ion-icon></a>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
}

export default Exclusive;