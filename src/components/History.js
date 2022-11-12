import { useAuth } from "../App";
import { Helmet } from "react-helmet-async";
import { Outlet, Link } from "react-router-dom";

const History = () => {
  const { name, ACC_VALUES, TOKEN, VALUES } = useAuth();
  return (
    <div className="dashboard">
      <Helmet>
        <title>History</title>
        <meta
          name="description"
          content="Shows All Your Transaction History and Details"
        />
        <link rel="canonical" href="/history" />
      </Helmet>
      <h2>
        Personal Information{" "}
        <span>
          <img
            src="https://thumbs.dreamstime.com/z/old-gold-key-isolated-illustration-white-background-35715349.jpg"
            alt="key_image"
            width="20px"
            height="20px"
          ></img>
        </span>
      </h2>
      <h3>{name.toUpperCase()}</h3>
      <p>
        <img
          src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1666796003~exp=1666796603~hmac=d0760793b0f2e31411822933e099c36c9b1e935427549d1084fdcce9658b115c"
          alt="Avatar"
          width="150px"
          height="150px"
        />
      </p>
      <p>Your Athentication Code Is: {TOKEN}</p>
      {console.log(ACC_VALUES)}
      {ACC_VALUES.map((vals) => {
        console.log(vals);
        return (
          <div className="avatar-div" key={vals.id}>
            <h4>TRANSFER</h4>
            <p>
              status: <span className="success">successful </span>
              <img
                src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-3/3/31-512.png"
                alt=""
                width="30px"
                height="30px"
              />
            </p>
            <p>Amount Transferred: &#8358;{vals.myAmount_account}</p>
            <p>Bank Name: {vals.myaccount_name}</p>
            <p>Acccount Number: {vals.myaccount_number}</p>
            <p>Account Balance: &#8358;{vals.balance}</p>
            <p>Account Type: {vals.myaccount_type}</p>
            <p>Time: {vals.time}</p>
          </div>
        );
      })}
      {VALUES.map((vals) => {
        console.log(vals);
        return (
          <div className="avatar-div" key={vals.id}>
            <h4>AIRTIME RECHARGE</h4>
            <p>
              status: <span className="success">successful </span>
              <img
                src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-3/3/31-512.png"
                alt=""
                width="30px"
                height="30px"
              />
            </p>
            <p>Amount Recharged: &#8358;{vals.myAmount}</p>
            <p>Phone: {vals.myphone}</p>
            <p>Network: {vals.mynetwork.toUpperCase()}</p>
            <p>Account Balance: &#8358;{vals.balance}</p>
            <p>Time: {vals.time}</p>
          </div>
        );
      })}
      <Outlet />
      <Link className="nested_route" to="nested">
        Nested
      </Link>
      <span>
        <Link className="nested_route" to="error">
          404
        </Link>
      </span>
    </div>
  );
};

export default History;
