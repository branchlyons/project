import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'


const defaultState = fromJS({
    topicList: [],
    ListList: [],
    picList: [],
    ListPage: 1,
    showScroll: false
})

const changeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        ListList: fromJS(action.ListList),
        picList: fromJS(action.picList)
    })
}
const addList = (state, action) => {
    return state.merge({
        ListList: state.get('ListList').concat(action.List),
        ListPage: action.nextPage
    });
}


export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_DATA:
            return changeData(state, action)
        case actionTypes.ADD_LIST:
            return addList(state, action)
        case actionTypes.SHOW_TOP:
            return state.set('showScroll', action.status)

        default: return state
    }
}