import './css/style.css';
import './css/global.css';
import './css/responsive.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/Login';
import Registration from './pages/Registration';
import Applications from './pages/Applications';
import AHSIndex from './Applications/AHS/Index';
import PPIndex from './Applications/PP/Index';

function App() {
  return (
    <Router>
      {/* <Link to="/" className="bg-blue-400 p-5 rounded-full ml-5">Login</Link>
      <Link to="/registration" className="bg-blue-400 p-5 rounded-full ml-5">Registration</Link> */}
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/registration' component={Registration} />
        <Route exact path='/applications' component={Applications} />
        <Route path="/ahs" component={AHSIndex} />
        <Route path="/pp" component={PPIndex} />
      </Switch>
    </Router>
  );
}

export default App;
