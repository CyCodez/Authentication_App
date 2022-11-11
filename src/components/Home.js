import { useAuth } from "../App";
import { Helmet } from "react-helmet-async";
import { useEffect, useRef } from "react";

const Home = () => {
  const { handleLogin, name, handleChange, text } = useAuth();
  const myuseref = useRef(null);
  useEffect(() => {
    myuseref.current.focus();
  }, []);
  window.scrollTo(300, 1000);

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
      <h2 className="bing">To Begin, You Must Sign in with your UserName:</h2>
      <input
        ref={myuseref}
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
