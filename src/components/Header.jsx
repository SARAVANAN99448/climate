import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the page title based on pathname
  const getPageTitle = () => {
    const path = location.pathname;
    if (path.includes("/home")) return "Home";
    if (path.includes("/customers")) return "Customers";
    if (path.includes("/devices")) return "Devices";
    if (path.includes("/dashboard") || path.includes("/admin")) return "Dashboard";
    return "Dashboard"; // default fallback
  };

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);

    // If user is logged in and on login page (or root), navigate to /home
    if (currentUser && (location.pathname === "/" || location.pathname === "/login")) {
      navigate("/home");
    }
  });

  return () => unsubscribe();
}, [navigate, location.pathname]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      alert("Error logging out: " + error.message);
    }
  };

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <header className="flex justify-between items-center bg-[#305680] text-white p-4 border-b">
      <h1 className="text-2xl font-semibold">{getPageTitle()}</h1>

      <div className="flex items-center gap-4">
        {user && (
          <div className="flex items-center gap-3">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover border"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold">
                {user.displayName ? user.displayName[0] : "U"}
              </div>
            )}
            <span>{user.displayName || user.email}</span>
          </div>
        )}

        {user ? (
          <button
            onClick={handleLogout}
            className="border px-3 py-1 rounded cursor-pointer hover:bg-white hover:text-[#305680] transition"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="border px-3 py-1 rounded cursor-pointer hover:bg-white hover:text-[#305680] transition"
          >
            Sign In
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
