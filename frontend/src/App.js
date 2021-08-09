import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Cities from './pages/Cities'
import notFound404 from './pages/notFound404'
import { Route, BrowserRouter,Switch,Redirect } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/Cities" component={Cities}/>
    <Route path="/notFound" component={notFound404}/>
    <Redirect to="/notFound"/>
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
