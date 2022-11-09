import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import { Routes } from 'react-router-dom';
import LoginPages from './pages/LoginPages';
import UpdatePages from './pages/UpdatePages';
import HomePages from './pages/HomePages';
import RekapPages from './pages/RekapPages';
import CartPages from './pages/CartPages';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/home' element={<HomePages />} />
          <Route
            path='/update'
            element={
              <ProtectedRoute>
                <UpdatePages />
              </ProtectedRoute>
            }
          />
          <Route
            path='/rekap'
            element={
              <ProtectedRoute>
                <RekapPages />
              </ProtectedRoute>
            }
          />
          <Route path='/cart' element={<CartPages />} />
          {/* <Route 
        path='/cart'
        elemen={
        <ProtectedRoute>
        <CartPages/>
        </ProtectedRoute>
      }>
      </Route> */}

          <Route path='/login' element={<LoginPages />} />
          <Route path='*' element={<h1>Pages not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
