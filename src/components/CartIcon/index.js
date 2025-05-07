import {Component} from 'react'

class CartIcon extends Component {
  render() {
    const {count} = this.props
    return <p>Cart: {count}</p>
  }
}

export default CartIcon
