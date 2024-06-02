import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import { UserProvider } from "./context/UserContext/UserState";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import { ProductProvider } from "./context/ProductContext/ProductState";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <ProductProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/register" element={<Register />} />
              
            </Routes>
            <Footer />
          </ProductProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;