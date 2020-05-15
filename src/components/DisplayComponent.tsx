import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { Icon, Button, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

interface linkInterface {
  id: number;
  title: string;
  link: string;
}

const DisplayComponent = ({ links, title = "Url" }: any) => {
  return (
    <Container>
      <Header style={{ padding: "1em" }}>Your {title} Links</Header>
      <Ul>
        {links.map((link: linkInterface) => (
          <Li key={link.id}>
            <div>
              <h2>
                <Icon name='bookmark' /> {link.title}
              </h2>
              <Flex>
                <p>
                  <Icon name='unlinkify' /> {link.link}
                </p>
                <a href={link.link} target='blank'>
                  <Button>Go To Site</Button>
                </a>
              </Flex>
            </div>
          </Li>
        ))}
      </Ul>
    </Container>
  );
};

export default DisplayComponent;

const Container = styled.div``;
const Ul = styled.ul`
  list-style: none;
`;
const Li = styled.li`
  padding: 1em;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.5em;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
