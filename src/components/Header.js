import React, { Component } from 'react'

export default function Header(props) {
    return (
        <header className="header">
            <div className="container">
                <div className="header_content">
                    <div className="header_logo"><img src="img/logo.svg" alt="logo" /></div>
                    <nav className="menu">
                        <ul className="menu_list">
                            <li className="menu_item"><a href="index.html" className="menu-link">Home</a></li>
                            <li className="menu_item"><a href="#" className="menu-link">Shop</a></li>
                            <li className="menu_item"><a href="checkout.html" className="menu-link">About</a></li>
                            <li className="menu_item"><a href="contact.html" className="menu-link">Contact</a></li>
                        </ul>
                    </nav>
                    
                    <ul className="header_icons">
                        <li className="header_icon"><a href="#"><img src="img/user_icon.svg" alt="user" /></a></li>
                        <li className="header_icon"><a href="#"><img src="img/search_icon.svg" alt="search" /></a></li>
                        <li className="header_icon"><a href="#"><img src="img/like_icon.svg" alt="like" /></a></li>
                        <li className="header_icon"><a href="#"><img src="img/basket_icon.svg" alt="basket" /></a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

