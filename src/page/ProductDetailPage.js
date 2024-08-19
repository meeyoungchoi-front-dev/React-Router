import React from 'react'
import { useParams } from 'react-router'

const ProductDetailPage = () => {
  const {id}= useParams();
  console.log("params", id);
  return (
    <div>
      <h1>Show Product Detail {id}</h1>
    </div>
  )
}

export default ProductDetailPage
