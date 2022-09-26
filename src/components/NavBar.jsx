import React from "react";
import { useContext } from "react";
import { Container, Button, Navbar } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";
import Context from "../utils/context";

const NavBar = (props) => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    console.log(user.isAuth);
    localStorage.removeItem("token");
    navigate(LOGIN_ROUTE);
  };
  if (user.isAuth) {
    console.log(user.isAuth);
    return (
      <Container
        className="d-flex flex-column flex-shrink-0 p-3 bg-dark"
        style={{ width: "20%" }}
      >
        <Navbar></Navbar>
        <Button
          variant={"primary"}
          className="mx-3"
          onClick={() => {
            logOut();
          }}
        >
          Выход
        </Button>
      </Container>
    );
  } else {
    <Container />;
  }
};

export default NavBar;
