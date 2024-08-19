import React from 'react'
import { useSearchParams } from 'react-router-dom'

const ProductPage = () => {
  let [query, setQUery] = useSearchParams();
  console.log("query: ", query.get("page"));
  return (
    <div>
      <h1>Show All Products</h1>
    </div>
  )
}

export default ProductPage
