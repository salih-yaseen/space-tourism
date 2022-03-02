import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTechData } from "../../redux/actions/techAction";
import { changeActiveLink, changeBg } from "../../redux/actions/navbarAction";
import "./technology.css";

import vechicle from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceport from "../../assets/technology/image-spaceport-portrait.jpg";
import capsule from "../../assets/technology/image-space-capsule-portrait.jpg";

import vechicleLandscape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import spaceportLandscape from "../../assets/technology/image-spaceport-landscape.jpg";
import capsuleLandscape from "../../assets/technology/image-space-capsule-landscape.jpg";

export const TechnologyPage = () => {
    const dispatch = useDispatch();

    const [activeTech, setActiveTech] = useState(0);

    const { tech } = useSelector((state) => state.tech);

    useEffect(() => {
        dispatch(getTechData());
        dispatch(changeActiveLink(4));
        dispatch(changeBg("bg-technology"));

    }, []);

    const techPortrait = [vechicle, spaceport, capsule];

    const techLandscape = [
        vechicleLandscape,
        spaceportLandscape,
        capsuleLandscape,
    ];

    return (
        <div className="tech-container">
            <main className="tech-main">
                <div className="tech-intro-text heading5">
                    <span>03</span> SPACE LAUNCH 101
                </div>

                <div className="tech-content">
                    <div className="tech-info">
                        <div className="tech-btn-list">
                            <button
                                onClick={() => setActiveTech(0)}
                                className={
                                    activeTech === 0
                                        ? "tech-btn activeTech"
                                        : "tech-btn"
                                }
                            >
                                1
                            </button>
                            <button
                                onClick={() => setActiveTech(1)}
                                className={
                                    activeTech === 1
                                        ? "tech-btn activeTech"
                                        : "tech-btn"
                                }
                            >
                                2
                            </button>
                            <button
                                onClick={() => setActiveTech(2)}
                                className={
                                    activeTech === 2
                                        ? "tech-btn activeTech"
                                        : "tech-btn"
                                }
                            >
                                3
                            </button>
                        </div>
                        <div className="tech-main-content">
                            <div className="sub-head2">THE TECHNOLOGY...</div>
                            <div className="tech-name heading3">
                                {tech.length &&
                                    tech[activeTech].name.toUpperCase()}
                            </div>
                            <p className="tech-desc">
                                {tech.length && tech[activeTech].description}
                            </p>
                        </div>
                    </div>
                    <div className="tech-img tech-portrait-img">
                        <img src={techPortrait[activeTech]} alt="" />
                    </div>
                    <div className="tech-img tech-landscape-img">
                        <img src={techLandscape[activeTech]} alt="" />
                    </div>
                </div>
            </main>
        </div>
    );
};
