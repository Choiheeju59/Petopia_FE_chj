import React from "react";
import { useEffect } from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import BgLeft from "../Components/BgLeft.js";
import { Link } from "react-router-dom";
import "../Styles/Login.css";

const SocialLoginSuccess = ({ user, setUser }) => {
  useEffect(() => {}, [user]);

  const handleLogout = () => {
    //setGetToken("");
    localStorage.removeItem("com.naver.nid.access_token");
    localStorage.removeItem("access_token");
    sessionStorage.removeItem("email");
    window.location.href = `http://localhost:3000/`;
  };

  return (
    <>
      <BgLeft />

      <main className="RouteTripSection">
        <Header />
        <section>
          <>
            <div className="container loginComponent">
              <div className="input-form-backgroud row">
                <div className="input-form col-md-12 mx-auto signUpForm">
                  <h4 className="mb-3 signUpText">간편 회원가입</h4>

                  {/* <div>
                    <h5>getToken</h5>
              <p>{getToken}</p>
              <h5>localStorage.getItem("com.naver.nid.access_token")</h5>
              <p>{localStorage.getItem("com.naver.nid.access_token")}</p>
              <h5>localStorage.getItem("access_token")</h5>
              <p>{localStorage.getItem("access_token")}</p>
                    <h3>사용자 이름</h3>
                    {user && user.name ? <p>{user.name}</p> : null}
                    <h3>사용자 닉네임</h3>
                    {user && user.nickname ? <p>{user.nickname}</p> : null}
                    <h3>사용자 이메일</h3>
                    {user && user.email ? <p>{user.email}</p> : null}
                    <h3>사용자 프로필사진</h3>
                    {user && user.profile_image ? (
                      <img src={user.profile_image} alt="" />
                    ) : null}
                  </div> */}

                  <div className="socialLoginSuccessDiv">
                    <table className="socialLoginSuccessTable">
                      <tr className="socialLoginSuccessTr socialLoginSuccessTrProfile">
                        <td className="socialLoginSuccessTdTitle">프로필</td>
                        <td className="socialLoginSuccessTd socialLoginSuccessTdProfile">
                          {user && user.profile_image ? (
                            <img
                              src={user.profile_image}
                              alt=""
                              className="socialLoginSuccessTdProfileImg"
                            />
                          ) : null}
                        </td>
                      </tr>
                      <tr className="socialLoginSuccessTr">
                        <td className="socialLoginSuccessTdTitle">이메일</td>
                        <td className="socialLoginSuccessTd">
                          {user && user.email ? <p>{user.email}</p> : null}
                        </td>
                      </tr>
                      <tr className="socialLoginSuccessTr">
                        <td className="socialLoginSuccessTdTitle">이름</td>
                        <td className="socialLoginSuccessTd">
                          {user && user.name ? <p>{user.name}</p> : null}
                        </td>
                      </tr>
                      <tr className="socialLoginSuccessTr">
                        <td className="socialLoginSuccessTdTitle">닉네임</td>
                        <td className="socialLoginSuccessTd">
                          {user && user.nickname ? (
                            <p>{user.nickname}</p>
                          ) : null}
                        </td>
                      </tr>
                    </table>
                  </div>

                  <div className="custom-control custom-checkbox signupCheckAgreeDiv socialLoginSuccessAgreeDiv">
                    <input
                      type="checkbox"
                      className="custom-control-input signupCheckAgreeBox"
                      id="aggrement"
                      required
                    />
                    <label className="custom-control-label" htmlFor="aggrement">
                      &nbsp;&nbsp;개인정보 수집 및 이용에 동의합니다.
                    </label>
                  </div>

                  <br />

                  <form className="validation-form" onSubmit={() => {}}>
                    <div className="findidpwsignupDiv">
                      <Link
                        to="/findaccountemail"
                        style={{ textDecoration: "none" }}
                      >
                        <p className="p_idpw">이메일 찾기 </p>
                      </Link>
                      |
                      <Link
                        to="/findaccountpassword"
                        style={{ textDecoration: "none" }}
                      >
                        <p className="p_idpw"> 비밀번호 찾기 </p>
                      </Link>
                      |
                      <Link to="/login" style={{ textDecoration: "none" }}>
                        <p className="p_idpw"> 로그인</p>
                      </Link>
                    </div>

                    <br />

                    <div className="mb-4 signUpBtnDiv">
                      <button
                        className="btn btn-outline-primary btn-sm btn-block signUpBtn"
                        type="submit"
                      >
                        회원가입
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default SocialLoginSuccess;
