const actions = {
  searchMovie: (val) => dispatch => {
    fetch(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${val}`)
    .then(res => res.json())
    .then(data => dispatch({
      type: 'GET_PRODUCTS_LIST',
      data: data.data
    }))
  }
}

export default actions;