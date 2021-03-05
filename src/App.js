import Header from './header'
import Sidebar from './sidebar'
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import User from './pages/user'
import DelUser from './pages/user/deluser'
import EditUser from './pages/user/edituser'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function UserDashboard() {
  return (
    <>
      <Header />
      <Sidebar />
      <Switch>
        <Route path="/home">
          <Dashboard />
        </Route>
        <Route exact path="/user/:id">
          <User />
        </Route>
        <Route exact path="/edit/:id">
          <EditUser />
        </Route>
        <Route exact path="/del/:id">
          <DelUser />
        </Route>
      </Switch>
    </>
  )
}

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="*">
            <UserDashboard />
          </Route>
        </Switch>

      </Router>
    </>
  );
}

export default App;
