import './App.css';
import Login from './components/Login';
import Chats from './components/Chats';
import {Routes, Route} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import {UserAuthContextProvider} from './context/AuthContext';


function App() {
  
  return (
    <div style={{fontFamily: 'Roboto'}} className="App">
        <UserAuthContextProvider> 
          <Routes>
                <Route path="/chats" element={
                <ProtectedRoute>
                    <Chats />
                </ProtectedRoute>
                } />
                <Route path="/" element={<Login />} />
          </Routes>
        </UserAuthContextProvider> 
    </div>
  );
}

export default App;
