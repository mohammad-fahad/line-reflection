import React from "react";
import Products from "../products/Products";
import SharedFooter from "../shared/SharedFooter";
import SharedNav from "../shared/SharedNav";

const Home = () => {
  return (
    <div>
      <SharedNav />
      <Products />
      <SharedFooter />
    </div>
  );
};

export default Home;
