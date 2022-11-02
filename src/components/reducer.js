//Provides the Required response to a specific action and condition
const Reducer = (state, action) => {
  if (action.type === "handle_Input") {
    return {
      ...state,
      [action.field]: action.payload,
    };
  }
  if (action.type === "INSUFFICIENT") {
    return {
      ...state,
      funds: "Insufficient Balance",
    };
  }
  if (action.type === "SUFFICIENT") {
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
  }
  if (action.type === "EMPTY_STRING") {
    return {
      ...state,
      funds: "please enter a value",
    };
  }
  if (action.type === "Token") {
    return {
      ...state,
      token: action.tok,
    };
  }
  if (action.type === "LOGOUT") {
    return {
      ...state,
      token: null,
    };
  }
  if (action.type === "NUM") {
    return {
      ...state,
      funds: "Amount Must Be a Number",
    };
  }
};

export default Reducer;
