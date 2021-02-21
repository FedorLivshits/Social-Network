import React from 'react'
import './Footer.css'

const Footer = () => {
    return <footer className="footer">
        <div className="container">
            <div className="footer__inner">
                <div className="footer-menu">

                    <a href="#">About Martaup </a>
                    <a href="#"> Help </a>
                    <a href="#">Privacy Policy</a>

                </div>
                <div className="footer-rights ">
                    © 2021 All rights reserved.
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;