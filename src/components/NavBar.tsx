import React, { useState } from "react";
import { Menu, Input, Container } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  const [state, setState] = useState({ activeItem: "home" });

  const handleItemClick = (e: any, { name }: any) =>
    setState({ activeItem: name });
  return (
    <Container>
      <Menu secondary>
        <Menu.Item
          name='home'
          active={state.activeItem === "home"}
          onClick={() => history.push("/")}
        />
        <Menu.Menu position='right'>
          <Menu.Item
            name='login'
            active={state.activeItem === "login"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='register'
            active={state.activeItem === "register"}
            onClick={() => history.push("/register")}
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
  );
};

export default NavBar;
