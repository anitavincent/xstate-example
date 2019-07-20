import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Input from "@vtex/styleguide/lib/Input"
import Button from "@vtex/styleguide/lib/Button"

class PasswordLogin extends Component {

  state = {
    password: '',
    numberOfTries: 0,
  }

  handleLogin = () => {
    if (this.state.password === 'password') {
      this.props.onLogin()
    } else {
      if (this.state.numberOfTries >= 2) {
        console.log('User blocked')
        this.props.onBlockUser()
      }
      this.setState((state)=>({numberOfTries: state.numberOfTries+1}))
    }
  }

  render() {
    return (
      <div className="w5">
        <div className="ma2 dark-gray">
          Enter your password
        </div>
        <Input
          type="password"
          onChange={e => this.setState({ password: e.target.value })}
          value={this.state.password}
        />
        <div
          className="link c-link pointer f6"
          onClick={this.props.onForgotPassword}
        >
            Forgot my password :(
        </div>
        <div>
          <div className="mv3">
            <Button
              variation="primary"
              onClick={this.handleLogin}
              block
            >
              Login
            </Button>
          </div>
          <div className="mv3">
            <Button
              variation="tertiary"
              onClick={this.props.onLoginWithToken}
              block
            >
              Use Token Instead
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

PasswordLogin.propTypes = {
  onLogin: PropTypes.func,
  onLoginWithToken: PropTypes.func,
  onBlockUser: PropTypes.func,
  onForgotPassword: PropTypes.func,
}

export default PasswordLogin