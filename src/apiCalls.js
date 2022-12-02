import request from "./axiosConfig";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await request.post("/auth/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

export const loggedOutCall = async (dispatch) => {
  dispatch({ type: "LOGIN_SUCCESS", payload: null });
};
