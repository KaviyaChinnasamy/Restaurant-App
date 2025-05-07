import React, {Component} from 'react'

class CategoryTabs extends Component {
  render() {
    const {categories, selectedCategoryId, onCategoryChange} = this.props

    return (
      <div className="tabs">
        {categories.map(cat => (
          <button
            key={cat.category_id}
            className={selectedCategoryId === cat.category_id ? 'active' : ''}
            onClick={() => onCategoryChange(cat.category_id)}
          >
            {cat.menu_category}
          </button>
        ))}
      </div>
    )
  }
}

export default CategoryTabs
