//Displays the Navigation Menu at the Top of all Routes
import { NavLink } from "react-router-dom";
import { useAuth } from "../App";
const Navigation = () => {
  const { onLogout, TOKEN } = useAuth();
  return (
    <nav>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "white" } : { color: "black" }
        }
        className="Navigate"
        to="/home"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "white" } : { color: "black" }
        }
        className="Navigate"
        to="/dashboard"
      >
        Dashboard
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "white" } : { color: "black" }
        }
        className="Navigate"
        to="/history"
      >
        Account_History
      </NavLink>
      {TOKEN && (
        <button type="button" className="Navigate" onClick={onLogout}>
          Sign Out
        </button>
      )}
    </nav>
  );
};

export default Navigation;
