import './App.css';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import NavbarComp from './components/NavbarComp';
import ListSession from './components/ListSession';
import CreateSession from './components/CreateSession';
import Home from './components/Home';
import Session from './components/Session';


function App() {
  
    return (
      <div class="container">
        <Router>

          <NavbarComp />

          <Switch>
          
            <Route exact path="/create">
              <CreateSession />
            </Route>
            <Route exact path="/list">
              <ListSession />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>

            <Route exact path='/session/:id' component={Session} />

            <Route path="/">
              <Home />
            </Route>
          </Switch>


        </Router>
      </div>
    
    );
}

export default App;