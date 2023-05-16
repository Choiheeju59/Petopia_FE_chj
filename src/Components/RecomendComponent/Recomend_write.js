import "bootstrap/dist/css/bootstrap.css";
import "../../Styles/BoardWrite.css";
import "../../Styles/RecomendStyle.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useRef } from "react";
import { BsTrash3 } from "react-icons/bs";
import ListGroup from "react-bootstrap/ListGroup";
import RadioButton from "../../Components/RecomendComponent/RadioButton";

const Recomend_write = () => {
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

  const [placeOption, setPlaceOption] = useState("");

  const options = [
    { value: "option1", label: "#식당" },
    { value: "option2", label: "#카페" },
    { value: "option3", label: "#공원" },
  ];

  const handleOptionChange = (newValue) => {
    console.log(newValue);
    setPlaceOption(newValue);
  };

  const writeContentTextArea = useRef();
  const [writeContentText, setWriteContentText] = useState(0); //글자수

  return (
    <>
      <div className="writeForm">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label></Form.Label>
            <Form.Control
              className="writeTitle"
              type="email"
              placeholder="글 제목을 입력하세요"
            />
          </Form.Group>
          <Form.Group className="mb-3 writeFormContent">
            <Form.Label></Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="글 내용을 입력하세요"
              className="contentForm"
              ref={writeContentTextArea}
              maxLength={3000}
              onChange={() => {
                setWriteContentText(writeContentTextArea.current.value.length);
              }}
            />
          </Form.Group>
          <p className="writeContentTextP">{writeContentText}/3000</p>

          <div>
            <p className="recomendP" style={{ marginTop: "15px" }}>
              1. 어떤 종류의 장소인가요? *{" "}
            </p>
            <div className="radioBtnDiv">
              <RadioButton options={options} clickPlace={handleOptionChange} />
              {/* <p>{placeOption}</p> */}
            </div>
          </div>

          {/* <div>
            <ListGroup>
              <ListGroup.Item>No style</ListGroup.Item>
              <ListGroup.Item action variant="primary">
                Primary
              </ListGroup.Item>
            </ListGroup>
          </div> */}

          <p className="recomendP">2. 반려견 동반시 유의사항 * </p>
          <div className="recomendCheckDiv">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                펫 방석 혹은 담요를 제공해요
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                펫 간식을 제공해요
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                매너벨트 착용 필수에요
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                15 kg 이상 대형견은 입장할 수 없어요
              </label>
            </div>
          </div>
        </Form>
      </div>

      <div>
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
            className="btn btn-sm btn-outline-primary submit"
            onClick={handleUploadClick}
          >
            작성 완료
          </button>
          <button
            type="button"
            className="btn btn-sm btn-outline-primary boardListBtn"
          >
            글목록
          </button>
        </div>
      </div>
    </>
  );
};

export default Recomend_write;
