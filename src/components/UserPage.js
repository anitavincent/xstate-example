import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from "@vtex/styleguide/lib/Button"

class UserPage extends Component {

  render() {

    return (
      <div className="w5">
        You are in! Nothing to see here
        <div className="mv3">
          <Button
            variation="primary"
            onClick={this.props.onLogout}
            block
          >
            Logout
          </Button>
        </div>
      </div>
    )
  }
}

UserPage.propTypes = {
  onLogout: PropTypes.func,
}

export default UserPage