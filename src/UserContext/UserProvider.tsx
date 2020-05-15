import React, { createContext, useReducer } from "react";
import axios from "axios";

const types = {
  REGISTER: "REGISTER",
  LOGIN: "LOGIN",
};

interface states {
  register: null;
  login: null;
}

interface userInterface {
  username: string;
  email: string;
  password: string;
}

export const UserContext = createContext<any>(null);

const initialState = {
  register: null,
  login: null,
};

const reducer = (state: states, action: any) => {
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

    default:
      return state;
  }
};

const USER_URL = "http://localhost:5000/auth/v1";

export const UserProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const registerUser = async (user: userInterface) => {
    const response = await axios.post(`${USER_URL}/register`, user, {
      headers: {
        "Content-type": "application/json",
      },
    });
    console.log(response.data.data.token);
    sessionStorage.setItem(
      "link_token",
      JSON.stringify(response.data.data.token)
    );
    dispatch({ type: types.REGISTER, payload: response.data.data });
  };

  return (
    <UserContext.Provider
      value={{
        registerUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
