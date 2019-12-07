import React, { PureComponent } from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import {Link} from 'react-router-dom'

class List extends PureComponent {

  render() {
    const { list, handleLoadMore, page } = this.props
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <Link key={index} to={'./detail/'+item.get('id')}>
                <ListItem >
                  <img alt='' className='List-pic' src={item.get('imgUrl')} />
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => handleLoadMore(page)}>更多文字</LoadMore>
      </div>
    )
  }
}
const MapState = (state) => ({
  list: state.getIn(['home', 'ListList']),
  page: state.getIn(['home', 'ListPage'])
})
const MapDispatch = (dispatch) => ({
  handleLoadMore(page) {
    dispatch(actionCreators.loadMore(page))
  }
})
export default connect(MapState, MapDispatch)(List)