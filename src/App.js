import React, { useState } from "react"

import Email from "./components/Email"
import loginMachine from "./LoginMachine"

import { interpret } from "xstate/lib/interpreter"
import PasswordLogin from "./components/PasswordLogin"
import TokenLogin from "./components/TokenLogin"
import ForgotPassword from "./components/ForgotPassword"
import UserPage from "./components/UserPage"
import UserBlocked from "./components/UserBlocked"

function App() {
  const [currentState, setCurrentState] = useState("email")
  const [loginService] = useState(interpret(loginMachine))
  loginService.start()

  const sendEvent = event => {
    loginService.send(event)
    setCurrentState(loginService.state.value)
  }

  const handlers = {
    onLoginWithPassword: () => sendEvent("CHOOSE_PASSWORD"),
    onLoginWithToken: () => sendEvent("CHOOSE_TOKEN"),
    onBlockUser: () => sendEvent("BLOCK_USER"),
    onLogin: () => {
      sendEvent("LOGIN_SUCCESS")
      sendEvent("SET_PASSWORD_SUCCESS")
    },
    onForgotPassword: () => sendEvent("FORGOT_PASSWORD"),
    onLogout: () => sendEvent("LOGOUT"),
    onClickBack: () => sendEvent("BACK")
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
        {
          componentsByState[currentState](handlers)
        }
      </div>
    </div>
  )
}

export default App
