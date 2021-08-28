import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import notFound404 from "./pages/notFound404";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import City from "./pages/City";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { connect } from "react-redux";
import userActions from "./redux/actions/userActions";
import React, { useEffect } from 'react'

const App = (props) => {
   
   useEffect(() => {
    if (localStorage.getItem("token")) {
      props.anticipateLogInLS(localStorage.getItem("token"),localStorage.getItem("name"),localStorage.getItem("url"))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cities" component={Cities} />
        <Route path="/city/:id" component={City} />
        {!props.token && <Route path="/signin" component={SignIn} />}
        {!props.token && <Route path="/signup" component={SignUp} />}
        <Route path="/notFound" component={notFound404} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
    url:state.user.url,
    name:state.user.name
  };
};

const mapDispatchToProps = {
  anticipateLogInLS: userActions.anticipateLogInLS,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
