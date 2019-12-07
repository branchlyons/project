import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'


const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 3)
})
export const searchFoucs = () => ({
  type: actionTypes.SEARCH_FOCUS
})
export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json')
      .then((res) => {
        const data = res.data.data

        dispatch(changeList(data))
      })
  }
}
export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER

})
export const mouseleave = () => ({
  type: actionTypes.MOUSE_LEAVE
})
export const changepage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page: fromJS(page)
})
