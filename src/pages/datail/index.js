import React, { PureComponent } from 'react'
import { DetailWrapper, Header, Content } from './style'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Detail extends PureComponent {

  componentDidMount() {
    this.props.getdata(this.props.match.params.id)
  }
  render() {
    const { title, content } = this.props
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </DetailWrapper>

    )
  }
}
const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});
const mapDispatch = (dispatch) => {
  return {
    getdata(id) {
      dispatch(actionCreators.getData(id))
    }
  }
};
export default connect(mapState, mapDispatch)(withRouter(Detail))