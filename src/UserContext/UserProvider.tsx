import React, { createContext, useReducer } from "react";
import axios from "axios";

const types = {
  REGISTER: "REGISTER",
  LOGIN: "LOGIN",
  LOADING: "LOADING",
};

interface userInterface {
  username?: string;
  email: string;
  password: string;
}

interface IState {
  register: userInterface | null;
  login: userInterface | null;
  loading: boolean;
  error?: any;
}

export const UserContext = createContext<any>(null);

const initialState: IState = {
  register: null,
  login: null,
  loading: false,
  error: null,
};

const reducer = (state: IState, action: any) => {
  switch (action.type) {
    case types.REGISTER:
      return {
        ...state,
        register: action.payload,
      };
    case types.LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    case types.LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};

const USER_URL = "https://save-url.herokuapp.com/auth/v1";
// const USER_URL = "http://localhost:5000/auth/v1";

export const UserProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const registerUser = async (user: userInterface) => {
    const response = await axios.post(`${USER_URL}/register`, user, {
      headers: {
        "Content-type": "application/json",
      },
    });
    sessionStorage.setItem(
      "link_token",
      JSON.stringify(response.data.data.token)
    );
    dispatch({ type: types.REGISTER, payload: response.data.data });
  };

  const loginUser = async (user: userInterface, path: any) => {
    try {
      dispatch({ type: types.LOADING, payload: true });
      const response = await axios.post(`${USER_URL}/login`, user, {
        headers: {
          "Content-type": "application/json",
        },
      });
      console.log(response.data.data);
      sessionStorage.setItem(
        "link_token",
        JSON.stringify(response.data.data.token)
      );
      window.location.href = path;
      dispatch({ type: types.LOADING, payload: false });
      dispatch({ type: types.REGISTER, payload: response.data.data });
    } catch (error) {
      dispatch({ type: types.LOADING, payload: false });
    }
  };

  return (
    <UserContext.Provider
      value={{
        loading: state.loading,
        registerUser,
        loginUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
