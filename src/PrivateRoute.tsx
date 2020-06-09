import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      render={(props) => {
        return sessionStorage.link_token ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        );
      }}
    />
  );
};

export default PrivateRoute;
