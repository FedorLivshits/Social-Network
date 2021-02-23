import React from 'react'
import './About.css'
import about_img from "../../images/about-img.png"


const About = () => {
    return(
        <section className="about__content">
            <div className="advantages-box">
                <div className="advantages-box__info">
                    <div className="advantages-box__title">
                        Проект соц сети
                    </div>
                    <div className="advantages-box__text">
                        <p>Nam dapibus nisl vitae elit fringilla rutrum.
                            Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl nunc
                            et massa.</p>
                        <p>
                            Vestibulum sed metus in lorem tristique ullamcorper id vitae erat.</p>
                    </div>
                </div>
                <div className="advantages-box__images">
                    <img src={about_img} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default About;