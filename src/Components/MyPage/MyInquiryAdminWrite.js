import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";

const MyInquiryAdminWrite = () => {
  return (
    <>
      <div className="writeForm">
        <Form>
          <Form.Group className="mb-3 writeFormContent">
            <Form.Label></Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="답변 내용을 입력하세요"
              className="contentForm"
              style={{ resize: "none" }}
            />
          </Form.Group>
          {/* {inquiryalert === 2 ? (
            <div className="inquiryWriteAlert">내용을 입력하세요.</div>
          ) : (
            <div className="inquiryWriteAlert">&nbsp;</div>
          )} */}
        </Form>
      </div>
    </>
  );
};

export default MyInquiryAdminWrite;
