import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../containers/Product';

class Products extends Component {
  state = {
    movies: []
  }

  componentDidUpdate(prevPops, nextProps) {
    if (nextProps.movies.length === 0) { 
      this.setState({
        movies: this.props.products ||  []
      })
    }
  }

  deleteMovie = (key) => {
    const { movies } = this.state;
    const items = movies.splice(key, 1);
    this.setState({
      movies: movies
    })
  }

  render() {
    const { movies } = this.state;
    const { products } = this.props;
    const checkItems = movies.length === 0 ? products : movies;
    return (
      <div>
        {
          checkItems.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <td><span>Title</span>
                  <div className='sort'>
                    <img className='sort-down' src={require('../images/angle-down-solid.svg')} alt="" srcset=""/>
                    <img className='sort-up' src={require('../images/angle-up-solid.svg')} alt="" srcset=""/>
                  </div></td>
                  <td className='year'><span>Year</span>
                  <div className='sort'>
                    <img className='sort-down' src={require('../images/angle-down-solid.svg')} alt="" srcset=""/>
                    <img className='sort-up' src={require('../images/angle-up-solid.svg')} alt="" srcset=""/>
                  </div>
                  </td>
                  <td className='imdbid'><span>imdbID</span>
                  <div className='sort'>
                    <img className='sort-down' src={require('../images/angle-down-solid.svg')} alt="" srcset=""/>
                    <img className='sort-up' src={require('../images/angle-up-solid.svg')} alt="" srcset=""/>
                  </div>
                  </td>
                  {/* <td></td> */}
                </tr>
              </thead>
              <tbody>
                {
                  checkItems && checkItems.map((product, index) => (
                  <tr>
                    <Product deleteProduct={() => this.deleteMovie(index)} product={product} key={index} />
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
}

const mapStateToProps = ({ products }) => ({
  products: products
})

export default connect(mapStateToProps)(Products);