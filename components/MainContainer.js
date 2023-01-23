import Head from "next/head";
import A from "./A";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"ubitv " + keywords}></meta>
        <title>home page</title>
      </Head>
      <div className="navbar">
        <A href={"/"} text="start page" />
        <A href={"/users"} text="users page" />
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;
