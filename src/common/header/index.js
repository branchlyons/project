import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { HeaderWrapper, HeaderWrapper0, Logo, Nav, SearchInfo, SearchInfoItem, SearchInfoList, SearchInfoTitle, SearchInfoSwitch, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'
import { actionCreators as loginactionCreators } from '../../pages//login/store'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Header extends Component {

  getListArea = () => {
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleChangePage, handleMouseleave } = this.props
    const newList = list.toJS();
    const pageList = []

    if (newList.length) {
      for (let i = (page * 3); i < (page + 1) * 3; i++) {
        pageList.push(
          <SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseleave} >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => { handleChangePage(page, totalPage, this.spinIcon) }}>
              <span ref={(i) => { this.spinIcon = i }} className="iconfont spin">&#xe606;</span>
              换一换
              </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const { focused, handleInputBlur, handleInputFocus, list, login, logOut } = this.props
    return (
      <HeaderWrapper0>
        < HeaderWrapper >
          <Link to='/'>
            <Logo />
          </Link>
          <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载</NavItem>
            {
              login ?
                <NavItem onClick={logOut} className='right'>登出</NavItem> :
                <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
            }

            <NavItem className='right'>
              <span className="iconfont">&#xe636;</span>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                in={focused}
                timeout={200}
                classNames='slide'
              >
                <NavSearch
                  className={focused ? 'focused' : ''}
                  onFocus={() => { handleInputFocus(list) }}
                  onBlur={handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60a;</span>
              {this.getListArea()}
            </SearchWrapper>
            <Addition>
              <Link to='/write'><Button className='writting'>
                <span className="iconfont">&#xe600;</span>写文章
              </Button>
              </Link>
              <Button className='reg'>注册</Button>
            </Addition>
          </Nav>
        </HeaderWrapper>
      </HeaderWrapper0>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login', 'login'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFoucs())
    },
    logOut() {
      dispatch(loginactionCreators.logOut())
    },
    handleInputBlur() {

      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseleave() {
      dispatch(actionCreators.mouseleave())
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';


      if (page < totalPage) {
        dispatch(actionCreators.changepage(page + 1))
      } else {
        dispatch(actionCreators.changepage(0))
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)