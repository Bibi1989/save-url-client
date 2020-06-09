import React, { useState, useEffect } from "react";
import { Menu, Input, Container } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  const history = useHistory();
  const [state, setState] = useState({ activeItem: "home" });
  const [change, setChange] = useState(false);

  useEffect(() => {
    setState({ activeItem: state.activeItem });
  }, [change]);

  const handleItemClick = (e: any, { name }: any) =>
    setState({ activeItem: name });
  return (
    <div>
      <Container>
        <Menu secondary style={{ color: "#fff !important" }}>
          <Menu.Item
            name='home'
            active={state.activeItem === "home"}
            onClick={() => history.push("/")}
          />
          <Menu.Menu position='right'>
            {!sessionStorage.link_token ? (
              <>
                <Menu.Item
                  name='login'
                  active={state.activeItem === "login"}
                  onClick={() => {
                    setChange(!change);
                    history.push("/login");
                  }}
                />
                <Menu.Item
                  name='register'
                  active={state.activeItem === "register"}
                  onClick={() => history.push("/register")}
                />
              </>
            ) : (
              <Menu.Item
                name='logout'
                active={state.activeItem === "logout"}
                onClick={() => {
                  setChange(!change);
                  sessionStorage.removeItem("link_token");
                  history.push("/login");
                }}
              />
            )}
          </Menu.Menu>
        </Menu>
      </Container>
    </div>
  );
};

export default NavBar;
