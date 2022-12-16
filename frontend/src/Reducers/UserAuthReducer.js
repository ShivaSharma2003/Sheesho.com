import {
  User_Singup_Request,
  User_Singup_Success,
  User_Singup_Fails,
  User_Login_Request,
  User_Login_Success,
  User_Login_Fails,
  Get_User_Request,
  Get_User_Success,
  Get_User_Fails,
  Logout_user
} from "../Constant/UserAuthConstant";

const UserSignUpReducer = (state = { User: {}, success: false }, action) => {
  switch (action.type) {
    case User_Singup_Request:
      return { loading: true };
    case User_Singup_Success:
      return { loading: false, User: action.payload, success: true };
    case User_Singup_Fails:
      return { loading: false, error: action.error };
    default:
      return state;
  }
};

const UserLoginReducer = (
  state = { LoggedInUser: {}, success: false },
  action
) => {
  switch (action.type) {
    case User_Login_Request:
      return { loading: true };
    case User_Login_Success:
      return { loading: false, success: true, LoggedInUser: action.payload };
    case User_Login_Fails:
      return { loading: false, error: action.error };
    case Logout_user:
      return {}
    default:
      return state;
  }
};

const UserDetailsReducer = (
  state = { UserDetails: {}, success: false },
  action
) => {
  switch (action.type) {
    case Get_User_Request:
      return { loading: true };
    case Get_User_Success:
      return { loading: false, success: true, UserDetails: action.payload };
    case Get_User_Fails:
      return { loading: false, UserDetails: action.error };
    default:
      return state;
  }
};

export {
  UserLoginReducer,
  UserSignUpReducer,
  UserDetailsReducer,
};
