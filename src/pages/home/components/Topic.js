import React, { PureComponent } from 'react'
import { TopicWrapper, TopicItem, MoreTopic } from '../style'
import { connect } from 'react-redux'

class Topic extends PureComponent {

  render() {
    const {TopicList}=this.props
    return (
      <TopicWrapper>
        {
          TopicList.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                <img  alt='' className='topic-pic' src={item.get('imgUrl')} />
                {item.get('title')}
            </TopicItem>
            )
          })
        }
        <MoreTopic>更多热门专题>></MoreTopic>
      </TopicWrapper>
    )
  }
}
const mapState = (state) => ({
  TopicList: state.getIn(['home', 'topicList'])
})

export default connect(mapState, null)(Topic)