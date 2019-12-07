import axios from 'axios'
import * as actionTypes from './actionTypes'
// import { fromJS } from 'immutable'

const login = () => ({
    type: actionTypes.CHECK_LOGIN,
    data: true
})

export const checklogin = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + "&password=" + password)
            .then((res) => {
                const data = res.data.data
                if (data) {
                    dispatch(login())
                } else {
                    alert('登不上去')
                }

            })
    }
}

export const logOut = () => ({
    type: actionTypes.LOGIN_OUT,
    data: false
})