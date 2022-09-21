import request from "./axiosConfig"

export const loginCall = async (userCredentials, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await request.post("/auth/login", userCredentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
  };
  