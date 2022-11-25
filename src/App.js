import ToastArea from 'components/Reusable/ToastArea';
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
 *@author Azim
 *
 **/
function App() {
  const [init, setInit] = useState(true);
  const { user, accessToken } = useSelector((state) => state.auth);

  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();

  // TODO : please add localStorage for darkmode data

  // const getDarkMode = () => {
  //   const darkMode = localStorage.getItem("darkMode");
  //   if (darkMode) {
  //     setIsDarkMode(JSON.parse(darkMode));
  //   } else {
  //     setIsDarkMode(false);
  //   }
  // };

  useEffect(() => {
    setInit(false);
    const userInfo = JSON.parse(localStorage.getItem("auth"));
    console.log({ userInfo })
    if (userInfo) {
      dispatch(userLoggedIn(userInfo));
    }

    const userPref = window?.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = JSON.parse(localStorage.getItem("theme"));
    if (theme === null) {
      setIsDarkMode(userPref);
    } else {
      setIsDarkMode(theme);
    }
    // setIsDarkMode(theme);
  }, []);

  if (init) return "";
  // !user ||
  if (!accessToken) {
    return (
      <div className={isDarkMode ? "dark transition-all duration-100" : ""}>
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
      </div>
    );
  }

  return (
    <div className={isDarkMode ? "dark transition-all duration-100" : ""}>
      <ToastArea />
      {authPath.includes(location.pathname || window?.location.pathname) ? (
        <AuthNavbar />
      ) : (
        <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          }
        />
        <Route
          path="/home"
          element={
            <Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
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
    </div>
  );
}

export default App;
