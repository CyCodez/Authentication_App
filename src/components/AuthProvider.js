import { useNavigate, useLocation } from "react-router-dom";
import { useReducer } from "react";
import useLog from "./useLog";
import { AuthContext } from "../App";
import Reducer from "./reducer";

//Provides neccessary data required by the Routes
const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const initialState = {
    token: null,
    funds: "",
    amount: "",
    phone: "",
    network: "",
    values: [],
    dash: 900000,
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const handle_Input = (e) => {
    e.preventDefault();
    dispatch({
      type: "handle_Input",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const Form_Btn = (e) => {
    e.preventDefault();
    if (state.amount === "") {
      dispatch({ type: "EMPTY_STRING" });
      return;
    }
    if (state.amount > state.dash) {
      dispatch({ type: "INSUFFICIENT" });
      return;
    }
    if (isNaN(state.amount)) {
      dispatch({ type: "NUM" });
      return;
    }
    if (state.network === "" || state.network === "select") {
      dispatch({ type: "NET" });
      return;
    }
    if (state.phone === "") {
      dispatch({ type: "NONUMBER" });
      return;
    } else {
      const date = new Date();
      const showTime =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      const suffix = {
        id: new Date().getTime().toString(),
        time: showTime,
        balance: state.dash - state.amount,
        myAmount: state.amount,
        myphone: state.phone,
        mynetwork: state.network,
      };
      dispatch({ type: "SUFFICIENT", payload: suffix });
    }
  };

  const { name, setName, handleChange, text, setText } = useLog("");

  const fakeAuth = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve("2342f2f1d131rf12"), 250);
    });

  const onLogin = async () => {
    if (name === "") {
      setText("UserName Cannot Be Empty");
      return;
    }
    if (!isNaN(name)) {
      setText("UserName Must Not be Numbers Only");
      return;
    }

    const toker = await fakeAuth();

    dispatch({ type: "Token", tok: toker });
    // setToken(toker);
    const origin = location.state?.from?.pathname || "/dashboard";
    navigate(origin);
    navigate("/dashboard");
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    setName("");
    setText("");
  };

  const value = {
    name,
    setName,
    handleChange,
    TOKEN: state.token,
    handleLogin: onLogin,
    onLogout: handleLogout,
    text,
    setText,
    FUNDS: state.funds,
    AMOUNT: state.amount,
    PHONE: state.phone,
    NETWORK: state.network,
    DASH: state.dash,
    VALUES: state.values,
    handle_Input,
    Form_Btn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
