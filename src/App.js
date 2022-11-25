import Background from "components/Shared/Theme/Background/Background";
import { ThemeProvider } from "components/Shared/ThemeContext/ThemeContext";
import ToastArea from "components/Reusable/ToastArea";
import AuthNavbar from "components/Shared/Navbar/AuthNavbar";
import { userLoggedIn } from "features/auth/authSlice";
import ForgotPassword from "pages/Auth/ForgotPassword";
import Login from "pages/Auth/Login";
import Register from "pages/Auth/Register";
import ResetPassword from "pages/Auth/ResetPassword/idex";
import Home from "pages/Home/Home";
import Profile from "pages/Profile/Profile";
import Stream from "pages/Stream";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Shared/Navbar/Navbar";
import Meet from "./pages/Meet/Meet";
const authPath = ["/login", "/register", "/forgot-password", "/reset-password"];

/**
 *@function App.jsx
 *@author Raju
 *
 **/
function App() {
  const [init, setInit] = useState(true);
  const { user, accessToken } = useSelector((state) => state.auth);

  
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    setInit(false);
    const userInfo = JSON.parse(localStorage.getItem("auth"));
    console.log({ userInfo });
    if (userInfo) {
      dispatch(userLoggedIn(userInfo));
    }
  }, []);

  if (init) return "";
  // !user ||
  if (!accessToken) {
    return (
      <ThemeProvider>
        <Background>
          <ToastArea />
          <AuthNavbar />
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/*" element={<Navigate to="/login" />} />
          </Routes>
        </Background>
      </ThemeProvider>
    );
  }

  return (
    <div >
      <ThemeProvider>
        <Background>
          <ToastArea />
          {authPath.includes(location.pathname || window?.location.pathname) ? (
            <AuthNavbar />
          ) : (
            <Navbar  />
          )}
          <Routes>
            <Route
              path="/"
              element={
                <Home  />
              }
            />
            <Route
              path="/home"
              element={
                <Home/>
              }
            />
            <Route path="/meet" element={<Meet />} />
            <Route path="/profile" element={<Profile />} />
            {/*
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      */}
            <Route path="/stream" element={<Stream />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </Background>
      </ThemeProvider>
    </div>
  );
}

export default App;
