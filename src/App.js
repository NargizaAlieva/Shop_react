import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Shop from './components/Shop';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          img: 'item_img1.png',
          title: 'Syltherine',
          desc: 'Stylish cafe chair',
          price: '$ 2.500',
          priceSale: '$ 3.500'
        },
        {
          id: 2,
          img: 'item_img2.png',
          title: 'Leviosa',
          desc: 'Stylish cafe chair',
          price: '$ 2.500',
          priceSale: ''
        },
        {
          id: 3,
          img: 'item_img3.png',
          title: 'Lolito',
          desc: 'Luxury big sofa',
          price: '$ 1.000',
          priceSale: '$ 14.000.000'
        },
        {
          id: 4,
          img: 'item_img4.png',
          title: 'Respira',
          desc: 'Outdoor bar table and stool',
          price: '$ 50.000',
          priceSale: ''
        },
        {
          id: 5,
          img: 'item_img1.png',
          title: 'Syltherine',
          desc: 'Stylish cafe chai',
          price: '$ 2.500',
          priceSale: '$ 3.500'
        },
        {
          id: 6,
          img: 'item_img2.png',
          title: 'Leviosa',
          desc: 'Stylish cafe chair',
          price: '$ 2.500',
          priceSale: ''
        },
        {
          id: 7,
          img: 'item_img3.png',
          title: 'Lolito',
          desc: 'Luxury big sofa',
          price: '$ 1.000',
          priceSale: '$ 14.000.000'
        },
        {
          id: 8,
          img: 'item_img4.png',
          title: 'Respira',
          desc: 'Outdoor bar table and stool',
          price: '$ 50.000',
          priceSale: ''
        },
        {
          id: 9,
          img: 'item_img1.png',
          title: 'Syltherine',
          desc: 'Stylish cafe chair',
          price: '$ 2.500',
          priceSale: '$ 3.500'
        },
        {
          id: 10,
          img: 'item_img2.png',
          title: 'Leviosa',
          desc: 'Stylish cafe chair',
          price: '$ 2.500',
          priceSale: ''
        },
        {
          id: 11,
          img: 'item_img3.png',
          title: 'Lolito',
          desc: 'Luxury big sofa',
          price: '$ 1.000',
          priceSale: '$ 14.000.000'
        },
        {
          id: 12,
          img: 'item_img4.png',
          title: 'Respira',
          desc: 'Outdoor bar table and stool',
          price: '$ 50.000',
          priceSale: ''
        },
        {
          id: 13,
          img: 'item_img1.png',
          title: 'Syltherine',
          desc: 'Stylish cafe chair',
          price: '$ 2.500',
          priceSale: '$ 3.500'
        },
        {
          id: 14,
          img: 'item_img2.png',
          title: 'Leviosa',
          desc: 'Stylish cafe chair',
          price: '$ 2.500',
          priceSale: ''
        },
        {
          id: 15,
          img: 'item_img3.png',
          title: 'Lolito',
          desc: 'Luxury big sofa',
          price: '$ 1.000',
          priceSale: '$ 14.000.000'
        },
        {
          id: 16,
          img: 'item_img4.png',
          title: 'Respira',
          desc: 'Outdoor bar table and stool',
          price: '$ 50.000',
          priceSale: ''
        },
      ]
    }
    
    this.state.items = this.state.items
  }

  render () {
    return (
      <div className="wrapper">
        <Header />
        <Shop />
        <Items items={this.state.items} />

        <Footer />
      </div>
    );
  }
}

export default App;
