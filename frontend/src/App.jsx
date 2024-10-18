import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Collection from './pages/Collection';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Orders from './pages/Orders';
import PlaceOrder from './pages/PlaceOrder';
import Product from './pages/Product';
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <h1 className="px-4 sm:px-[5vw] lg:px-[9vw]">
        <Navbar />
        <Routes>
          <Route to="/" element={<Home />} />
          <Route to="/home" element={<Home />} />
          <Route to="/about" element={<About />} />
          <Route to="/cart" element={<Cart />} />
          <Route to="/collection" element={<Collection />} />
          <Route to="/contact" element={<Contact />} />
          <Route to="/login" element={<Login />} />
          <Route to="/orders" element={<Orders />} />
          <Route to="/place-order" element={<PlaceOrder />} />
          <Route to="/product/:productId" element={<Product />} />
        </Routes>
      </h1>
    </div>
  )
}

export default App
