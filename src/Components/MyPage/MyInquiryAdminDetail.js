import React from "react";
import MyInquiryAdminWrite from "./MyInquiryAdminWrite";

const MyInquiryAdminDetail = ({
  inquiryAdmintest,
  inquiryAdmintest2,
  setInquiryAdmintest2,
  setInquiryAdminAction,
}) => {
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
      {inquiryAdmintest2.answer === 1 ? (
        <>
          <div className="inquiryDetail1">
            <div className="detailSpace">
              <b className="inquiryAnswerTitle">펫토피아 답변</b>
            </div>
            <div className="inquiryDetailContent1">
              {inquiryAdmintest2.answerContent}
            </div>
          </div>
        </>
      ) : null}
      <br />
      {inquiryAdmintest2.answer === 0 ? <MyInquiryAdminWrite /> : null}
      <div className="inquiryWriteBox">
        {inquiryAdmintest2.answer === 0 ? (
          <>
            <button
              className="inquiryBtn"
              onClick={() => {
                setInquiryAdminAction(0);
              }}
            >
              저장
            </button>
          </>
        ) : null}
      </div>
    </>
  );
};

export default MyInquiryAdminDetail;
<h4>디테일</h4>;
