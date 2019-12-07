import axios from 'axios'
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const getgetgetData = (data) => ({
  type: actionTypes.GET_DATA,
  title: fromJS(data.title),
  content: fromJS(data.content)
})
export const getData = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id='+id).then((res) => {
      const data = res.data.data
      dispatch(getgetgetData(data))
    })
  }
}