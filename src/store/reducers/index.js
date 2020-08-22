const initState = {
  products: []
}

function rootReducer(state = initState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS_LIST':
      return {
        ...state,
      }

    default: return state;
  }
}

export default rootReducer;