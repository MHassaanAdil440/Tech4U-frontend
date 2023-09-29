import React from "react";
import { Link } from "react-router-dom";
// import { Container, Nav, Navbar as Bootstrapnavbar} from "react-bootstrap";

const Navbar = () => {
  return (
    // <Navbar bg="dark" data-bs-theme="dark">
    //     <Container>
    //         <Navbar.Brand >Tech4U</Navbar.Brand>
    //         <Nav>
    //             <Nav.Link>Home</Nav.Link>
    //             <Nav.Link>Add Product</Nav.Link>
    //             <Nav.Link>Update Product</Nav.Link>
    //             <Nav.Link>Profile</Nav.Link>
    //         </Nav>
    //     </Container>
    // </Navbar>

    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add Product</Link>
        </li>
        <li>
          <Link to="/update">Update Product</Link>
        </li>
        <li>
          <Link to="/logout">Log out</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
