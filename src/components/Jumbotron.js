import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";

const Jumbotron = () => {
  return (
    <Jumbo fluid className="jumbo">
      <div className="overlay">
        <Container>
          <h1>Welcome</h1>
          <p>Hello Sayan!!</p>
        </Container>
      </div>
    </Jumbo>
  );
};

export default Jumbotron;
