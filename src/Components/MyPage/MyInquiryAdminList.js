import React, { useEffect, useState } from "react";

const MyInquiryAdminList = ({
  inquiryAdmintest,
  setInquiryAdmintest2,
  setInquiryAdminAction,
}) => {
  // 문의 카테고리 선택
  const [selectedInquiry, setSelectedInquiry] = useState("All");
  useEffect(() => {
    const inquiryAll = document.getElementById("inquiryAll");
    const inquiryWating = document.getElementById("inquiryWating");
    const inquiryWComplete = document.getElementById("inquiryWComplete");

    if (selectedInquiry === "All") {
      inquiryAll.className = "inquiryadminbox1 inquiry_selected";
      inquiryWating.className = "inquiryadminbox1";
      inquiryWComplete.className = "inquiryadminbox1";
    } else if (selectedInquiry === "Wating") {
      inquiryAll.className = "inquiryadminbox1";
      inquiryWating.className = "inquiryadminbox1 inquiry_selected";
      inquiryWComplete.className = "inquiryadminbox1";
    } else if (selectedInquiry === "Complete") {
      inquiryAll.className = "inquiryadminbox1";
      inquiryWating.className = "inquiryadminbox1";
      inquiryWComplete.className = "inquiryadminbox1 inquiry_selected";
    }
  }, [selectedInquiry]);

  const [inquiryadminstate, setInquiryadminstate] = useState(0);
  return (
    <>
      <div className="inquiryHeader">
        <h4>1:1문의 관리</h4>
      </div>
      <div className="inquiryadminbox">
        <div
          className="inquiryadminbox1"
          id="inquiryAll"
          onClick={() => {
            setSelectedInquiry("All");
            setInquiryadminstate(0);
          }}
        >
          <b>전체 문의</b>
          <br />
          <b>{inquiryAdmintest.length}</b>
        </div>
        <div
          className="inquiryadminbox1"
          id="inquiryWating"
          onClick={() => {
            setSelectedInquiry("Wating");
            setInquiryadminstate(1);
          }}
        >
          <b>답변 대기</b>
          <br />
          <b>{inquiryAdmintest.filter((data) => data.answer === 0).length}</b>
        </div>
        <div
          className="inquiryadminbox1"
          id="inquiryWComplete"
          onClick={() => {
            setSelectedInquiry("Complete");
            setInquiryadminstate(2);
          }}
        >
          <b>답변 완료</b>
          <br />
          <b>{inquiryAdmintest.filter((data) => data.answer === 1).length}</b>
        </div>
      </div>
      <hr className="inquiryhr1" />
      {inquiryAdmintest.length !== 0 && inquiryadminstate === 0 ? (
        inquiryAdmintest.map((a, i) => (
          <div
            className="inquiryMain"
            onClick={() => {
              setInquiryAdmintest2(a);
              setInquiryAdminAction(2);
              // MyInquiryDetail 이동 or 해당 리스트를 제목,내용으로 변경
            }}
          >
            <div className="inquiryMain1">
              <b className="inquiryMainTitle">{a.title}</b>
              <br />
              {a.answer === 0 ? (
                <div className="inquiryadminStatusWait">답변 대기</div>
              ) : (
                <div className="inquiryadminStatusComplete">답변 완료</div>
              )}
              <b className="inquiryMainDate">{a.createDate}</b>
            </div>
            <hr className="inquiryhr2" />
          </div>
        ))
      ) : inquiryAdmintest.length !== 0 && inquiryadminstate === 1 ? (
        inquiryAdmintest
          .filter((data) => data.answer === 0)
          .map((a, i) => (
            <div
              className="inquiryMain"
              onClick={() => {
                setInquiryAdmintest2(a);
                setInquiryAdminAction(2);
                // MyInquiryDetail 이동 or 해당 리스트를 제목,내용으로 변경
              }}
            >
              <div className="inquiryMain1">
                <b className="inquiryMainTitle">{a.title}</b>
                <br />
                {a.answer === 0 ? (
                  <div className="inquiryadminStatusWait">답변 대기</div>
                ) : (
                  <div className="inquiryadminStatusComplete">답변 완료</div>
                )}
                <b className="inquiryMainDate">{a.createDate}</b>
              </div>
              <hr className="inquiryhr2" />
            </div>
          ))
      ) : inquiryAdmintest.length !== 0 && inquiryadminstate === 2 ? (
        inquiryAdmintest
          .filter((data) => data.answer === 1)
          .map((a, i) => (
            <div
              className="inquiryMain"
              onClick={() => {
                setInquiryAdmintest2(a);
                setInquiryAdminAction(2);
                // MyInquiryDetail 이동 or 해당 리스트를 제목,내용으로 변경
              }}
            >
              <div className="inquiryMain1">
                <b className="inquiryMainTitle">{a.title}</b>
                <br />
                {a.answer === 0 ? (
                  <div className="inquiryadminStatusWait">답변 대기</div>
                ) : (
                  <div className="inquiryadminStatusComplete">답변 완료</div>
                )}
                <b className="inquiryMainDate">{a.createDate}</b>
              </div>
              <hr className="inquiryhr2" />
            </div>
          ))
      ) : (
        <div className="inquiryNone">문의내역이 없습니다.</div>
      )}
    </>
  );
};

export default MyInquiryAdminList;
