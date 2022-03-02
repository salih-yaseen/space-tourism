import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCrewData } from "../../redux/actions/crewAction";
import { changeActiveLink, changeBg } from "../../redux/actions/navbarAction";

import "./crew.css";
import crew1 from "../../assets/crew/image-douglas-hurley.webp";
import crew2 from "../../assets/crew/image-mark-shuttleworth.webp";
import crew3 from "../../assets/crew/image-victor-glover.webp";
import crew4 from "../../assets/crew/image-anousheh-ansari.webp";

export const CrewPage = () => {
    const dispatch = useDispatch();

    const [activeCrew, setActiveCrew] = useState(0);

    const { crew } = useSelector((state) => state.crew);

    useEffect(() => {
        dispatch(getCrewData());
        dispatch(changeActiveLink(3));
        dispatch(changeBg("bg-crew"));

    }, []);

    const allCrews = [crew1, crew2, crew3, crew4];

    return (
        <div className="crew-container">
            <div className="crew-main">
                <div className="crew-content">
                    <div className="crew-intro-text heading5">
                        <span>02</span> MEET YOUR CREW
                    </div>

                    <div className="crew-info">
                        <div className="crew-role">
                            {crew.length && crew[activeCrew].role.toUpperCase()}
                        </div>
                        <div className="crew-name heading3">
                            {crew.length && crew[activeCrew].name.toUpperCase()}
                        </div>
                        <p className="crew-bio">
                            {crew.length && crew[activeCrew].bio}
                        </p>
                    </div>

                    <div className="crews">
                        <button
                            onClick={() => setActiveCrew(0)}
                            className={
                                activeCrew === 0
                                    ? "changeCrew activeCrew"
                                    : "changeCrew"
                            }
                        ></button>
                        <button
                            onClick={() => setActiveCrew(1)}
                            className={
                                activeCrew === 1
                                    ? "changeCrew activeCrew"
                                    : "changeCrew"
                            }
                        ></button>
                        <button
                            onClick={() => setActiveCrew(2)}
                            className={
                                activeCrew === 2
                                    ? "changeCrew activeCrew"
                                    : "changeCrew"
                            }
                        ></button>
                        <button
                            onClick={() => setActiveCrew(3)}
                            className={
                                activeCrew === 3
                                    ? "changeCrew activeCrew"
                                    : "changeCrew"
                            }
                        ></button>
                    </div>
                </div>
                <div className="crew-img">
                    <img
                        src={crew.length && allCrews[activeCrew]}
                        alt=""
                        className={activeCrew === 1 ? "imposter-crew" : ""}
                    />
                </div>
            </div>
        </div>
    );
};
