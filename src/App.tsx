import Homepage from './pages/homepage/homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/backoffice/login';
import Dashboard from './pages/backoffice/dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/backoffice" exact component={LoginPage} />
        <Route path="/backoffice/dashboard" exact component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
