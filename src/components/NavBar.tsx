import React, { useState } from "react";
import { Menu, Input, Container } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  const [state, setState] = useState({ activeItem: "home" });

  const handleItemClick = (e: any, { name }: any) =>
    setState({ activeItem: name });
  return (
    <div style={{ background: "#999", color: "#fff !important" }}>
      <Container>
        <Menu secondary style={{ color: "#fff !important" }}>
          <Menu.Item
            name='home'
            active={state.activeItem === "home"}
            onClick={() => history.push("/")}
            style={{ background: "#999", color: "#fff !important" }}
          />
          <Menu.Menu
            position='right'
            style={{ background: "#999", color: "#fff !important" }}
          >
            <Menu.Item
              name='login'
              active={state.activeItem === "login"}
              onClick={() => history.push("/login")}
            />
            <Menu.Item
              name='register'
              active={state.activeItem === "register"}
              onClick={() => history.push("/register")}
              style={{ background: "#999", color: "#fff !important" }}
            />
            <Menu.Item
              name='logout'
              active={state.activeItem === "logout"}
              onClick={() => {
                sessionStorage.removeItem("link_token");
              }}
            />
          </Menu.Menu>
        </Menu>
      </Container>
    </div>
  );
};

export default NavBar;
