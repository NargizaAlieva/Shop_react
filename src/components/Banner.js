import React, { Component } from 'react'

export class Banner extends Component {
  render() {
    return (
        <section className="banner">
        <div className="banner_bg">
            <img src="img/5ab419f83208f5bf5599e17c45ec04a3.png" alt="image_bg" />
        </div>
        <div className="banner_content">
            <div src="banner_logo">
                <img src="img/banner-logo.svg" alt="logo" />
            </div>
                        
            <h1 className="banner_title">Shop</h1>
            <ul className="banner_subtitle">
                <li><a href="index.html">Home</a></li>
                <li><span> &gt; </span></li>
                <li><a href="#">Shop</a></li>
            </ul>
        </div>
    </section>
    )
  }
}

export default Banner