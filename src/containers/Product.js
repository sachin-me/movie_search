import React from 'react';

const Product = (props) => {
  const { product } = props;
  console.log(product, 'product');
  return (
    <>
      <td className='product-title'>{product.Title}</td>
      <td className='product-year'>{product.Year}</td>
      <td className='product-imdb-id'>{product.imdbID}</td>
      <td className='trash-td'><img src={require('../images/trash.png')} alt="" srcset=""/></td>
    </>
  )
}

export default Product;