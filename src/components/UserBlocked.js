import React, { Component } from 'react'

import Button from "@vtex/styleguide/lib/Button"

class UserBlocked extends Component {

  render() {

    return (
      <div className="w5">
        You were blocked due to suspicious activity, sorry
        <div className="mv3">
          <Button
            variation="primary"
            onClick={this.props.onLogout}
            block
          >
            Ok :(
          </Button>
        </div>
      </div>
    )
  }
}

export default UserBlocked