import React, { PureComponent } from 'react'
import { HomeWrapper, HomeLeft, HomeRigth, BackTop } from "./style";
import Topic from './components/Topic'
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/writer";
import { connect } from "react-redux"
import { actionCreators } from './store'

class Home extends PureComponent {


  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeSrollTopShow)
  }
  bindEvents() {
    window.addEventListener('scroll', () => { this.props.changeSrollTopShow() })
  }
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
  render() {
    return <HomeWrapper>
      <HomeLeft>
        <img alt='' className='banner-img' src='//upload.jianshu.io/admin_banners/web_images/4808/7ece686fca11cf9350aa4db3704246f117dbba0c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
        <Topic />
        <List />
      </HomeLeft>
      <HomeRigth>
        <Recommend />
        <Writer />
      </HomeRigth>
      {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
    </HomeWrapper>
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispatch = (dispatch) => {
  return {
    changeHomeData() {
      dispatch(actionCreators.getData())
    },
    changeSrollTopShow() {
      if (document.documentElement.scrollTop > 300) {
        dispatch(actionCreators.showTop(true))
      } else {
        dispatch(actionCreators.showTop(false))
      }
    }
  }
}


export default connect(mapState, mapDispatch)(Home)