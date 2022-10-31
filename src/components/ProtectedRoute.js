//Provides Protection for Routes that should be access only when Authenticated
import { useAuth } from "../App";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { TOKEN } = useAuth();
  const location = useLocation();
  if (!TOKEN) {
    return <Navigate to="/home" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
