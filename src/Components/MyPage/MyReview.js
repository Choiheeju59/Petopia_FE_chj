import React from "react";
import axios from "axios";
import Header from "../Header.js";
import Footer from "../Footer.js";
import BgLeft from "../BgLeft.js";
import MyReviewList from "./MyReviewList.js";
const MyReview = () => {
  return (
    <>
      <BgLeft />
      <main>
        <Header />
        <section>
          <MyReviewList />
        </section>
      </main>
    </>
  );
};

export default MyReview;
