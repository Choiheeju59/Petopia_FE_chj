import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import axios from "axios";

const MyInquiryAdminUpdate = ({ inquiryAdmintest2, setInquiryAdminAction }) => {
  return (
    <>
      <div className="writeForm">
        <Form>
          <Form.Group className="mb-3 writeFormContent">
            <Form.Label></Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="문의 내용을 입력하세요"
              className="contentForm"
              defaultValue={inquiryAdmintest2.answerContent}
              style={{ resize: "none" }}
            />
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default MyInquiryAdminUpdate;
