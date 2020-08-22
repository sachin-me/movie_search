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

  handleSort = (type, order) => {
    const { movies } = this.state;

    if (type === 'Title' && order === 'asc') {

      this.setState({
        movies: movies.slice(0).sort(function(a,b) {
          return (a[type] > b[type]) ? 1 : (a[type] < b[type]) ? -1 : 0;
        })
      });

    } 
    if (type === 'Title' && order === 'dsc') {

      return this.setState({
        movies: movies.slice(0).sort(function(a,b) {
          return (a[type] < b[type]) ? 1 : (a[type] > b[type]) ? -1 : 0;
        })
      });

    }
    if (type === 'Year' && order === 'asc') {

      return this.setState({
        movies: movies.slice(0).sort(function(a,b) {
          return (a[type] > b[type]) ? 1 : (a[type] < b[type]) ? -1 : 0;
        })
      });

    }
    if (type === 'Year' && order === 'dsc') {

      return this.setState({
        movies: movies.slice(0).sort(function(a,b) {
          return (a[type] < b[type]) ? 1 : (a[type] > b[type]) ? -1 : 0;
        })
      });

    }
    if (type === 'imdbID' && order === 'asc') {

      return this.setState({
        movies: movies.slice(0).sort(function(a,b) {
          return (a[type] > b[type]) ? 1 : (a[type] < b[type]) ? -1 : 0;
        })
      });

    }
    if (type === 'imdbID' && order === 'dsc') {

      return this.setState({
        movies: movies.slice(0).sort(function(a,b) {
          return (a[type] < b[type]) ? 1 : (a[type] > b[type]) ? -1 : 0;
        })
      });

    }
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
                    <img className='sort-down' src={require('../images/caret-down-solid.svg')} alt="" srcset="" onClick={() => this.handleSort('Title', 'asc')} />
                    <img className='sort-up' src={require('../images/caret-up-solid.svg')} alt="" srcset="" onClick={() => this.handleSort('Title', 'dsc')} />
                  </div></td>
                  <td className='year'><span>Year</span>
                  <div className='sort'>
                    <img className='sort-down' src={require('../images/caret-down-solid.svg')} alt="" srcset="" onClick={() => this.handleSort('Year', 'asc')} />
                    <img className='sort-up' src={require('../images/caret-up-solid.svg')} alt="" srcset="" onClick={() => this.handleSort('Year', 'dsc')} />
                  </div>
                  </td>
                  <td className='imdbid'><span>imdbID</span>
                  <div className='sort'>
                    <img className='sort-down' src={require('../images/caret-down-solid.svg')} alt="" srcset="" onClick={() => this.handleSort('imdbID', 'asc')} />
                    <img className='sort-up' src={require('../images/caret-up-solid.svg')} alt="" srcset="" onClick={() => this.handleSort('imdbID', 'dsc')} />
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