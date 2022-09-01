import React from "react";

import Logo from "../../assets/logo.png";
import "./header.scss";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link to={'/'}>
                <div className="logo">
                    <img src={Logo} alt="logo" className="logo-img" />
                </div>
            </Link>
          
        </header>
    )
}