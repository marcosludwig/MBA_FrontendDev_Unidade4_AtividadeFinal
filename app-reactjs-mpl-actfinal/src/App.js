import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import NotFound from './pages/NotFound'
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/' element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          }/>
          <Route path="/add-user" element={
            <ProtectedRoute>
              <AddUser/>
            </ProtectedRoute>
          }/>
          <Route path="/edit-user/:id" element={
            <ProtectedRoute>
              <EditUser/>
            </ProtectedRoute>
          }/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;