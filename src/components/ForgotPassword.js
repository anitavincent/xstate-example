import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Input from "@vtex/styleguide/lib/Input"
import Button from "@vtex/styleguide/lib/Button"

class ForgotPassword extends Component {

  state = {
    password: '',
    password2: '',
  }

  render() {
    return (
      <div className="w5">
        <div className="mv3">
          <Button
            variation="tertiary"
            size="small"
            onClick={this.props.onClickBack}
          >
            {'<  Back'}
          </Button>
        </div>
        <div className="mv3">
          <div className="ma2 dark-gray">
            Enter your new password
          </div>
          <Input
            type="password"
            onChange={e => this.setState({ password: e.target.value })}
            value={this.state.password}
          />
        </div>
        <Input
          type="password"
          onChange={e => this.setState({ password2: e.target.value })}
          value={this.state.password2}
          placeholder="Confirm password"
        />
        <div>
          <div className="mv3">
            <Button
              variation="primary"
              onClick={this.props.onLogin}
              block
            >
              Create new password
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

ForgotPassword.propTypes = {
  onClickBack: PropTypes.func,
  onLogin: PropTypes.func,
}

export default ForgotPassword