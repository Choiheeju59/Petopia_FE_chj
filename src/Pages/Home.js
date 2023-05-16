import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../Styles/Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import BgLeft from "../Components/BgLeft.js";
import Board from "../Components/Board";
import { NavLink, useNavigate } from "react-router-dom";
import Kakao2 from "../Map/Kakao2.js";
import axios from "axios";

const slides = [
  {
    id: 1,
    image: "/img/Petopia_slide1.png",
  },
  {
    id: 2,
    image: "/img/Petopia_slide2.png",
  },
  {
    id: 3,
    image: "/img/Petopia_slide3.png",
  },
  {
    id: 4,
    image: "/img/Petopia_slide4.png",
  },
];

const Home = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // 4초 간격
    dots: true, // 점 표시 활성화
    arrows: false, // 좌우 화살표 비활성화
  };

  let navigate = useNavigate();

  // 카테고리 분류 useState
  const [maplist1, setMaplist1] = useState([]);
  const [maplist2, setMaplist2] = useState([]);
  const [maplist3, setMaplist3] = useState([]);
  const [maplist4, setMaplist4] = useState([]);
  const [maplist5, setMaplist5] = useState([]);
  const [maplist6, setMaplist6] = useState([]);
  const [maplist7, setMaplist7] = useState([]);
  const [maplist8, setMaplist8] = useState([]);
  const [maplist9, setMaplist9] = useState([]);
  const [maplist10, setMaplist10] = useState([]);
  const [maplist11, setMaplist11] = useState([]);
  const [maplist12, setMaplist12] = useState([]);

  // DB로부터 특정지역의 카테고리(업소)를 불러오기 위한 useState
  const [city, setCity] = useState("경기도"); // 지역1 DB 컬럼 city_name에 해당
  const [county, setCounty] = useState("안양시 만안구"); // 지역2 DB 컬럼 county_name에 해당

  useEffect(() => {
    getList(); // 메인페이지 랜더링시 DB데이터 받아오는 함수 호출 ( 지역 선택시 )
  }, [city, county]);

  // DB로부터 장소 받아오기
  const getList = () => {
    axios
      .get("http://localhost:8080/list", {})
      .then((res) => {
        const { data } = res;
        const category1 = []; // 동물병원
        const category2 = []; // 동물약국
        const category3 = []; // 문예회관
        const category4 = []; // 미술관
        const category5 = []; // 미용
        const category6 = []; // 박물관
        const category7 = []; // 반려동물용품
        const category8 = []; // 식당
        const category9 = []; // 여행지
        const category10 = []; // 위탁관리
        const category11 = []; // 카페
        const category12 = []; // 펜션

        // db로부터 데이터 받아올 때 카테고리 분류하는 작업
        for (var i = 0; i < data.length; i++) {
          if (
            data[i].category3 === "동물병원" &&
            data[i].city_name === city &&
            data[i].county_name === county
            // data[i].category3 === "여행지"
          ) {
            category1.push(data[i]);
          } else if (
            data[i].category3 === "동물약국" &&
            data[i].city_name === city &&
            data[i].county_name === county
          ) {
            category2.push(data[i]);
          } else if (
            // 문예회관 데이터 1000개이하 county_name선택 무관 전체출력
            data[i].category3 === "문예회관" &&
            data[i].city_name === city
          ) {
            category3.push(data[i]);
          } else if (
            // 미술관 데이터 1000개이하 county_name선택 무관 전체출력
            data[i].category3 === "미술관" &&
            data[i].city_name === city
          ) {
            category4.push(data[i]);
          } else if (
            data[i].category3 === "미용" &&
            data[i].city_name === city &&
            data[i].county_name === county
          ) {
            category5.push(data[i]);
          } else if (
            data[i].category3 === "박물관" &&
            data[i].city_name === city &&
            data[i].county_name === county
          ) {
            category6.push(data[i]);
          } else if (
            data[i].category3 === "반려동물용품" &&
            data[i].city_name === city &&
            data[i].county_name === county
          ) {
            category7.push(data[i]);
          } else if (data[i].category3 === "식당") {
            // 식당 데이터는 14개 지역선택 무관 전체출력
            category8.push(data[i]);
          } else if (
            // 여행지 데이터 1000개이하 county_name선택 무관 전체출력
            data[i].category3 === "여행지" &&
            data[i].city_name === city
          ) {
            category9.push(data[i]);
          } else if (data[i].category3 === "위탁관리") {
            // 위탁관리 데이터 100개이하 지역선택 무관 전체출력
            category10.push(data[i]);
          } else if (
            // 카페 데이터 1000개이하 county_name선택 무관 전체출력
            data[i].category3 === "카페" &&
            data[i].city_name === city
          ) {
            category11.push(data[i]);
          } else if (
            // 펜션 데이터 1000개이하 county_name선택 무관 전체출력
            data[i].category3 === "펜션" &&
            data[i].city_name === city
          ) {
            category12.push(data[i]);
          }
        }

        setMaplist1(category1);
        setMaplist2(category2);
        setMaplist3(category3);
        setMaplist4(category4);
        setMaplist5(category5);
        setMaplist6(category6);
        setMaplist7(category7);
        setMaplist8(category8);
        setMaplist9(category9);
        setMaplist10(category10);
        setMaplist11(category11);
        setMaplist12(category12);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <>
      <BgLeft />
      <main>
        <Header />
        <section>
          <div className="homeSlider">
            <Slider {...settings}>
              {slides.map((slide) => (
                <div key={slide.id}>
                  <img src={slide.image} />
                </div>
              ))}
            </Slider>
          </div>

          {/*지도 코드 들어갈 위치 */}
          <div className="containerIh">
            <div className="testmap">
              <Kakao2
                maplist1={maplist1}
                maplist2={maplist2}
                maplist3={maplist3}
                maplist4={maplist4}
                maplist5={maplist5}
                maplist6={maplist6}
                maplist7={maplist7}
                maplist8={maplist8}
                maplist9={maplist9}
                maplist10={maplist10}
                maplist11={maplist11}
                maplist12={maplist12}
                city={city}
                setCity={setCity}
                county={county}
                setCounty={setCounty}
              />
            </div>
          </div>

          {/* 여행지 추천 div */}

          <div className="recommendation">
            <div className="recommendation-title">
              <p>이번 주 Best 경로</p>
            </div>
            <NavLink to="/recomend_best" className="home-recommend-link">
              <div className="image-wrapper">
                <img src="img/recommend_best2.png" alt="image" />
              </div>
              <div className="boardTitle">
                <h7>양양 여행코스 추천!!</h7>
              </div>
              <div className="image-map-go">
                <p>자세히 보기</p>
              </div>
              <div className="stars-wrapper">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
              </div>
            </NavLink>
          </div>
          {/* 커뮤니티 게시글 div */}
          <div className="recommendation">
            <div className="recommendation-title">
              <p>이번 주 인기 게시글</p>
            </div>
            <Board />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Home;
