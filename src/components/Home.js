import { useAuth } from "../App";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const { handleLogin, name, handleChange, text } = useAuth();

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="This is the home page, to start you must login first"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <h2 className="recharge">Recharge From Your Bank Account</h2>
      <h2>To Begin, You Must Sign in with your UserName:</h2>
      <input
        type="text"
        className="input_user"
        value={name}
        onChange={handleChange}
      />
      <button type="button" className="sign-in" onClick={handleLogin}>
        Sign In
      </button>
      <span className="invalid">{text}</span>
    </>
  );
};

export default Home;
