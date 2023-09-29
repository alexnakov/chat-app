import './App.scss';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const currentUser = useContext(AuthContext)

  console.log(currentUser, "22")
  console.log(currentUser.currentUser)

  const ProtectedRoute = ({children}) => {
    if (currentUser.currentUser === null) {
      return (<Navigate to="login" />)
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
