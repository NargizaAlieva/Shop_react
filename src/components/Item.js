import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
        <div className="shop-item">
            <div className="item-default">
                <img src={"./img/"+ this.props.item.img} alt="product_img" />
                <div className="item-info">
                    <h3 className="item-name">{this.props.item.title}</h3>
                    <p className="item-disctiption">{this.props.item.desc}</p>
                    <div>
                        <span className="item-price">{this.props.item.price}</span>
                        <span className="item-price_sale">{this.props.item.priceSale}</span>
                    </div>
                </div>
            </div>
            <div className="item-hover">
                <div className="item-hover_content">
                    <div className="add_btn">
                        <button>Add to card</button>
                    </div>
                    <div className="cart_actions">
                        <div className="cart-share"><img src="./img/share.png" alt="share-icon" />Share</div>
                        <div className="cart-compare"><img src="./img/compare.png" alt="compare-icon" />Compare</div>
                        <div className="cart-like"><img src="./img/Like icon.png" alt="like-icon" />Like</div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Item