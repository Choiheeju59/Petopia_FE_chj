import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import BgLeft from "../Components/BgLeft.js";
import { useNavigate, useParams } from "react-router-dom";
import "../Styles/ReviewMain.css";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const ReviewMain = () => {
  const navigate = useNavigate();
  const { lat, lng } = useParams();
  const [placedata, setPlacedata] = useState({});
  const [reviewlocation, setReviewlocation] = useState({
    // 랜더링시 좌표보다 지도가 먼저 랜더링되어 지도 깨짐현상 방지
    lat: 37.498004414546934,
    lng: 127.02770621963765,
  });

  useEffect(() => {
    getPlace();
  }, []);

  const getPlace = () => {
    axios
      .get("/getplace", {
        params: { lat: lat, lng: lng },
      })
      .then((res) => {
        console.log("데이터 = >", res.data);
        setPlacedata(res.data);
        setReviewlocation({
          lat: res.data.lat,
          lng: res.data.lng,
        });
      });
  };

  return (
    <>
      <BgLeft />

      <main>
        <Header />
        <section>
          <Map // 지도를 표시할 Container
            center={{
              // 지도의 중심좌표
              lat: reviewlocation.lat,
              lng: reviewlocation.lng,
            }}
            style={{
              // 지도의 크기
              width: "360px",
              height: "350px",
            }}
            level={3} // 지도의 확대 레벨
          >
            <MapMarker // 마커를 생성합니다
              position={{
                // 마커가 표시될 위치입니다
                lat: placedata.lat,
                lng: placedata.lng,
              }}
            />
          </Map>
          <div className="reviewMainTitle">
            <span>{placedata.facility_name}</span>
          </div>
          <div className="reviewMainRating">
            <b>⭐&nbsp;{/* 별점 */}4.5</b>
            <span
              className="reviewMainCounting"
              onClick={() => {
                navigate(-1); // 리뷰페이지로 이동
              }}
            >
              리뷰 {/* 리뷰개수 */}13개 &gt;
            </span>
          </div>
          <div className="reviewMainList">
            <div className="reviewMainListBox">
              <span className="reviewMainListTitle">반려동물 체형</span>
              <br />
              <span className="">{placedata.animal_size_info}</span>
            </div>
            <div className="reviewMainListBox">
              <span className="reviewMainListTitle">허용공간</span>
              <br />
              <span className="">{placedata.indoor_facility_info}</span>
              <br />
              <span className="">{placedata.outdoor_facility_info}</span>
            </div>
            <div className="reviewMainListBox">
              <span className="reviewMainListTitle">특이사항</span>
              <br />
              <span className="">{placedata.pet_restriction_info}</span>
            </div>
          </div>
          <div className="reviewMainInfo">
            <table border={0}>
              <thead>
                <tr>
                  <th width={"100px"}>영업정보</th>
                  <td>&nbsp;</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td width={"100px"}>상호명</td>
                  <td>{placedata.facility_name}</td>
                </tr>
                <tr>
                  <td width={"100px"}>주소</td>
                  <td>{placedata.lot_address}</td>
                </tr>
                <tr>
                  <td width={"100px"}>전화번호</td>
                  <td>{placedata.phone_number}</td>
                </tr>
                <tr>
                  <td width={"100px"}>홈페이지</td>
                  {placedata.homepage === "정보없음" ? (
                    <td>{placedata.homepage}</td>
                  ) : (
                    // <td>{placedata.homepage}</td>
                    <td>
                      <a
                        href={"http://" + placedata.homepage}
                        target="blank"
                        className="reviewMainInfoLink"
                      >
                        {placedata.homepage}
                      </a>
                    </td>
                  )}
                </tr>
                <tr>
                  <td width={"100px"}>영업시간</td>
                  <td>{placedata.operation_time}</td>
                </tr>
                <tr>
                  <td width={"100px"}>휴무일</td>
                  <td>{placedata.holiday}</td>
                </tr>
                <tr>
                  <td width={"100px"}>주차여부</td>
                  <td>{placedata.parking_info}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default ReviewMain;
