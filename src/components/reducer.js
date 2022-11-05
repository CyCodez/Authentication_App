//Provides the Required response to a specific action and condition
const Reducer = (state, action) => {
  switch (action.type) {
    case "handle_Input":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "INSUFFICIENT":
      return {
        ...state,
        funds: "Insufficient Balance",
      };
    case "SUFFICIENT":
      const newPeople = [...state.values, action.payload];
      return {
        ...state,
        funds: " ",
        values: newPeople,
        dash: state.dash - state.amount,
        amount: "",
        phone: "",
        network: "",
      };
    case "EMPTY_STRING":
      return {
        ...state,
        funds: "Please Enter An Amount",
      };
    case "Token":
      return {
        ...state,
        token: action.tok,
      };
    case "LOGOUT":
      return {
        ...state,
        token: null,
        amount: "",
        phone: "",
        network: "",
        funds: "",
      };
    case "NUM":
      return {
        ...state,
        funds: "Amount Must Be a Number",
      };
    case "NET":
      return {
        ...state,
        funds: "Please Select a Network",
      };
    case "NONUMBER":
      return {
        ...state,
        funds: "Please Input Number to Recharge",
      };
    default:
      return state;
  }
};

export default Reducer;
