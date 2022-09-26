// import Pages from "./pages";
import { observer } from "mobx-react-lite";
import Context from "./utils/context";
import { Check } from "./http/userApi";
import { Container, Spinner } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "./components/Loading";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   Check()
  //     // .catch((e) => {
  //     //   console.log(e);
  //     // })
  //     .then((data) => {
  //       user.setUser(true);
  //       user.setIsAuth(true);
  //     })
  //     .finally(() => setLoading(false));
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <BrowserRouter>
      {/* <Pages /> */}
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
