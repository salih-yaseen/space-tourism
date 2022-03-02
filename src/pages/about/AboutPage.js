import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeActiveLink, changeBg } from "../../redux/actions/navbarAction";
import "./about.css"
import instagram from "../../assets/about/instagram.svg"
import twitter from "../../assets/about/twitter.svg"
import linkedin from "../../assets/about/linkedin.svg"
import github from "../../assets/about/github.svg"
import aboutImage from "../../assets/about/image-about.jpg"

export const AboutPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeActiveLink(5));
    dispatch(changeBg("bg-about"));

}, []);
  return (
    <div className='about-container'>
      <main className="about-main">
        <div className="about-content">
          <h1 className="about-head heading3">
              About Me
          </h1>
          <h3 className="about-subhead sub-head1">
              I'm Front-end Developer and UX/UI Designer
          </h3>
          <p className="about-text">
            My name is Salih Yaseen Rajab, Senior Computer Engineering student at Tishk International University and Front-end developer graduate at Rwanga Organization, I describe my self as a guy who loves to mix his design ideas with coding passion. I like to create and contribute to open source projects and work with other people.
          </p>
          <div className="social-icons">
            <a href="https://github.com/salih-yaseen" target="_blank"><img src={github} alt="" className="social-icon"/></a>
            <a href="https://twitter.com/_Rekani_" target="_blank"><img src={twitter} alt="" className="social-icon"/></a>
            <a href="https://www.linkedin.com/in/salih-yaseen-4b9385178/" target="_blank" ><img src={linkedin} alt="" className="social-icon"/></a>
            <a href="https://www.instagram.com/salih__rekani/" target="_blank"><img src={instagram} alt="" className="social-icon"/></a>
          </div>
        </div>
        <div className="divider"></div>
        <div className="about-image">
          <img src={aboutImage} alt="" />
        </div>
      </main>
    </div>
  )
}

