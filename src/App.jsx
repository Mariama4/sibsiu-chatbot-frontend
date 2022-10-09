// import Pages from "./pages";
import { observer } from "mobx-react-lite";
import Context from "./utils/context";
import { Check } from "./http/userApi";
import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Check()
      .catch((e) => {})
      .then((data) => {
        if (typeof data === "undefined") {
          user.setUser(false);
          user.setIsAuth(false);
        } else {
          user.setUser(data);
          user.setIsAuth(true);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
