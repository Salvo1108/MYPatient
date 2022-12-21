import "./App.css";
// -- React and related libs
import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";

// -- Custom Components
import Login from "./components/Login/Login";
import Layout from "./components/Layout/Layout";
import { ToastContainer } from "react-toastify";

const App = () => {
  const { isAuthenticated } = useSelector((store) => store.auth);

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Switch>
          {!isAuthenticated ? (
            <>
              <Route path={["/", "/login"]} component={Login} />
            </>
          ) : (
            <>
              <Route path={["/", "/dashboard"]} component={Layout} />
              <Route
                path={"/login"}
                exact
                render={() => <Redirect to="/dashboard" />}
              />
            </>
          )}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
