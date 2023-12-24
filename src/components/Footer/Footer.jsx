import React from "react";
import "./Footer.css";

function Footer () {
    return (
        <div>
            <footer>
                <div className="top-side">
                    <div className="left-top">
                        <h4>Information</h4>
                        <li><a href="">Deliveries</a></li>
                        <li><a href="">Shipping FAQ</a></li>
                        <li><a href="">Terms & Conditions</a></li>
                        <li><a href="">Privacy Policy</a></li>
                    </div>
                    <div className="left-top">
                        <h4>About Us</h4>
                        <li><a href="">Goals</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Company</a></li>
                        <li><a href="">Factory</a></li>
                        </div>
                    <div className="left-top">
                        <h4>Address</h4>
                        <li><a href="">Find a location nearest you</a></li>
                        <li><a href="">See Our Stores</a></li>
                        <li><a href="">+9912991199</a></li>
                        <li><a href="">blaa@domain.com</a></li>
                    </div>
                    <div className="right-top">
                        <h3>Good Emails</h3>
                        <p>Enter your email below and connect to be the first to know about our new collection and product launches</p>
                        <form>
                            <input name="emails" placeholder="Enter your email address"/>
                            <button><a href="">Connect</a></button>
                        </form>
                    </div>
                </div>

                <div className="bottom-side">
                    <div className="icons">
                        <li><a href=""><ion-icon name="logo-facebook"></ion-icon></a></li>
                        <li><a href=""><ion-icon name="logo-twitter"></ion-icon></a></li>
                        <li><a href=""><ion-icon name="logo-instagram"></ion-icon></a></li>
                        <li><a href=""><ion-icon name="logo-reddit"></ion-icon></a></li>
                        <li><a href=""><ion-icon name="logo-youtube"></ion-icon></a></li>
                    </div>
                    <div>
                        <p>@2023 All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;