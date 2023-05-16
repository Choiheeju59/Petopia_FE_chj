import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Button from "react-bootstrap/Button";
import "../Styles/ReportModal.css";
import "../Styles/RecomendStyle.css";
import Form from "react-bootstrap/Form";
import { useEffect, useState, useRef } from "react";
import { async } from "q";

const ReportModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  const [reportReason, setReportReason] = useState("0");

  const clickReason = (e) => {
    setReportReason(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    setReportReason(reportReason);
  }, [reportReason]);

  const [reportReasonText, setReportReasonText] = useState("");
  const reportReasonContent = useRef();

  const writeReason = () => {
    setReportReasonText(reportReasonContent.current.value);
    window.location.reload();
  };

  useEffect(() => {
    console.log(reportReasonText);
  }, [reportReasonText]);

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal reportmodal" : "reportmodal"}>
      {open ? (
        <div className="reportModalSectionDiv">
          <div className="reportModalHeaderDiv">
            <div className="reportModalHeaderText">{header}</div>
            <button
              className="reportModalCloseBtn"
              onClick={() => {
                close();
                window.location.reload();
              }}
            >
              &times;
            </button>
          </div>
          <div className="reportModalMainDiv">
            {props.children}
            <Form.Select
              aria-label="신고 사유"
              size="sm"
              onChange={clickReason}
            >
              <option value="0" disabled>
                신고 사유
              </option>
              <option value="1" onClick={(e) => clickReason(e)}>
                선정성, 정치관련, 혐오감
              </option>
              <option value="2" onClick={(e) => clickReason(e)}>
                저작권 위반
              </option>
              <option value="3" onClick={(e) => clickReason(e)}>
                광고성, 도배, 허위정보
              </option>
              <option value="4" onClick={(e) => clickReason(e)}>
                부적절한 작성자 닉네임
              </option>
              <option value="5" onClick={(e) => clickReason(e)}>
                직접 입력
              </option>
            </Form.Select>
            {reportReason === "5" ? (
              <Form.Control
                className="writeTitle reportReasonWrite"
                type="text"
                placeholder="신고 사유를 입력해주세요."
                name="reportReasonContent"
                ref={reportReasonContent}
              />
            ) : (
              <Form.Control
                className="writeTitle reportReasonWrite"
                type="hidden"
                placeholder="신고 사유를 입력해주세요."
                name="reportReasonContent"
                ref={reportReasonContent}
              />
            )}
          </div>

          <div className="reportModalFooterDiv">
            {/* <button className="reportModalCloseBtn" onClick={close}>
              close
            </button> */}
            <Button
              className="btm-sm reportBtn"
              variant="outline-danger"
              style={{ padding: "4px 0px 3px 0px" }}
              onClick={() => {
                close();
                writeReason();
              }}
            >
              신고
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ReportModal;
