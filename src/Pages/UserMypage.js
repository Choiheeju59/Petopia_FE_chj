import React, { useState } from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import BgLeft from "../Components/BgLeft.js";
<<<<<<< HEAD
import MyInquiry from "../Components/MyPage/MyInquiry.js";
=======
//import MyInquiry from "../Components/MyPage/MyInquiry.js";
//import MyInquiryWrite from "../Components/MyPage/MyInquiryWrite.js";
// import Write123 from "../Components/MyPage/Write123.js";
>>>>>>> 0e75ab2c45152ffac5eb9e6f5fe9d999da50938d

const UserMypage = () => {
  return (
    <>
      <BgLeft />

      <main>
        <Header />
        <section>
          {/* 여기에 모바일 화면 
          개발하시면 됩니다*/}
          <p>마이페이지 입니다</p>
          {/* 1:1 문의 */}
          <MyInquiry />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default UserMypage;
