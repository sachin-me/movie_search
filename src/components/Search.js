import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions';

class Search extends Component {
    state = {
      movie: ''
    }

    handleChage = ({target: {name, value}}) => {
      this.setState({
        [name]: value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const { movie } = this.state;
      this.props.dispatch(actions.searchMovie(movie));
      
    }

    render() {
      return (
        <Fragment>
          <form action="" onSubmit={this.handleSubmit}>
            <input type="search" name="movie" id="" placeholder='Search movies title' onChange={this.handleChage} />
            <div className='search-wrapper' onClick={this.handleSubmit}>
              <input type="submit" value="" /><img src={require('../images/icons8-search.svg')} className='search-img' />
            </div>
          </form>
        </Fragment>
      )
    }
}

export default connect(null)(Search);