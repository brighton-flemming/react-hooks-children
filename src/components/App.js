import React from "react";
import Container from "./Container";

function App() {
  return (
    <div className="App">
      <Container header="Teenage Mutant Ninja Turtles" direction="horizontal">
        <div>Leonardo</div>
        <div>Raphael</div>
        <div>Donatello</div>
        <div>Michelangelo</div>
        {/* <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div> */}
      </Container>
      <Container header="The Turtles" textPosition="center">
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
      </Container>
    </div>
  );
}

export default App;
