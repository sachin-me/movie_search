import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';

const Products = (props) => {
  const { products } = props;
  console.log(products, 'products');
  return (
    <div>
      {
        products.length > 0 ? (
          <table>
            <thead>
              <tr>
                <td>Title</td>
                <td className='year'>Year</td>
                <td className='imdbid'>imdbID</td>
                {/* <td></td> */}
              </tr>
            </thead>
            <tbody>
              {
                products && products.map((product, index) => (
                <tr>
                  <Product product={product} key={index} />
                </tr>
                ))
              }
            </tbody>
          </table>
        ) : <div style={{ marginTop: '20px' }}>Please, search any movie :)</div>
      }
    </div>
  )
}

const mapStateToProps = ({ products }) => ({
  products: products
})

export default connect(mapStateToProps)(Products);