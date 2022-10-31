import { useAuth } from "../App";
import { Helmet } from "react-helmet-async";

const History = () => {
  const { name, VALUES, TOKEN } = useAuth();
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
      <p>Your Athentication code is {TOKEN}</p>
      {console.log(VALUES)}
      {VALUES.map((vals) => {
        console.log(vals);
        return (
          <div className="avatar-div" key={vals.id}>
            <p>Amount Recharged: &#8358;{vals.myAmount}</p>
            <p>Phone: {vals.myphone}</p>
            <p>Network: {vals.mynetwork.toUpperCase()}</p>
            <p>Account Balance: &#8358;{vals.balance}</p>
            <p>Time: {vals.time}</p>
          </div>
        );
      })}
    </div>
  );
};

export default History;
