import React, { useEffect } from "react";
import MyInquiryMain from "./MyInquiryMain";
import MyInquiryWrite from "./MyInquiryWrite";
import MyInquiryDetail from "./MyInquiryDetail";
import { useState } from "react";
import MyInquiryUpdate from "./MyInquiryUpdate";
import axios from "axios";
import Header from "../Header.js";
import Footer from "../Footer.js";
import BgLeft from "../BgLeft.js";
import "../../Styles/MyInquiry.css";

const MyInquiry = () => {
  const [inquiryAction, setInquiryAction] = useState(0);
  const [inquirytest, setInquirytest] = useState([
    // 테스트 문의 데이터
    {
      title: "제목1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      createDate: "2023-05-02",
      answer: 0,
      answerContent: "",
    },
    {
      title: "제목2",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      createDate: "2023-05-03",
      answer: 0,
      answerContent: "",
    },
    {
      title: "제목3",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      createDate: "2023-05-04",
      answer: 1,
      answerContent:
        "펫토피아 XXX입니다. 펫토피아를 이용해주시는 고객님께 감사의 말씀드립니다.",
    },
  ]);
  const [inquirytest2, setInquirytest2] = useState({});

  // DB ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 연동 테스트 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

  const inquirylogin = () => {
    window.sessionStorage.setItem("id", "test");
  };

  const inquirylogout = () => {
    window.sessionStorage.clear();
  };

  // 문의 리스트 불러오기
  const [inquirydb, setInquirydb] = useState([]);

  useEffect(() => {
    inquirydbtest();
  }, []);

  const inquirydbtest = () => {
    axios
      .get("/inquirylist", {
        params: {
          username:
            window.sessionStorage.getItem("id") !== null
              ? window.sessionStorage.getItem("id")
              : "",
        },
      })
      .then((res) => {
        // console.log("데이터 =>", res);
        const { data } = res;

        setInquirydb(data);
        // setInquiryAction(0);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  // DB ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 연동 테스트 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

  return (
    <>
      <BgLeft />

      <main>
        <Header />
        <section>
          {inquiryAction === 0 && ( // 문의 리스트
            <MyInquiryMain
              inquirytest={inquirytest}
              setInquiryAction={setInquiryAction}
              setInquirytest2={setInquirytest2}
              inquirydb={inquirydb}
            />
          )}
          {inquiryAction === 1 && ( // 문의 작성
            <MyInquiryWrite
              inquirytest={inquirytest}
              inquirydbtest={inquirydbtest}
              setInquirytest={setInquirytest}
              setInquiryAction={setInquiryAction}
            />
          )}
          {inquiryAction === 2 && ( // 문의 상세내용
            <MyInquiryDetail
              inquirytest2={inquirytest2}
              setInquiryAction={setInquiryAction}
              inquirydb={inquirydb}
              inquirydbtest={inquirydbtest}
            />
          )}
          {inquiryAction === 3 && ( // 문의내용 수정
            <MyInquiryUpdate
              inquirytest2={inquirytest2}
              setInquiryAction={setInquiryAction}
              inquirydbtest={inquirydbtest}
            />
          )}
          {/* <br />
      <br />
      <br />
      <button
        onClick={() => {
          inquirydbtest();
        }}
      >
        테스트
      </button>
      <button
        onClick={() => {
          inquirylogin();
        }}
      >
        로그인테스트
      </button>
      <button
        onClick={() => {
          inquirylogout();
        }}
      >
        로그아웃
      </button> */}
        </section>
        <Footer />
      </main>
    </>
  );
};

export default MyInquiry;
