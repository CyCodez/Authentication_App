import { Helmet } from "react-helmet-async";

function About() {
  return (
    <div>
      <Helmet>
        <title>About</title>
        <meta
          name="description"
          content="Give Detailed Description Of The Application"
        />
        <link rel="canonical" href="/About" />
      </Helmet>
      <ul>
        <li>
          {" "}
          <h4>
            {" "}
            This Is An Application Which Helps Users Perform Transactions
            Directly From Their Bank Account, It Provides An Extra Layer Of
            Security Where The User Is Reqiured To Enter A Valid Name In Other
            To Perform A Transaction Or Access Any Of The Routes.
          </h4>
        </li>
      </ul>
      <li>
        <h4>
          {" "}
          The User is Required To Enter Valid Transaction Details On Their
          Dashboard.
        </h4>
      </li>
      <li>
        {" "}
        <h4>
          {" "}
          After Which The History Of All Transaction Details Is Stored In The
          History Route(Page).
        </h4>
      </li>
      <li>
        <h4>
          The History Page Implements The Error Page And The Nested Route.
        </h4>
      </li>
      <li>
        <h4>
          {" "}
          A Custom Hook Was Used To Extract The Currently Logged In User.
        </h4>
      </li>
      <li>
        {" "}
        <h4>
          {" "}
          Upon Signing Out, The User Is Required To Enter A Valid User Name
          Again In Other To Perform Another Transaction.
        </h4>
      </li>

      <li>
        <h2>HAPPY BANKING!!!</h2>
      </li>
    </div>
  );
}

export default About;
