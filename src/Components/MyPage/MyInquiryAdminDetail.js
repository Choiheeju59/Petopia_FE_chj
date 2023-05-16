import React, { useState } from "react";
import MyInquiryAdminWrite from "./MyInquiryAdminWrite";
import MyInquiryAdminUpdate from "./MyInquiryAdminUpdate";

const MyInquiryAdminDetail = ({
  inquiryAdmintest,
  inquiryAdmintest2,
  setInquiryAdmintest2,
  setInquiryAdminAction,
}) => {
  const [inquiryadmincheck, setInquiryadmincheck] = useState(0);

  return (
    <>
      <div className="inquiryHeader">
        <div
          className="inquiryBack"
          onClick={() => {
            setInquiryAdminAction(0);
          }}
        >
          <b className="inquiryBackArrow">&lt;</b>
        </div>
        <h4>1:1문의 관리</h4>
      </div>
      <hr className="inquiryhr1" />
      <div className="inquiryDetail1">
        <div className="inquiryDetail2">
          <b className="inquiryMainTitle">{inquiryAdmintest2.title}</b>
          <br />
          <b className="inquiryMainDate">{inquiryAdmintest2.createDate}</b>

          <div className="inquiryadminusername">
            <b>작성자 : {inquiryAdmintest2.username}</b>
          </div>
          <div className="inquiryadminDetailContent">
            {inquiryAdmintest2.content}
          </div>
        </div>
      </div>
      <br />
      <hr className="inquiryhr1" />
      {/* 답변 */}
      {inquiryAdmintest2.answer === 1 && inquiryadmincheck === 0 ? (
        <>
          <div className="inquiryDetail1">
            <div className="detailSpace">
              <b className="inquiryAdminAnswerTitle">답변</b>
            </div>
            <div className="inquiryAdminDetailContent1">
              {inquiryAdmintest2.answerContent}
            </div>
          </div>
          <div className="inquiryWriteBox">
            {" "}
            <button
              className="inquiryBtn"
              onClick={() => {
                setInquiryadmincheck(1);
              }}
            >
              수정
            </button>
          </div>
        </>
      ) : null}
      <br />
      {inquiryAdmintest2.answer === 0 && inquiryadmincheck === 0 ? (
        <>
          <MyInquiryAdminWrite />
          <div className="inquiryWriteBox">
            <button
              className="inquiryBtn"
              onClick={() => {
                setInquiryAdminAction(0);
              }}
            >
              저장
            </button>
          </div>
        </>
      ) : null}

      {inquiryadmincheck === 1 ? (
        <>
          <MyInquiryAdminUpdate
            inquiryAdmintest2={inquiryAdmintest2}
            setInquiryAdminAction={setInquiryAdminAction}
          />
          <div className="inquiryWriteBox">
            <button
              className="inquiryBtn"
              onClick={() => {
                setInquiryAdminAction(0);
              }}
            >
              저장
            </button>
          </div>
        </>
      ) : null}
    </>
  );
};

export default MyInquiryAdminDetail;
<h4>디테일</h4>;
