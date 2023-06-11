import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Offers from "./pages/offers";
import ForgotPassword from "./pages/forgotPassword";
import Header from "./components/header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
