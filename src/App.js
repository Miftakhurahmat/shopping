import { BrowserRouter, Route } from "react-router-dom";
// import NavigationBar from './components/NavigationBar';
import { Routes } from "react-router-dom";
import LoginPages from "./pages/LoginPages";
import UpdatePages from "./pages/UpdatePages";
import HomePages from "./pages/HomePages";
import RekapPages from "./pages/RekapPages";
import CartPages from "./pages/CartPages";
import DetailProductPages from "./pages/DetailProductPages";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/organisms/Navbar";

function App() {
  window.onscroll = () => {
    const header = document.getElementById("navbar");
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/home" element={<HomePages />} />
          <Route
            path="/update"
            element={
              <ProtectedRoute>
                <UpdatePages />
              </ProtectedRoute>
            }
          />
          <Route
            path="/rekap"
            element={
              <ProtectedRoute>
                <RekapPages />
              </ProtectedRoute>
            }
          />
          <Route path="/cart" element={<CartPages />} />
          <Route path="/product/:id" element={<DetailProductPages />} />
          {/* <Route 
        path='/cart'
        elemen={
        <ProtectedRoute>
        <CartPages/>
        </ProtectedRoute>
      }>
      </Route> */}

          <Route path="/login" element={<LoginPages />} />
          <Route path="*" element={<h1>Pages not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
