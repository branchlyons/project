import axios from 'axios'
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'


const getgetData = (data) => ({
  type: actionTypes.CHANGE_DATA,
  topicList: data.topicList,
  ListList: data.ListList,
  picList: data.picList
})
const addHomeList = (data,nextPage) => ({
  type: actionTypes.ADD_LIST,
  List: fromJS(data),
  nextPage:fromJS(nextPage)
})

export const getData = () => {
  return (dispatch) => {
    axios.get('./api/home.json').then((res) => {
      const data = res.data.data;
      dispatch(getgetData(data))
    })
  }
}
export const loadMore = (page) => {  
  return (dispatch) => {
    axios.get('./api/homelist.json?page='+page).then((res) => {
      const data = res.data.data;
      dispatch(addHomeList(data,page+1))
    })

  }
}
export const showTop=(status)=>({
      type: actionTypes.SHOW_TOP,
      status
})
