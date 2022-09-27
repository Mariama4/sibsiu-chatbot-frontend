import React from "react";
import { useContext } from "react";
import { Container, Button, Navbar, Nav, NavbarBrand } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CONSTRUCTOR_ROUTE, HOME_ROUTE, LOGIN_ROUTE } from "../utils/consts";
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
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavbarBrand
          style={{ color: "white" }}
          href="https://www.sibsiu.ru/"
          target="_blank"
          rel="noreferrer"
        >
          СибГИУ
        </NavbarBrand>
        {user.isAuth ? (
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link href={HOME_ROUTE}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={CONSTRUCTOR_ROUTE}>Constructor</Nav.Link>
            </Nav.Item>
          </Nav>
        ) : (
          <Nav className="me-auto">
            {/* <Nav.Item>
              <Nav.Link href={LOGIN_ROUTE}>Не авт</Nav.Link>
            </Nav.Item> */}
          </Nav>
        )}
        {user.isAuth ? (
          <Nav style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              className="mx-3"
              onClick={() => {
                logOut();
              }}
            >
              Выход
            </Button>
          </Nav>
        ) : (
          <Nav style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => {
                navigate(LOGIN_ROUTE);
              }}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
