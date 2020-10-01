import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../store/category-reducer';

export const CategorySection = ({getCategories, list}) => {

  useEffect(() => {
    getCategories();
  }, [getCategories])

  return (
    <div>
        <p>List length: {list.length}</p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  list: state.categoryReducer.categories
})

const mapDispatchToProps = {
  getCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorySection)
