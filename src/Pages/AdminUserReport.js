import React, { useState } from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import BgLeft from "../Components/BgLeft.js";
import "../Styles/AdminUserReport.css";

const AdminUserReport = () => {
  const [reports, setReports] = useState([
    {
      id: 1,
      title: "@쿠팡 할인 이벤트@",
      status: "대기 중",
      createDate: "2022-05-09",
      reason: "광고성, 도배, 허위정보",
    },
    {
      id: 2,
      title: "허위 리뷰 작성",
      status: "완료",
      createDate: "2022-05-08",
      reason: "광고성, 도배, 허위정보",
    },
    {
      id: 3,
      title: "욕설 게시글",
      status: "대기 중",
      createDate: "2022-05-07",
      reason: "선정성, 정치관련, 혐오감, 저작권 위반",
    },
    {
      id: 4,
      title: "혐오 게시글",
      status: "대기 중",
      createDate: "2022-05-07",
      reason: "선정성, 정치관련, 혐오감, 저작권 위반",
    },
    {
      id: 2,
      title: "허위 리뷰 작성",
      status: "완료",
      createDate: "2022-05-08",
      reason: "광고성, 도배, 허위정보",
    },
    {
      id: 2,
      title: "허위 리뷰 작성",
      status: "완료",
      createDate: "2022-05-08",
      reason: "광고성, 도배, 허위정보",
    },
    {
      id: 2,
      title: "허위 리뷰 작성",
      status: "완료",
      createDate: "2022-05-08",
      reason: "광고성, 도배, 허위정보",
    },
    {
      id: 2,
      title: "허위 리뷰 작성",
      status: "완료",
      createDate: "2022-05-08",
      reason: "광고성, 도배, 허위정보",
    },
    {
      id: 2,
      title: "허위 리뷰 작성",
      status: "완료",
      createDate: "2022-05-08",
      reason: "광고성, 도배, 허위정보",
    },
    {
      id: 2,
      title: "허위 리뷰 작성",
      status: "완료",
      createDate: "2022-05-08",
      reason: "광고성, 도배, 허위정보",
    },
  ]);
    
  const [selectedReport, setSelectedReport] = useState(null);

  return (
    <>
      <BgLeft />

      <main>
        <Header />
        <section className="user-mypagereport">
          <div className="userlist-title">
            <h3>신고 관리</h3>
          </div>
          <hr className="hr-line" />
          <div className="report-category">
            <div className="report-category-item">
              전체 신고 <span className="category-count">10</span>
            </div>
            <div className="report-category-item">
              신고 대기 <span className="category-count">3</span>
            </div>
            <div className="report-category-item">
              처리 완료 <span className="category-count">7</span>
            </div>
          </div>
          <div className="separationArea" />
          <div className="userlist-title">
            <p>신고 리스트</p>
          </div>
          <table className="admin-user-report-table">
            <thead className="admin-table-title">
              <tr>
                <th className="admin-user-report-item-title">제목</th>
                <th className="admin-user-report-item-date">날짜</th>
                <th className="admin-user-report-item-date">진행</th>
              </tr>
            </thead>
            <tbody>
              {reports.length !== 0 ? (
                reports.map((report) => (
                  <tr
                    key={report.id}
                    onClick={() => {
                      setSelectedReport(report);
                    }}
                    className="admin-user-report-row"
                  >
                    <td
                      className="admin-user-report-item-title"
                      onClick={() => {
                        console.log(`Report ${report.id} clicked`);
                      }}
                    >
                      {report.title}
                    </td>
                    <td className="admin-user-report-item-date">
                      {report.createDate}
                    </td>
                    <td className="admin-user-report-item-date">
                      <div
                        className={`admin-user-report-item-status ${
                          report.status === "대기 중"
                            ? "admin-user-report-item-status-processing"
                            : ""
                        }`}
                      >
                        {report.status}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="admin-user-report-none">
                    신고 내역이 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
            {selectedReport && (
              <div className="modal-wrapper">
                <div className="modal-content admin-user-report-modal">
                  <div className="modal-header">
                    <h2>신고 내용</h2>
                  </div>
                  <div className="modal-body">
                    {selectedReport.status === "완료" ? (
                      <>
                        <b>처리완료</b>
                        <p>{selectedReport.reason}</p>
                      </>
                    ) : (
                      <p>{selectedReport.reason}</p>
                    )}
                  </div>
                  <div className="modal-footer">
                    {selectedReport.status === "완료" ? (
                      <>
                        <button onClick={() => setSelectedReport(null)}>
                          취소
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => console.log("신고 처리")}
                            style={{ backgroundColor: "red", color: "white" }}
                        >
                          신고 처리
                        </button>
                        <button onClick={() => setSelectedReport(null)}>
                          취소
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </table>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default AdminUserReport;
