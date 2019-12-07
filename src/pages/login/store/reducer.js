import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'


const defaultState = fromJS({
  login: false,

})


export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHECK_LOGIN:
      return state.set('login', fromJS(action.data))
      case actionTypes.LOGIN_OUT:
        return state.set('login',fromJS(action.data))


    default: return state
  }
}