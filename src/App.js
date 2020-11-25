import './App.css';
import Body from './components/Body';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Cart from './components/Cart';
import Admin from './components/Admin';
import Login from './components/Login';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
      <Route path="/login">
          <Login/>
        </Route>
      <Route path="/admin">
          <Admin/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/">
          <Body/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
