import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDestiData } from "../../redux/actions/destinationAction";
import "./destination.css";
import moon from "../../assets/destination/image-moon.webp";
import mars from "../../assets/destination/image-mars.webp";
import europa from "../../assets/destination/image-europa.webp";
import titan from "../../assets/destination/image-titan.webp";
import { changeActiveLink, changeBg } from "../../redux/actions/navbarAction";

export const DestinationPage = () => {
    const dispatch = useDispatch();
    const [activeDesti, setActiveDesti] = useState(0);

    const { desti } = useSelector((state) => state.desti);

    useEffect(() => {
        dispatch(getDestiData());
        dispatch(changeActiveLink(2));
        dispatch(changeBg("bg-destination"));

    }, []);

    const destinations = [moon, mars, europa, titan];

    return (
        <div className="desti-container">
            <main className="desti-main">
                <h5 className="desti-intro-text heading5">
                    <span>01</span> PICK YOUR DESTINATION
                </h5>
                <div className="desti-content">
                    <div className="desti-img">
                        {desti.length > 0 && (
                            <img src={destinations[activeDesti]} alt="" />
                        )}
                    </div>
                    <div className="desti-main-content">
                        <div className="destinations">
                            <div
                                onClick={() => setActiveDesti(0)}
                                className={
                                    activeDesti === 0
                                        ? "desti-items activeDesti"
                                        : "desti-items"
                                }
                            >
                                MOON
                            </div>
                            <div
                                onClick={() => setActiveDesti(1)}
                                className={
                                    activeDesti === 1
                                        ? "desti-items activeDesti"
                                        : "desti-items"
                                }
                            >
                                MARS
                            </div>
                            <div
                                onClick={() => setActiveDesti(2)}
                                className={
                                    activeDesti === 2
                                        ? "desti-items activeDesti"
                                        : "desti-items"
                                }
                            >
                                EUROPA
                            </div>
                            <div
                                onClick={() => setActiveDesti(3)}
                                className={
                                    activeDesti === 3
                                        ? "desti-items activeDesti"
                                        : "desti-items"
                                }
                            >
                                TITAN
                            </div>
                        </div>
                        <h2 className="currentDesti heading3">
                            {desti.length &&
                                desti[activeDesti].name.toUpperCase()}
                        </h2>

                        <p>{desti.length && desti[activeDesti].description}</p>

                        <div className="divider"></div>

                        <div className="travel-info">
                            <div className="distance">
                                <p className="sub-head2">AVG. DISTANCE</p>
                                <div className="sub-head1">
                                    {desti.length &&
                                        desti[
                                            activeDesti
                                        ].distance.toUpperCase()}
                                </div>
                            </div>
                            <div className="travel-time">
                                <p className="sub-head2">EST. TRAVEL TIME</p>
                                <div className="sub-head1">
                                    {desti.length &&
                                        desti[activeDesti].travel.toUpperCase()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
