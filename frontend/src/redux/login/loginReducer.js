import { loginActionConstants } from "./actionTypes";

const initialState = {
  loggedin: localStorage.getItem("logg"),
  emailerror: "",
  passworderror: "",
};

const loginReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case loginActionConstants.LOGIN_INITIATE: {
      return {
        ...state,
        loggedin: payload,
      };
    }

    case loginActionConstants.LOGIN_SUCCESS: {
      return {
        ...state,
        loggedin: payload,
      };
    }

    case loginActionConstants.EMAIL_ERROR: {
      return {
        ...state,
        emailerror: payload,
      }
    }

    case loginActionConstants.PASSWORD_ERROR: {
      return {
        ...state,
        passworderror: payload,
      }
    }

    default: {
      return state;
    }
  }
};

export default loginReducer;
