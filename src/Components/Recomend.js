import "bootstrap/dist/css/bootstrap.css";
import Recomend_best from "./RecomendComponent/Recomend_best";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Recomend_Viewall from "./RecomendComponent/Recomend_viewall";
import "../Styles/RecomendStyle.css";
import { Link } from "react-router-dom";
import Board from "./Board";
import Paginationcm from "./Paginationcm";

const Recomend = () => {
  return (
    <div className="RecomendBody">
      <h2 className="h2_Recomend">공간 보기</h2>

      <div>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="검색할 내용을 입력하세요"
            className="me-1 w-75 searchBar"
            aria-label="Search"
          />
          <Button className="searchBtn" variant="outline-primary" size="sm">
            검색
          </Button>
        </Form>
      </div>

      <h3 className="h3_Recomend">금주의 BEST!</h3>

      <Recomend_best
        picture="img/recommend_best1.png"
        title="안동 한옥마을의 전경이 한 눈..안동 한옥마을의 전경이 한 눈..안동 한옥마을의 전경이 한 눈..안동 한옥마을의 전경이 한 눈..안동 한옥마을의 전경이 한 눈..안동 한옥마을의 전경이 한 눈..안동 한옥마을의 전경이 한 눈.."
        writer="petopia"
        view="111"
        like="5"
      />
      <Recomend_best
        picture="img/recommend_best2.png"
        title="양양 여행코스 추천!!"
        writer="fasd"
        view="612"
        like="63"
      />
      <Recomend_best
        picture="img/recommend_best3.png"
        title="송도 센트럴파크 안 가면 손해야"
        writer="qwer"
        view="437"
        like="44"
      />

      <h3 className="h3_Recomend">전체 보기</h3>

      <div className="recomendWriteBtn">
        <Link to="/routetripwrite">
          <Button className="searchBtn" variant="outline-primary" size="sm">
            추천 등록하기
          </Button>
        </Link>
      </div>

      <div className="recommendation recommendAllBoardDiv">
        <div className="recommendation-title"></div>
        <Board />
        <Paginationcm />
      </div>

      {/* <Recomend_Viewall /> */}
    </div>
  );
};

export default Recomend;
