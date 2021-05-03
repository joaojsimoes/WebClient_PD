import Homepage from './pages/homepage/homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/backoffice/login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/backoffice" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
