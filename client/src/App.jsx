import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Header from "./components/layout/Header";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./components/auth/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import Listing from "./pages/Listing";
import Footer from "./components/layout/Footer";
import { useLocation } from "react-router";
import Contact from "./pages/Contact";
const App = () => {
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);
  return (
    <div className="relative   mt-0">
      {pathname !== "/signin" && pathname !== "/signup" && <Header />}

      <Routes>
        <Route index element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/listing/:listingId" element={<Listing />} />
        <Route element={<PrivateRoute />}>
          <Route path="profile" element={<Profile />} />
          <Route path="/createlisting" element={<CreateListing />} />
        </Route>
      </Routes>

      {pathname !== "/signin" && pathname !== "/signup" && <Footer />}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
