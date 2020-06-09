import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";

const types = {
  ADD_HISTORY: "ADD_HISTORY",
  GET_HISTORY: "GET_HISTORY",
  ERROR: "ERROR",
};

interface states {
  histories: string[];
  history: null;
  error: null;
}

interface historyInterface {
  title: string;
  link: string;
  userId?: number;
}

export const HistoryContext = createContext<any>(null);

const initialState = {
  histories: [],
  history: null,
  error: null,
};

const reducer = (state: states, action: any) => {
  switch (action.type) {
    case types.ADD_HISTORY:
      return {
        ...state,
        history: action.payload,
      };
    case types.GET_HISTORY:
      return {
        ...state,
        histories: action.payload,
      };
    case types.ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

const LINK_URL = "https://save-url.herokuapp.com/api/v1/history";
// const LINK_URL = "http://localhost:5000/api/v1/history";

export const HistoryProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addHistory = async (history: historyInterface) => {
    try {
      const token: any = sessionStorage.getItem("link_token");
      const response = await axios.post(LINK_URL, history, {
        headers: {
          "Content-type": "application/json",
          auth: JSON.parse(token),
        },
      });
      dispatch({ type: types.ADD_HISTORY, payload: response.data.data });
    } catch (error) {
      dispatch({ type: types.ERROR, payload: error.response });
    }
  };
  const getHistories = async () => {
    try {
      const token: any = sessionStorage.getItem("link_token");
      const response = await axios.get(LINK_URL, {
        headers: {
          "Content-type": "application/json",
          auth: JSON.parse(token),
        },
      });
      dispatch({ type: types.GET_HISTORY, payload: response.data.data.data });
    } catch (error) {
      dispatch({ type: types.ERROR, payload: error.response });
    }
  };

  useEffect(() => {
    getHistories();
  }, []);

  return (
    <HistoryContext.Provider
      value={{
        addHistory,
        getHistories,
        histories: state.histories,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};
