import React from "react";
import { useContext } from "react";
import { Container, Button, Navbar, NavLink, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
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
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <a
          style={{ color: "white" }}
          target="_blank"
          href="https://www.sibsiu.ru/"
        >
          СибГИУ
        </a>
        {user.isAuth ? (
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink>Тест авторизован</NavLink>
            </Nav.Link>
          </Nav>
        ) : (
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink>Тест не авторизован</NavLink>
            </Nav.Link>
          </Nav>
        )}{" "}
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
