import React, {useState} from "react";
import "./Navigation.css";
import DropDownPerson from "../DropDownPerson/DropDownPerson";

function Navigation() {

    const [isNavbarActive, setIsNavbarActive] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarActive(!isNavbarActive);
    };

    const [isPersonOpen, setIsPersonOpen] = useState(false);

    function personclick () {
        setIsPersonOpen(!isPersonOpen);
    }

    const [searchBoxOpen, setsearchBoxOpen] = useState(false);

    function searchclick () {
        setsearchBoxOpen(!searchBoxOpen);
    }

    return (
        <div>

<header>

<div className="header-left">
    <div className="left-inline">
        <div className="disclaimer"><a href="">Disc.</a></div>
        <div className="heart-icon"><a href=""><ion-icon name="heart-outline"></ion-icon></a></div>
    </div>
    <div className="menu-icon" onClick={toggleNavbar}><ion-icon name="menu"></ion-icon></div>
</div>

<div className="header-center">
    <div className={`navbar ${isNavbarActive ? "navbar-active" : ""}`}>
        <div className="close-icon" onClick={toggleNavbar}><ion-icon name="close"></ion-icon></div>
        <div className="navigations">
            <li><a href="">Home</a></li>
            <li><a href="">Products</a></li>
        </div>
        <div className="navigations">
            <li className="navigation-bottom"><a href="">Specials</a></li>
            <li className="navigation-bottom"><a href="">Sale</a></li>
        </div>
    </div>
    <div className="branding">BiShop</div>
</div>

<div className="header-right">
    <div className="right-inline">
        <div className="right-icon" onClick={searchclick}><ion-icon name="search-outline"></ion-icon></div>
        <div className="right-icon" onClick={personclick} onRequestClose={personclick}><ion-icon name="person-outline"></ion-icon></div>
        <div className="right-icon"><ion-icon name="bag-outline"></ion-icon></div>
    </div>
</div>

</header>

{
    isPersonOpen && <DropDownPerson/>
}

{
    searchBoxOpen && 
<div className="searchbar">
    <div className="searchbox">
        <form action="">
        <div className="searchbox-icons"><ion-icon name="search-outline"></ion-icon></div>
        <input type="text" placeholder="find your product" />
        <div className="searchbox-icons" onClick={searchclick}><ion-icon name="close"></ion-icon></div>
        </form>
    </div>
</div>

}

    </div>

    )
}

export default Navigation;