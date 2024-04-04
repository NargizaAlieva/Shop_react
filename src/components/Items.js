import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
  render() {
    return (
        <div className="shop-list">
            <div className="container">
                <div className="shop-list_content">
                    {this.props.items.map(el => (
                        <Item key={el.id} item={el} />
                    ))}
                </div>
            </div>
        </div>
    )
  }
}

export default Items