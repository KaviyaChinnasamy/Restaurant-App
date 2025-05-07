import React, {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    const {cartCount} = this.props
    return (
      <div className="header">
        <h1>UNI Resto Cafe</h1>
        <p>Cart: {cartCount}</p>
      </div>
    )
  }
}

export default Header
