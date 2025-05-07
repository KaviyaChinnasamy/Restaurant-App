import React, {Component} from 'react'

class DishCard extends Component {
  state = {
    quantity: 0,
  }

  increase = () => {
    const {onCartChange} = this.props
    this.setState(prevState => ({quantity: prevState.quantity + 1}))
    onCartChange(1)
  }

  decrease = () => {
    const {quantity} = this.state
    const {onCartChange} = this.props

    if (quantity > 0) {
      this.setState(prevState => ({quantity: prevState.quantity - 1}))
      onCartChange(-1)
    }
  }

  render() {
    const {dish} = this.props
    const {quantity} = this.state

    return (
      <div className="dish-card">
        <img src={dish.dish_image} alt={dish.dish_name} />
        <div>
          <h3>{dish.dish_name}</h3>
          <p>
            {dish.dish_currency} {dish.dish_price}
          </p>
          <p>{dish.dish_description}</p>
          <div>
            <button onClick={this.decrease}>-</button>
            <span>{quantity}</span>
            <button onClick={this.increase}>+</button>
          </div>
          {dish.addonCat && dish.addonCat.length > 0 && (
            <p className="addon-text">Customizations available</p>
          )}
        </div>
      </div>
    )
  }
}

export default DishCard
