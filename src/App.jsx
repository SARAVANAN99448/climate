// App.js or main component file
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/firebase"; // adjust this path if needed

import Sidebar from "./components/Slidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Customers from "./components/Customers";
import Login from "./components/Login";
import AddCustomers from "./components/Addcustomers";
import Devices from "./components/Devices";
import Home from "./components/Home";
import DeviceDashboard from "./components/DeviceDashboard";
import AddDevice from "./components/AddDevice";

function Layout() {
  const location = useLocation();
  const [user, setUser] = useState(null);

  // Pages where Sidebar/Header should be hidden
  const hideSidebarAndHeaderPaths = ["/", "/login"];
  const shouldHideHeader = hideSidebarAndHeaderPaths.includes(location.pathname);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex">
      {/* Show Sidebar only if user is logged in and not on login page */}
      {user && !shouldHideHeader && <Sidebar />}

      <div className="flex-1 flex flex-col">
        {/* Show Header only if not on login page */}
        {!shouldHideHeader && <Header />}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/addcustomers" element={<AddCustomers />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/add-device" element={<AddDevice />} />
          <Route path="/dashboard/:deviceName" element={<DeviceDashboard />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
