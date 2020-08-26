import axios from "axios";
import { REGISTER_SUCCESS, USER_LOADED, LOGIN_SUCCESS, LOGOUT } from "./type";
import { URL } from "./baseurl";

export function register(el) {
  console.log(el);
  return (dispatch) =>
    axios
      .post(URL + "Antica/auth/register", el, { withCredentials: true })
      .then((res) => dispatch({ type: REGISTER_SUCCESS, payload: res.data }))
      .catch((err) => alert("Créez un compte"));
}

export function login(el) {
  return (dispatch) =>
    axios
      .post(URL + "Antica/auth/login", el, { withCredentials: true })
      .then(
        (res) =>
         { 
        dispatch(getUser(), console.log(res.data))}
      )
      .catch((err) => alert("Créez un compte"));
}
export const getUser = () => async (dispatch) => {
  try {
    const res = await axios.get(URL + "Antica/auth/profil", {
      withCredentials: true,
    });
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
export function logout() {
  return () =>
    axios
      .post(URL + "Antica/auth/logout", {}, { withCredentials: true })
      .then((rep) => {
        console.log(rep.data);
        if (rep.data === "token deleted") {
          window.location.href = "/";
        }
      })
      .catch((err) => console.log(err));
}
