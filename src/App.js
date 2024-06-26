import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AuthLayout from "./Pages/AuthPages/AuthLayout";
import { useSelector } from "react-redux";
import Dashboard from "./Pages/AllPages/Home";
import Layout from "./Pages/AllPages/Layout";
import { Suspense } from "react";
import Transations from "./Pages/AllPages/Transations";
import Home from "./Pages/AllPages/Home";

function App() {
  const Token = useSelector((state) => state.userinfo.Token);
  const is_logged = Token !== null ? true : false;
  console.log("Token ::",Token);
  console.log("is_logged ::",is_logged);

  const AllRoutes = () => (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route
          path="/home"
          element={
            <Suspense fallback={"Loader..."}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/transactions"
          element={
            <Suspense fallback={"Loader..."}>
              <Transations />
            </Suspense>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

  const AuthRoutes = () => (
    <Routes>
      <Route path="/" element={<AuthLayout />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

  return (
    <>
      <ToastContainer />
      <Router>{is_logged ? <AllRoutes /> : <AuthRoutes />}</Router>
    </>
  );
}

export default App;
