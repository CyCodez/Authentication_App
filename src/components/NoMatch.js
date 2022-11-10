//Displays when you try to access an Invalid Route
import { Link } from "react-router-dom";
const NoMatch = () => {
  return (
    <div>
      <h2 className="error_msg">
        <span className="EP">o</span>oops...
      </h2>
      <img
        src="https://media.gettyimages.com/id/468164033/vector/error-404.jpg?s=2048x2048&w=gi&k=20&c=RdSTMxRpODdRsEtDcTfAHr7G1ThGS7slpnl40uvJddY="
        alt="Error Page"
        width="300px"
        height="300px"
        className="EI"
      />
      <Link className="nested_route" to="/dashboard">
        dashboard
      </Link>
    </div>
  );
};

export default NoMatch;
