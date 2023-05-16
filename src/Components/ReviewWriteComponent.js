import React, { useState, useRef, useEffect } from "react";
import RatingSection from "./RatingSection";
import Form from "react-bootstrap/Form";
import "../Styles/Review.css";
import { BsTrash3 } from "react-icons/bs";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const ReviewWriteComponent = () => {
  const [selectedOption, setSelectedOption] = useState("0"); // 3. 리뷰 종류(1 : 병원, 2 : 음식점/카페, 3 : 숙박, 4 : 기타)

  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedOption === selectedValue ? "" : selectedValue); // 선택된 값을 상태에 저장
  };

  // ratingIndex = 받을 평점
  const [ratingIndex, setRatingIndex] = useState(0); // 1. 리뷰 점수

  useEffect(() => {
    // ratingIndex 값이 변경될 때마다 실행
  }, [ratingIndex]);

  // 4. 비용
  const medicalCost = useRef(); // 진료비
  const surgeryCost = useRef(); // 수술비
  const totalCost = useRef(); // 총 비용

  const [compareOption, setCompareOption] = useState("0"); // 2. 가격 대비(1 : 저렴한 편, 2 : 보통, 3 : 비싼 편)

  const handleConpareOptionChange = (e) => {
    setCompareOption(e.target.value); // 선택된 값을 상태에 저장
  };

  const handleUploadClick = () => {
    if (selectedOption === "0") {
      alert("리뷰 종류를 선택해 주세요.");
    } else if (ratingIndex === 0) {
      alert("리뷰 점수를 선택해 주세요.");
    } else if (
      totalCost.current.value === "" ||
      totalCost.current.value === undefined
    ) {
      alert("총 비용을 입력해 주세요.");
    } else if (totalCost.current.value < 0) {
      alert("총 비용은 0 원 이상으로 입력해 주세요.");
    } else if (selectedOption === "1" && medicalCost.current.value < 0) {
      alert("진료비는 0 원 이상으로 입력해 주세요.");
    } else if (selectedOption === "1" && surgeryCost.current.value < 0) {
      alert("수술비는 0 원 이상으로 입력해 주세요.");
    } else if (compareOption === "0") {
      alert("가격 대비를 선택해 주세요.");
    } else {
      consoleUpWrite();
    }

    // alert(
    //   "selectedOption, 리뷰 종류 : " +
    //     selectedOption +
    //     "\n" +
    //     "ratingIndex, 리뷰 점수 : " +
    //     ratingIndex +
    //     "\n" +
    //     "medicalCost, 진료비 : " +
    //     medicalCost.current.value +
    //     "\n" +
    //     "surgeryCost, 수술비 : " +
    //     surgeryCost.current.value +
    //     "\n" +
    //     "totalCost, 총 비용 : " +
    //     totalCost.current.value +
    //     "\n" +
    //     "compareOption, 가격 대비 : " +
    //     compareOption
    // );

    console.log(selectedFiles);
  };

  // 글 쓰기 컴포넌트 -----------------------------------------------------------------

  const [selectedFiles, setSelectedFiles] = useState([]);

  const inputRef = useRef(null);

  const reviewWriteContentTextArea = useRef();
  const [reviewWriteContentText, setReviewWriteContentText] = useState(0); // 리뷰 글자수

  const handleFileInputChange = (event) => {
    setSelectedFiles([...selectedFiles, ...event.target.files]);
  };

  const handleRemoveImage = (index) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const consoleUpWrite = () => {
    if (
      reviewWriteContentTextArea.current.value === null ||
      reviewWriteContentTextArea.current.value === "" ||
      reviewWriteContentTextArea.current.value === undefined
    ) {
      alert("리뷰 내용을 입력해 주세요.");
    } else if (selectedFiles.length === 0) {
      alert("리뷰 사진을 한 장 이상 업로드 해주세요.");
      // alert(
      //   "reviewWriteContentTextArea, 리뷰 내용 : " +
      //     reviewWriteContentTextArea.current.value +
      //     "\n" +
      //     "selectedFiles : " +
      //     selectedFiles.map((file) => file.name + "\n")
      // );
    } else {
      alert("리뷰 업로드");
    }
  };

  // ---------------------------------------------------------------------------------

  return (
    <>
      <p className="reviewRatingP">리뷰 작성</p>
      <div className="signUpForm reviewWriteForm">
        <p className="reviewTd">리뷰 점수</p>
        <div className="reviewRatingComponent">
          <RatingSection
            ratingIndex={ratingIndex}
            setRatingIndex={setRatingIndex}
          />
        </div>

        <Form className="mb-3 reviewWriteRadioBoxDiv">
          <div className="">
            <p className="reviewWriteRadioBoxP reviewTd">가격 대비</p>
            <div>
              <Form.Check
                inline
                label="저렴한 편이에요"
                type="radio"
                name="radiogroup1"
                id="radioBox1"
                value="1"
                checked={compareOption === "1"} // 첫 번째 옵션이 선택되었을 때 checked 값은 true
                onChange={handleConpareOptionChange}
                className="reviewWriteCompareOptionForm"
              />
              <Form.Check
                inline
                label="보통이에요"
                type="radio"
                name="radiogroup2"
                id="radioBox2"
                value="2"
                checked={compareOption === "2"} //
                onChange={handleConpareOptionChange}
                className="reviewWriteCompareOptionForm"
              />
              <Form.Check
                inline
                label="비싼 편이에요"
                type="radio"
                name="radiogroup3"
                id="radioBox3"
                value="3"
                checked={compareOption === "3"} //
                onChange={handleConpareOptionChange}
                className="reviewWriteCompareOptionForm"
              />
            </div>
          </div>
        </Form>

        <p className="reviewTd">리뷰 종류</p>
        <div className=" reviewWriteCheckBoxDiv">
          <div className="mb-3">
            <Form>
              <Form.Check
                inline
                label="병원"
                type="checkbox"
                name="checkgroup1"
                id="checkBox1"
                value="1"
                checked={selectedOption === "1"} // 첫 번째 옵션이 선택되었을 때 checked 값은 true
                onChange={handleOptionChange}
              />
              <Form.Check
                inline
                label="음식점/카페"
                type="checkbox"
                name="checkgroup2"
                id="checkBox2"
                value="2"
                checked={selectedOption === "2"} //
                onChange={handleOptionChange}
              />
              <Form.Check
                inline
                label="숙박"
                type="checkbox"
                name="checkgroup3"
                id="checkBox3"
                value="3"
                checked={selectedOption === "3"} //
                onChange={handleOptionChange}
              />
              <Form.Check
                inline
                label="기타"
                type="checkbox"
                name="checkgroup4"
                id="checkBox4"
                value="4"
                checked={selectedOption === "4"} //
                onChange={handleOptionChange}
              />
            </Form>
          </div>
        </div>

        <div>
          {/* <Form.Select aria-label="신고 사유" size="sm" onChange={clickCostType}>
            <option value="0" disabled>
              진료 항목
            </option>
            <option value="1" onClick={(e) => clickCostType(e)}>
              수술비
            </option>
            <option value="2" onClick={(e) => clickCostType(e)}>
              기타
            </option>
          </Form.Select> */}
          {selectedOption === "1" ? (
            <div>
              <table className="reviewWriteTable">
                <tr>
                  <td className="reviewTd">진료비</td>
                  <td>
                    <Form.Control
                      className="writeTitle reportReasonWrite reviewCostInputFormControl"
                      type="number"
                      placeholder="(원)"
                      name="reportReasonContent"
                      ref={medicalCost}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="reviewTd">수술비</td>
                  <td>
                    <Form.Control
                      className="writeTitle reportReasonWrite reviewCostInputFormControl"
                      type="number"
                      placeholder="(원)"
                      name="reportReasonContent"
                      ref={surgeryCost}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="reviewTd">총 비용</td>
                  <td>
                    <Form.Control
                      className="writeTitle reportReasonWrite reviewCostInputFormControl"
                      type="number"
                      placeholder="&nbsp;&nbsp;* 필수 입력 &nbsp;(원)"
                      name="reportReasonContent"
                      ref={totalCost}
                      required
                    />
                  </td>
                </tr>
              </table>
            </div>
          ) : (
            <div>
              <table className="reviewWriteTable">
                <tr>
                  <td>
                    <Form.Control
                      className="writeTitle reportReasonWrite reviewCostInputFormControl"
                      type="hidden"
                      placeholder="(원)"
                      name="reportReasonContent"
                      ref={medicalCost}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Control
                      className="writeTitle reportReasonWrite reviewCostInputFormControl"
                      type="hidden"
                      placeholder="(원)"
                      name="reportReasonContent"
                      ref={surgeryCost}
                    />
                  </td>
                </tr>

                <tr>
                  <td className="reviewTd">총 비용</td>
                  <td>
                    <div>
                      <Form.Control
                        className="writeTitle reportReasonWrite reviewCostInputFormControl"
                        type="number"
                        placeholder="&nbsp;* 필수 입력 &nbsp;(원)"
                        name="reportReasonContent"
                        ref={totalCost}
                        required
                      />
                    </div>
                  </td>
                </tr>
              </table>
              {/* <div className="whiteSpace"></div> */}
            </div>
          )}
        </div>

        {/* 글쓰기 컴포넌트 -----------------------------------------------------------------------------------*/}
        <div className="reviewWriteContentForm">
          <Form>
            <Form.Group className="mb-3 writeFormContent">
              <Form.Label></Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="리뷰를 입력해 주세요."
                className="contentForm reviewContentForm"
                ref={reviewWriteContentTextArea}
                maxLength={500}
                onChange={() => {
                  setReviewWriteContentText(
                    reviewWriteContentTextArea.current.value.length
                  );
                }}
              />
            </Form.Group>
          </Form>
          <p className="reviewWriteContentTextP">
            {reviewWriteContentText}/500
          </p>
        </div>
      </div>

      {/* <div className="whiteSpace"></div>  --------------------------------------------------- white space */}
      <div className="boardWriteDiv">
        {/* <BoardWrite /> */}

        <div className="reviewWriteBtnsDiv">
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

          <div className="uploadImgDiv reviewWriteUploadImgDiv">
            <ListGroup>
              {selectedFiles.map((file, index) => (
                <ListGroup.Item className="listGroupItem" id="listGroupItemId">
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
          <div className="btns">
            <button
              className="btn btn-sm btn-outline-primary submit reviewWriteSubmit"
              onClick={handleUploadClick}
            >
              작성 완료
            </button>
            {/* <button
              type="button"
              className="btn btn-sm btn-outline-primary boardListBtn"
            >
              글목록
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default ReviewWriteComponent;
