import './index.css'
import {BsSearch} from 'react-icons/bs'

const FiltersGroup = props => {
  const renderRatingFiltersList = () => {
    const {ratingsList} = props

    return ratingsList.map(rating => {
      const {changeRating, activeRatingId} = props
      const onClickRatingsItem = () => changeRating(rating.ratingId)

      const ratingClassName =
        activeRatingId === rating.ratingId ? `active-rating rating` : `rating`

      return (
        <li
          className="rating-items"
          key={rating.ratingId}
          onClick={onClickRatingsItem}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-img"
          />
          <p className={ratingClassName}> &up </p>
        </li>
      )
    })
  }

  const renderRatingsFilters = () => (
    <div>
      <h1 className="heading">Rating</h1>
      <ul className="ratings-list">{renderRatingFiltersList()}</ul>
    </div>
  )

  const renderCategoriesList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(category => {
      const {changeCategory, activeCategoryId} = props
      const onClickCategoryItem = () => changeCategory(category.categoryId)
      const isActive = category.categoryId === activeCategoryId
      const activeClassName = isActive ? `active-category category` : `category`

      return (
        <li
          className="category-item"
          key={category.categoryId}
          onClick={onClickCategoryItem}
        >
          <p className={activeClassName}> {category} </p>
        </li>
      )
    })
  }

  const renderProductsCategory = () => (
    <>
      <h1 className="heading"> Category </h1>
      <ul className="categories-list">{renderCategoriesList()}</ul>
    </>
  )

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === `Enter`) {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props

    return (
      <div className="search-container">
        <input
          value={searchInput}
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const {clearFilters} = props

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductsCategory()}
      {renderRatingsFilters()}

      <button className="clear-button" onClick={clearFilters} type="button">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
