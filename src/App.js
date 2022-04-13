import './App.css';
import Login from './components/Login';
// import Chats from './components/Chats';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// import {AuthProvider} from '../contexts/AuthContext';


function App() {
  
  return (
    <div style={{fontFamily: 'Roboto'}} className="App">
      <Router>
        {/* {AuthProvider} */}
          <Login/>
            <Switch>
                {/* <Route path="/chats" components={Chats}/> */}
                <Route path="/" components={Login} />
            </Switch>
        {/* {AuthProvider} */}
      </Router>
    </div>
  );
}

export default App;
