import React, { useState } from "react"

import Email from "./components/Email"
// import loginMachine from "./LoginMachine"

// import { interpret } from "xstate/lib/interpreter"
import PasswordLogin from "./components/PasswordLogin"
import TokenLogin from "./components/TokenLogin"
import ForgotPassword from "./components/ForgotPassword"
import UserPage from "./components/UserPage"
import UserBlocked from "./components/UserBlocked"

function App() {

  const sendEvent = event => {
  }

  const handlers = {
    onLoginWithPassword: () => {},
    onLoginWithToken: () => {},
    onBlockUser: () => {},
    onLogin: () => {},
    onForgotPassword: () => {},
    onLogout: () => {},
    onClickBack: () => {}
  }

  const componentsByState = {
    email: props => <Email {...props} />,
    password_login: props => <PasswordLogin {...props} />,
    token_login: props => <TokenLogin {...props} />,
    forgot_password: props => <ForgotPassword {...props} />,
    user_page: props => <UserPage {...props} />,
    user_blocked: props => <UserBlocked {...props} />
  }

  return (
    <div className="vh-100 bg-light-silver flex flex-column justify-center">
      <div className="w5 center">
        <div className="f3 tc mv7">Anita's Fan Club</div>
        Hello welcome.
      </div>
    </div>
  )
}

export default App
