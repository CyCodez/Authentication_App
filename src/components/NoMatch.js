//Displays when you try to access an Invalid Route
import { Link } from "react-router-dom";
const NoMatch = () => {
  return (
    <div>
      <h1 className="error_msg">Error 404</h1>
      <h2 className="error_msg">Page Not Found</h2>
      <Link className="nested_route" to="/dashboard">
        dashboard
      </Link>
    </div>
  );
};

export default NoMatch;
