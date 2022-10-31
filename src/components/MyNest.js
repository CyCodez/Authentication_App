import { Helmet } from "react-helmet-async";

const MyNest = () => {
  return (
    <div>
      <Helmet>
        <title>Nested Route</title>
        <meta name="description" content="Shows the Nested Route" />
        <link rel="canonical" href="/nested" />
      </Helmet>
      <p className="nested">This is the Nested Route</p>
    </div>
  );
};

export default MyNest;
