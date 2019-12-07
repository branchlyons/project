import React, { PureComponent } from 'react'
import { RecommendWrapper, RecommendItem } from '../style'
import { connect } from 'react-redux'

class Recommend extends PureComponent {

  render() {
    const { list } = this.props
    return (
      <div>
        {list.map((item) => {
          return (
            <RecommendWrapper key={item.get('id')}>
              <RecommendItem imgUrl={item.get('imgUrl')} />
            </RecommendWrapper>
          )
        })
        }
      </div>
    )
  }
}
const mapState = (state) => ({
  list: state.getIn(['home', 'picList'])
})
export default connect(mapState, null)(Recommend)