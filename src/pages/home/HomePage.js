import React, { useEffect } from "react";
import { useNavigate } from "react-router";

import "./home.css";
import { useDispatch } from "react-redux";
import { changeActiveLink, changeBg } from "../../redux/actions/navbarAction";

export const HomePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeActiveLink(1));
        dispatch(changeBg("bg-home"));

    }, []);

    const clickHandler = () => {
        dispatch(changeActiveLink(2));
        navigate("/destination");
    };

    return (
        <div className="home-container">
            <main className="home-main">
                <div className="home-content">
                    <h5 className="home-intro heading5">
                        SO, YOU WANT TO TRAVEL TO
                    </h5>
                    <h1 className="home-head heading1">SPACE</h1>
                    <p className="home-text">
                        Let’s face it; if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div className="explore">
                    <button className="explore-btn" onClick={clickHandler}>
                        EXPLORE
                    </button>
                </div>
            </main>
        </div>
    );
};
