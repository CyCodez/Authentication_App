import { useAuth } from "../App";
import { Helmet } from "react-helmet-async";
const Dashboard = () => {
  const {
    TOKEN,
    name,
    FUNDS,
    Form_Btn,
    PHONE,
    NETWORK,
    AMOUNT,
    DASH,
    handle_Input,
  } = useAuth();

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
      <div className="authen">Authenticated as {TOKEN}</div>

      <div className="dashboard_container">
        <div className="dashboard">
          <h3 className="greeting">Buy Airtime</h3>
          <div className="wallet">
            <p className="wallet_balance">Wallet Balance</p>
            <h2 className="wallet_balance-amount">
              &#8358;<span className="myspan">{DASH}</span>
              <span>.00</span>
            </h2>
          </div>
          <form id="form_1">
            <div id="amount-div">
              <label labelfor="amount">Amount</label>
              <input
                value={AMOUNT}
                name="amount"
                onChange={handle_Input}
                id="amount"
                type="tel"
                placeholder="&#8358;0.00"
                required
              />
            </div>
            <div>
              <div id="number-div">
                <label labelfor="amount-div">Phone Number</label>
                <input
                  value={PHONE}
                  onChange={handle_Input}
                  id="amount"
                  type="tel"
                  pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$"
                  placeholder="0809 365 0288"
                  name="phone"
                  required
                />
              </div>
              <div id="amount-div">
                <label labelfor="amount">Specify Network</label>
                <select value={NETWORK} onChange={handle_Input} name="network">
                  <option value="select">select</option>
                  <option value="MTN">MTN</option>
                  <option value="AIRTEL">AIRTEL</option>
                  <option value="GLO">GLO</option>
                  <option value="ETISALAT">ETISALAT</option>
                </select>
              </div>
            </div>
            <p className="error_msg">{FUNDS}</p>
            <button type="submit" className="sign-in" onClick={Form_Btn}>
              Buy
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
