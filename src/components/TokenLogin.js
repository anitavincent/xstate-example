import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Input from "@vtex/styleguide/lib/Input"
import Button from "@vtex/styleguide/lib/Button"

class TokenLogin extends Component {

  state = {
    token: '',
    numberOfTries: 0,
  }

  handleLogin = () => {
    if (this.state.token === '123456') {
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
          Check your email
        </div>
        <Input
          onChange={e => this.setState({ token: e.target.value })}
          value={this.state.token}
          placeholder="enter token"
          token
        />
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
              onClick={this.props.onLoginWithPassword}
              block
            >
              Use Password Instead
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

TokenLogin.propTypes = {
  onLogin: PropTypes.func,
  onLoginWithPassword: PropTypes.func,
  onBlockUser: PropTypes.func,
}

export default TokenLogin