// -- React and related libs
import React from "react";
import { Switch, Route, Redirect } from "react-router";

// -- Custom Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LandingPage from "../LandingPage/LandingPage";
import InsertPatient from "../Insert/InsertPatient";
import SeeAllPatient from "../Result/seeAllPatient";

const Layout = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/dashboard" />} />
        <Route path="/dashboard" exact component={LandingPage} />
        <Route path="/InsertPatient" component={InsertPatient} />
        <Route path="/seeAllPatient" component={SeeAllPatient} />
      </Switch>
      <Footer />
    </>
  );
};

export default Layout;
