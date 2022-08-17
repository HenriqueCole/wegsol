import React from "react";

import Logo from "../../assets/logo.png";
import "./header.scss";

export default function Header() {
    return(
        <header>
            <div className="logo">
                <img src={Logo} alt="logo" className="logo-img" />
            </div>
            <div className="name-title">
                <h1>Wegsol</h1>
            </div>
        </header>
    )
}