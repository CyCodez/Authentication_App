import { useAuth } from "../App";
import { useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
const Dashboards = () => {
  const {
    ACC_ACCESS,
    TOKEN,
    name,
    ACC_NAME,
    FUNDS,
    ACC_NUMBER,
    ACC_AMOUNT,
    ACC_TYPE,
    DASH,
    handle_Account_Input,
    Form_Acc_Btn,
  } = useAuth();
  const myuseref = useRef(null);
  useEffect(() => {
    myuseref.current.focus();
  }, []);
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta
          name="description"
          content="This is Your Dashboard where you can Perform any Transactions"
        />
        <link rel="canonical" href="/dashboard" />
      </Helmet>
      <h2>Dashboard (Protected)</h2>
      <h2 className="authen">Welcome To Your Dashboard {name.toUpperCase()}</h2>
      <div className="authen">Your Access Token is {TOKEN}</div>

      <div className="dashboard_container">
        <div className="dashboard">
          <h3 className="greeting">Transfer</h3>
          <div className="wallet">
            <p className="wallet_balance">Account Balance</p>
            <h2 className="wallet_balance-amount">
              &#8358;<span className="myspan">{DASH}</span>
              <span>.00</span>
            </h2>
          </div>
          <form id="form_1">
            <div id="amount-div">
              <label labelfor="amount">Amount</label>
              <input
                ref={myuseref}
                value={ACC_AMOUNT}
                name="account_amount"
                onChange={handle_Account_Input}
                id="amount"
                type="tel"
                placeholder="&#8358;0.00"
                autoComplete="off"
                required
              />
            </div>
            <div id="amount-div">
              <label labelfor="amount">Bank Name</label>
              <select
                value={ACC_NAME}
                onChange={handle_Account_Input}
                name="account_name"
              >
                <option value="select Bank">select</option>
                <option value="Fidelity Bank">Fidelity Bank</option>
                <option value="Access Bank">Access Bank</option>
                <option value="Diamond Bank">Diamond Bank</option>
                <option value="First Bank">First Bank</option>
                <option value="UBA Bank">UBA Bank</option>
                <option value="KeyStone Bank">KeyStone Bank</option>
              </select>
            </div>
            <div>
              <div id="number-div">
                <label labelfor="amount-div">Account Number</label>
                <input
                  value={ACC_NUMBER}
                  onChange={handle_Account_Input}
                  id="amount"
                  type="tel"
                  placeholder="46239 01724 **** ****26"
                  name="account_number"
                  autoComplete="off"
                  required
                />
              </div>
              <div id="amount-div">
                <label labelfor="amount">Account Type</label>
                <select
                  value={ACC_TYPE}
                  onChange={handle_Account_Input}
                  name="account_type"
                >
                  <option value="select">select</option>
                  <option value="Savings">Savings</option>
                  <option value="Current">Current</option>
                </select>
              </div>
              <div id="number-div">
                <label labelfor="amount-div">Token</label>
                <input
                  value={ACC_ACCESS}
                  onChange={handle_Account_Input}
                  id="amount"
                  type="text"
                  placeholder="enter access token"
                  name="access"
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <p className="error_msg">{FUNDS}</p>
            <button type="submit" className="sign-in" onClick={Form_Acc_Btn}>
              Transfer
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Dashboards;
