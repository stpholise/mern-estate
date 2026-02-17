import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn"; 
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="profile" element={<Profile />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
