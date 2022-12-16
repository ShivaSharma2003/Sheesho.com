import "./App.css";
import NavBar from "./Containers/NavBar";
import Footer from "./Containers/Footer";
import HomeScreen from "./Screen/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductScreen from "./Screen/ProductScreen";
import CartScreen from "./Screen/CartScreen";
import Signupscreen from "./Screen/SignupScreen";
import LoginScreen from "./Screen/LoginScreen";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/product/:id" element={<ProductScreen />} />
            <Route exact path="/cart" element={<CartScreen />} />
            <Route exact path="/signup" element={<Signupscreen />} />
            <Route exact path="/login" element={<LoginScreen />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
