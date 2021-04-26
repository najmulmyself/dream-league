import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import Header from './Component/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TeamDetails from './Component/TeamDetails/TeamDetails';
import NoMatch from './Component/NoMatch/NoMatch';

function App() {
  return (
    <div>
      {/* <Header></Header>
      <Dashboard></Dashboard> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Dashboard></Dashboard>
          </Route>
          <Route path="/team/:teamId">
            <TeamDetails></TeamDetails>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
