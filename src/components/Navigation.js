//Displays the Navigation Menu at the Top of all Routes
import { NavLink } from "react-router-dom";
import { useAuth } from "../App";
const Navigation = () => {
  const { onLogout, TOKEN, setName } = useAuth();
  return (
    <nav>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "white" } : { color: "black" }
        }
        className="Navigate"
        to="/home"
        onClick={() => setName((name) => (name = ""))}
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "white" } : { color: "black" }
        }
        className="Navigate"
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "white" } : { color: "black" }
        }
        className="Navigate"
        to="/dashboard"
      >
        Airtime
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "white" } : { color: "black" }
        }
        className="Navigate"
        to="/Transfer"
      >
        Transfer
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
