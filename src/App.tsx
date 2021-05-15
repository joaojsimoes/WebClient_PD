import Homepage from './pages/homepage/homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/backoffice/login';
import Dashboard from './pages/backoffice/dashboard';
import NewDetails from './pages/backoffice/newDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/backoffice" exact component={LoginPage} />
        <Route path="/backoffice/dashboard" exact component={Dashboard} />
        <Route path="/backoffice/new/add" exact render={props => <NewDetails editing={true}/>} />
        <Route path="/backoffice/new/:id" exact render={props => <NewDetails editing={false}/>} />
      </Switch>
    </Router>
  );
}

export default App;
