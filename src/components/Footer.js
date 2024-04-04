import React, { Component } from 'react'

export default function Footer(props) {
    return (
        <footer className="footer">
            <div className="footer_content">
                <div className="footer_content-title">
                    <p className="footer_title">Ala-Too IT Club</p>
                    <p className="footer_subtitle">Done by University students</p>
                </div>
                <div className="footer_liks">
                    <p className="footer_subtitle">links</p>
                    <ul>
                        <li><a href="#" className="footer_link">Home</a></li>
                        <li><a href="#" className="footer_link">Shop</a></li>
                        <li><a href="#" className="footer_link">About</a></li>
                        <li><a href="#" className="footer_link">Contacts</a></li>
                    </ul>
                </div>
                <div className="footer_link footer_content_help">
                    <p className="footer_subtitle">Help</p>
                    <ul>
                        <li><a href="#" className="footer_link">Payment Options</a></li>
                        <li><a href="#" className="footer_link">Returns</a></li>
                        <li><a href="#" className="footer_link">Privacy Policies</a></li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <hr className="footer_line" />
                <div className="footer_bottom">
                    <span>All rights reverved by Ala-Too IT Club</span>
                </div>
            </div>
        </footer>
    )
}