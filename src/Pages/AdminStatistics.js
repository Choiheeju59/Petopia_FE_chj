import React, { useState } from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import BgLeft from "../Components/BgLeft.js";
import "../Styles/AdminStatistics.css";

const AdminStatistics = () => {
  const [visitors, setVisitors] = useState({
    monthly: 1000,
    weekly: 250,
    daily: 50,
  });
  const [posts, setPosts] = useState(20);
  const [comments, setComments] = useState(100);
  const [reviews, setReviews] = useState(50);
  const [subscribers, setSubscribers] = useState(200);

  return (
    <>
      <BgLeft />

      <main>
        <Header />
        <section className="admin-statistics-container">
          <div className="statistics-title">
            <h3>통계 정보</h3>
          </div>
          <hr className="hr-line" />
          <div className="statistics-container">
            <div className="statistics-item">
              <h2>방문자 수</h2>
              <p>월간 방문자 수: {visitors.monthly}</p>
              <p>주간 방문자 수: {visitors.weekly}</p>
              <p>일간 방문자 수: {visitors.daily}</p>
            </div>
            <div className="statistics-item">
              <h2>글 수</h2>
              <p>등록된 글 수: {posts}</p>
            </div>
            <div className="statistics-item">
              <h2>댓글 수</h2>
              <p>등록된 댓글 수: {comments}</p>
            </div>
            <div className="statistics-item">
              <h2>리뷰 수</h2>
              <p>등록된 리뷰 수: {reviews}</p>
            </div>
            <div className="statistics-item">
              <h2>가입자 수</h2>
              <p>현재 가입자 수: {subscribers}</p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default AdminStatistics;
