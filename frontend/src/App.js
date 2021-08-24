import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import notFound404 from "./pages/notFound404";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import City from "./pages/City";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cities" component={Cities} />
        <Route path="/city/:id" component={City} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/notFound" component={notFound404} />
        <Redirect to="/notFound" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
