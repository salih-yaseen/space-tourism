import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/shared/logo.svg";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import close from "../../assets/shared/icon-close.svg";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveLink, changeBg } from "../../redux/actions/navbarAction";

export const Navbar = () => {
    const [navStatus, setNavStatus] = useState(false);
    const { activeLink } = useSelector((state) => state.navbar);
    const dispatch = useDispatch();

    const openNavbar = () => {
        setNavStatus(true);
    };

    const closeNavbar = () => {
        setNavStatus(false);
    };

    const clickHandler = (activeLink, bg) => {
        dispatch(changeBg(bg));
        dispatch(changeActiveLink(activeLink));
    };

    return (
        <div className="navbar-container">
            <div className="logo">
                <img src={logo} alt="" />
            </div>

            <nav className="nav">
                <ul
                    className={
                        navStatus ? "nav-links-list open" : "nav-links-list"
                    }
                >
                    <img
                        src={close}
                        alt=""
                        onClick={closeNavbar}
                        className="close-btn"
                    />

                    <Link to="/">
                        <li
                            className={
                                activeLink === 1
                                    ? "nav-links active"
                                    : "nav-links"
                            }
                            onClick={() => clickHandler(1, "bg-home")}
                        >
                            <span>00</span> HOME
                        </li>
                    </Link>
                    <Link to="/destination">
                        <li
                            className={
                                activeLink === 2
                                    ? "nav-links active"
                                    : "nav-links"
                            }
                            onClick={() => clickHandler(2, "bg-destination")}
                        >
                            <span>01</span> DESTINATION
                        </li>
                    </Link>
                    <Link to="/crew">
                        <li
                            className={
                                activeLink === 3
                                    ? "nav-links active"
                                    : "nav-links"
                            }
                            onClick={() => clickHandler(3, "bg-crew")}
                        >
                            <span>02</span> CREW
                        </li>
                    </Link>
                    <Link to="/technology">
                        <li
                            className={
                                activeLink === 4
                                    ? "nav-links active"
                                    : "nav-links"
                            }
                            onClick={() => clickHandler(4, "bg-technology")}
                        >
                            <span>03</span> TECHNOLOGY
                        </li>
                    </Link>
                    <Link to="/about">
                        <li
                            className={
                                activeLink === 5
                                    ? "nav-links active"
                                    : "nav-links"
                            }
                            onClick={() => clickHandler(5, "bg-about")}
                        >
                            <span>04</span> ABOUT
                        </li>
                    </Link>
                </ul>
            </nav>

            <div className="hamburger" onClick={openNavbar}>
                <img src={hamburger} alt="" />
            </div>
        </div>
    );
};
