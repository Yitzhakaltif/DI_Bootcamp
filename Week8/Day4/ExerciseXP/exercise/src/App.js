import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ErrorBoundary from "./component/ErrorBoundary";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PostList from "./component/PostList";
import Example1 from "./component/Example1";
import Example2 from "./component/Example2";
import Example3 from "./component/Example3";

const Home = () => (
  <div>
    <h1>HomePage</h1>
  </div>
);

const Profile = () => (
  <div>
    <h1>Profile page</h1>
  </div>
);

const Shop = () => {
  <div>
    <h1>Shop</h1>
  </div>
  throw new Error("OH NO");
};

const jsonData = {
  key1: "myusername",
  email: "mymail@gmail.com",
  name: "Isaac",
  lastname: "Doe",
  age: 27,
};
(async () => {
  const data = await fetch(
    "https://webhook.site/748881df-6c92-4349-abc9-8b1cb37ceb70"
  );
  console.log(data);
})();

const handleData = () => {
  fetch("http://localhost:3000/", {
    
    address:"188.161.176.82",
    method: "POST",
    mode: "cors",
    body: JSON.stringify(jsonData),
  });
};

const App = () => (
  <div>
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Exercise XP</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/shop">Shop</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <ErrorBoundary>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </ErrorBoundary>
    <hr></hr>
    <div>
      <PostList />
    </div>
    <hr></hr>
    <div>
      <Example1 />
      <Example2 />
      <Example3 />
    </div>

    <div>
      <button onClick={() => handleData()}>SEND DATA</button>
    </div>
  </div>
);

export default App;