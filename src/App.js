import React, {Component} from 'react'
import Header from './components/Header'
import CategoryTabs from './components/CategoryTabs'
import DishCard from './components/DishCard'
import './App.css'

class App extends Component {
  state = {
    menuData: [],
    selectedCategoryId: '',
    cartCount: 0,
  }

  componentDidMount() {
    fetch('https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details')
      .then(response => response.json())
      .then(data => {
        this.setState({
          menuData: data,
          selectedCategoryId: data[0]?.category_id || '',
        })
      })
  }

  updateCategory = categoryId => {
    this.setState({selectedCategoryId: categoryId})
  }

  updateCart = delta => {
    this.setState(prev => ({cartCount: prev.cartCount + delta}))
  }

  render() {
    const {menuData, selectedCategoryId, cartCount} = this.state
    const selectedCategory = menuData.find(
      cat => cat.category_id === selectedCategoryId,
    )
    const dishes = selectedCategory ? selectedCategory.dishes : []

    return (
      <div className="app">
        <Header cartCount={cartCount} />
        <CategoryTabs
          categories={menuData}
          selectedCategoryId={selectedCategoryId}
          onCategoryChange={this.updateCategory}
        />
        <div className="dish-list">
          {dishes.map(dish => (
            <DishCard
              key={dish.dish_id}
              dish={dish}
              onCartChange={this.updateCart}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App
