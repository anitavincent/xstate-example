import { Machine } from 'xstate'

const loginMachine = Machine({
  id: "loginMachine",
  initial: "email",
  states: {
    email: {
      on: {
        CHOOSE_PASSWORD: "password_login",
        CHOOSE_TOKEN: "token_login",
      }
    },
    token_login: {
      on: {
        BLOCK_USER: "user_blocked",
        LOGIN_SUCCESS: "user_page",
        CHOOSE_PASSWORD: "password_login", 
      }
    },
    password_login: {
      on: {
        BLOCK_USER: "user_blocked",
        LOGIN_SUCCESS: "user_page",
        FORGOT_PASSWORD: "forgot_password",
        CHOOSE_TOKEN: "token_login",
      }
    },
    forgot_password: {
      on: {
        SET_PASSWORD_SUCCESS: "user_page",
        BACK: "password_login",
      },
    },
    user_page: {
      on: {
        LOGOUT: "email",
      },
    },
    user_blocked: {
      
    },
  }
})

export default loginMachine