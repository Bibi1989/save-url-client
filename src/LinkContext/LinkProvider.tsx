import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import AddLink from "../components/AddLink";

const types = {
  ADD_LINK: "ADD_LINK",
  GET_LINKS: "GET_LINKS",
  ERROR: "ERROR",
};

interface states {
  links: string[];
  link: null;
}

interface linksInterface {
  title: string;
  link: string;
  userId?: number;
}

export const LinkContext = createContext<any>(null);

const initialState = {
  links: [],
  link: null,
  error: null,
};

const reducer = (state: states, action: any) => {
  switch (action.type) {
    case types.ADD_LINK:
      return {
        ...state,
        link: action.payload,
      };
    case types.GET_LINKS:
      return {
        ...state,
        links: action.payload,
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

const LINK_URL = "http://localhost:5000/api/v1/links";

export const LinkProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addLinks = async (link: linksInterface) => {
    try {
      const token: any = sessionStorage.getItem("link_token");
      const response = await axios.post(LINK_URL, link, {
        headers: {
          "Content-type": "application/json",
          auth: JSON.parse(token),
        },
      });
      dispatch({ type: types.ADD_LINK, payload: response.data.data });
    } catch (error) {
      dispatch({ type: types.ERROR, payload: error.response });
    }
  };
  const getLinks = async () => {
    try {
      const token: any = sessionStorage.getItem("link_token");
      const response = await axios.get(LINK_URL, {
        headers: {
          "Content-type": "application/json",
          auth: JSON.parse(token),
        },
      });
      dispatch({ type: types.GET_LINKS, payload: response.data.data.data });
    } catch (error) {
      dispatch({ type: types.ERROR, payload: error.response });
    }
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <LinkContext.Provider
      value={{
        addLinks,
        getLinks,
        links: state.links,
      }}
    >
      {children}
    </LinkContext.Provider>
  );
};
