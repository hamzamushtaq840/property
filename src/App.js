import { Routes, Route } from "react-router-dom"
import './App.css';
import Missing from "./Components/Layout/Missing";
import Unauthorized from "./Components/Layout/Unauthorized";
import Layout from "./Components/Layout/Layout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Authentication from "./Components/Authentication/Authentication";
import RequireAuth from "./Components/Layout/RequireAuth";
import UserDashboard from "./Components/Dashboard/UserDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import Sell from "./Components/Sell/Sell";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >

          {/* Public Routes */}
          <Route path="/" element={<Authentication />} />

          {/* Protected Admin Routes */}
          <Route element={<RequireAuth allowedRoles={'admin'} />}>
            <Route path="AdminDashboard" element={<AdminDashboard />} />
          </Route>

          {/* Protected User Routes */}
          <Route element={<RequireAuth allowedRoles={'user'} />}>
            <Route path="UserDashboard" element={<UserDashboard />} />
            <Route path="Sell" element={<Sell />} />
          </Route>

          <Route path="*" element={<Missing />} />
          <Route path="Unauthorized" element={<Unauthorized />} />

        </Route>
      </Routes>

      <ToastContainer autoClose={2000} />

    </>
  );
}

export default App;
