import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { LogInWrapper, LogInBox, Input, Button } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Login extends Component {
  render() {
    const { Loginf, login } = this.props
    if (!login) {
      return (
        <LogInWrapper>
          <LogInBox>
            <Input placeholder='账号' ref={(input) => { this.acont = input }} />
            <Input placeholder='密码' type='password' ref={(input) => { this.password = input }} />
            <Button onClick={() => Loginf(this.acont, this.password)}>登录</Button>
          </LogInBox>
        </LogInWrapper>
      )
    }else{
      return <Redirect to='/'/>
    }
  }
}
const mapState = (state) => ({
  login: state.getIn(['login', 'login'])
})
const mapDispatch = (dispatch) => {
  return {
    Loginf(account, password) {
      dispatch(actionCreators.checklogin(account.value, password.value))
    }
  }
}
export default connect(mapState, mapDispatch)(Login)