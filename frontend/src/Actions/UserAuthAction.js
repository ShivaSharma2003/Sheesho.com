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
import axios from "../Axios";

export const UserSignUp = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: User_Singup_Request });
    const user = {
      name: name,
      email: email,
      password: password,
    };
    const { data } = await axios.post("/user/signup", user);
    dispatch({ type: User_Singup_Success, payload: data });
  } catch (error) {
    dispatch({ type: User_Singup_Fails, error: error });
  }
};

export const UserLogin = (email, password) => async (dispatch, getstate) => {
  try {
    dispatch({ type: User_Login_Request });
    const user = {
      email: email,
      password: password,
    };
    const { data } = await axios.post("user/login", user);
    dispatch({ type: User_Login_Success, payload: data });
    localStorage.setItem("loggedInUser", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: User_Login_Fails, error: error });
  }
};

export const UserLogout = () => (dispatch) => {
    dispatch({ type: Logout_user });
    localStorage.removeItem("loggedInUser");
};

export const UserDetails = () => async (dispatch, getstate) => {};
