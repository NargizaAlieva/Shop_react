import React, { Component } from 'react'
import Banner from './Banner'
import ShopSorting from './ShopSorting'

export class Shop extends Component {
  render() {
    return (
      <main className='main'>
        <Banner />
        <ShopSorting />
        
      </main>
    )
  }
}

export default Shop