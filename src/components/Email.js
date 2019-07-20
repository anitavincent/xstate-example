import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Input from "@vtex/styleguide/lib/Input"
import Button from "@vtex/styleguide/lib/Button"

class Email extends Component {

  state = {
    emailText: '',
  }

  render() {

    return (
      <div className="w5">
        <Input
          onChange={e => this.setState({ emailText: e.target.value })}
          value={this.state.emailText}
          placeholder="email here pls"
        />
        <div>
          <div className="mv3">
            <Button
              variation="primary"
              onClick={this.props.onLoginWithPassword}
              block
            >
              Use Password
            </Button>
          </div>
          <div className="mv3">
            <Button
              variation="primary"
              onClick={this.props.onLoginWithToken}
              block
            >
              Use Token
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

Email.propTypes = {
  onLoginWithPassword: PropTypes.func,
  onLoginWithToken: PropTypes.func,
}

export default Email