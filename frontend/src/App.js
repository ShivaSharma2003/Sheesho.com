import "./App.css";
import NavBar from "./Containers/NavBar";
import Footer from "./Containers/Footer";
import HomeScreen from "./Screen/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductScreen from "./Screen/ProductScreen";
import CartScreen from "./Screen/CartScreen";
import Signupscreen from "./Screen/SignupScreen";
import LoginScreen from "./Screen/LoginScreen";
import AddressScreen from "./Screen/AddressScreen";
import PaymentScreen from "./Screen/PaymentScreen";
import OrderSummaryScreen from "./Screen/OrderSummaryScreen";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/product/:id" element={<ProductScreen />} />
            <Route exact path="/checkout/cart" element={<CartScreen />} />
            <Route exact path="/checkout/address" element={<AddressScreen />} />
            <Route exact path="/checkout/payment" element={<PaymentScreen />} />
            <Route
              exact
              path="/checkout/summary"
              element={<OrderSummaryScreen />}
            />
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
