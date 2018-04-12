import {SET_SEARCH, FETCH_TITLES} from '../actions/action_types';

const defaultState = {
  search: "",
  titles: [],
}

export default function mmReducer(state = defaultState, action) {
  let newState;
  switch (action.type) {
    case SET_SEARCH:
      newState = Object.assign({}, state, { search: action.search });
      console.log('SET_SEARCH Action')
      return newState;
    case FETCH_TITLES:
      newState = Object.assign({}, state, { titles: action.titles });
      console.log('FETCH_TITLES Action')
      return newState;
    default:
      return state;
  }
}
