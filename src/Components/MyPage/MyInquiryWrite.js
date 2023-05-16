import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BsTrash3 } from "react-icons/bs";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const MyInquiryWrite = ({
  inquirytest,
  setInquirytest,
  setInquiryAction,
  inquirydbtest,
}) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const inputRef = useRef(null);

  const handleFileInputChange = (event) => {
    setSelectedFiles([...selectedFiles, ...event.target.files]);
  };

  const handleRemoveImage = (index) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);
  };

  const handleUploadClick = () => {
    console.log(selectedFiles);
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  // ㅡㅡㅡㅡㅡㅡㅡㅡㅡdb 연동 테스트ㅡㅡㅡㅡㅡㅡㅡㅡㅡ

  const titleRef = useRef();
  const contentRef = useRef();

  const [inquiryalert, setInquiryalert] = useState(0);

  const inquirydbwrite = () => {
    if (titleRef.current.value === "" || titleRef.current.value === undefined) {
      setInquiryalert(1);
      titleRef.current.focus();
      return false;
    } else if (
      contentRef.current.value === "" ||
      contentRef.current.value === undefined
    ) {
      setInquiryalert(2);
      contentRef.current.focus();
      return false;
    }
    axios
      .post("/inquirywrite", {
        title: titleRef.current.value,
        content: contentRef.current.value,
        answer: 0,
        username:
          window.sessionStorage.getItem("id") !== null
            ? window.sessionStorage.getItem("id")
            : "",
      })
      .then((res) => {
        console.log("inquirywrite=>", res);
        inquirydbtest();
        setInquiryAction(0);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  // ㅡㅡㅡㅡㅡㅡㅡㅡㅡdb 연동 테스트ㅡㅡㅡㅡㅡㅡㅡㅡㅡ

  return (
    <>
      <div className="inquiryHeader">
        <div
          className="inquiryBack"
          onClick={() => {
            if (window.confirm("뒤로가시겠습니까?")) {
              setInquiryAction(0);
            } else {
              return;
            }
          }}
        >
          <b className="inquiryBackArrow">&lt;</b>
        </div>
        <h4>1:1문의</h4>
      </div>
      <div className="writeForm">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label></Form.Label>
            <Form.Control
              className="writeTitle"
              type="email"
              placeholder="제목"
              ref={titleRef}
            />
          </Form.Group>
          {inquiryalert === 1 ? (
            <div className="inquiryWriteAlert">제목을 입력하세요.</div>
          ) : (
            <div className="inquiryWriteAlert">&nbsp;</div>
          )}
          <Form.Group className="mb-3 writeFormContent">
            <Form.Label></Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="문의 내용을 입력하세요"
              className="contentForm"
              ref={contentRef}
              style={{ resize: "none" }}
            />
          </Form.Group>
          {inquiryalert === 2 ? (
            <div className="inquiryWriteAlert">내용을 입력하세요.</div>
          ) : (
            <div className="inquiryWriteAlert">&nbsp;</div>
          )}
        </Form>
      </div>
      {/* <div>
        <div>
          <div className="uploadBtn">
            <Button
              variant="outline-secondary"
              className=""
              onClick={handleClick}
            >
              <img className="uploadBtnImg" src="img/uploading.png" alt="" />
            </Button>
          </div>

          <input
            className="uploadInput"
            type="file"
            multiple
            onChange={handleFileInputChange}
            ref={inputRef}
          />
        </div>
        <div className="uploadImgDiv">
          <ListGroup>
            {selectedFiles.map((file, index) => (
              <ListGroup.Item className="listGroupItem">
                <div key={index}>
                  <img
                    className="uploadImg"
                    src={URL.createObjectURL(file)}
                    alt={`${file.name}`}
                  />
                  <p className="imgTitle">{file.name}</p>
                  <div className="imgDeleteBtnDiv">
                    <button
                      className="imgDeleteBtn"
                      onClick={() => handleRemoveImage(index)}
                    >
                      <BsTrash3 />
                    </button>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div> */}
      {/* <br /> <br /> <br /> */}
      <div className="inquiryWriteBox">
        <button
          className="inquiryBtn"
          onClick={() => {
            // 저장 코드 들어감
            inquirydbwrite();
          }}
        >
          작성완료
        </button>
        {/* <button
          className="inquiryBtn2"
          onClick={() => {
            if (window.confirm("취소하시겠습니까?")) {
              setInquiryAction(0);
            } else {
              return;
            }
          }}
        >
          취소
        </button> */}
      </div>
    </>
  );
};

export default MyInquiryWrite;
