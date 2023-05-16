import React, { useEffect, useState } from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import BgLeft from "../Components/BgLeft.js";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Login.css";
import axios from "axios";

const SocialLoginSuccessKakao = () => {
  const [user_id, setUserId] = useState();
  const [userEmail, setUserEmail] = useState();
  const [nickName, setNickName] = useState();
  const [profileImage, setProfileImage] = useState();
  const [provider, setProvider] = useState("kakao");

  const navigate = useNavigate();

  const getProfile = async () => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });
      // 사용자 정보 변수에 저장
      setUserId(data.id);
      setUserEmail(data.kakao_account.email);
      setNickName(data.properties.nickname);
      setProfileImage(data.properties.thumbnail_image);

      console.log(data);
      console.log("setUserEmail : ", data.kakao_account.email);
      console.log("setNickName : ", data.properties.nickname);
      sessionStorage.setItem("socialSession", "kakao");
      sessionStorage.setItem("email", data.kakao_account.email);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfile().then(() => {
      signUpCheck();
    });
  }, [userEmail]);

  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedText, setIsCheckedText] = useState("false");
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setIsCheckedText("true");
    } else if (!isChecked) {
      setIsCheckedText("false");
    } else {
      alert("WTF");
    }
    //alert("isCheckedText : ", isCheckedText);
    console.log("isCheckedText : ", isCheckedText);
  };

  const signUpCheck = () => {
    axios
      .post("http://localhost:8080/user/getUser", {
        email: userEmail,
        // provider: "kakao",
      })
      .then((res) => {
        console.log(res.data);
        if (res.data === null || res.data === undefined || res.data === "") {
          // signUpKakao();
        } else {
          sessionStorage.setItem("email", userEmail);
          navigate("/");
          // alert(
          //   "이미 존재하는 이메일 입니다. \n같은 이메일로 펫토피아 혹은 네이버 계정으로 가입했는지 확인해 주세요."
          // );
        }
      })
      .catch((e) => {
        console.error(e);
        console.log("userEmail : ", userEmail);
      });
  };

  const signUpKakao = () => {
    axios
      .post("http://localhost:8080/user/signupkakao", {
        email: userEmail,
        provider: provider,
        password: "",
        nickname: nickName,
        profileImage: profileImage,
      })
      .then((res) => {
        console.log(res.data);
        alert("카카오 간편 회원가입을 환영합니다.");
        navigate("/");
      })
      .catch((e) => {
        sessionStorage.setItem("email", userEmail);
        console.error(e);
        console.log("userEmail : ", userEmail);
        console.log("nickname : ", nickName);
        console.log("profileImage : ", profileImage);
        console.log("provider : ", provider);
      });
  };

  const clickSignUpKakao = () => {
    if (isChecked) {
      signUpKakao();
    } else if (!isChecked) {
      alert("개인정보 수집및 이용에 동의해 주세요.");
    }
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
                  <h4 className="mb-3 signUpText">
                    <span style={{ color: "#FEE500" }}>카카오</span> 간편
                    회원가입
                  </h4>

                  <div className="socialLoginSuccessDiv">
                    <table className="socialLoginSuccessTable">
                      <tr className="socialLoginSuccessTr socialLoginSuccessTrProfile">
                        <td className="socialLoginSuccessTdTitle">프로필</td>
                        <td className="socialLoginSuccessTd socialLoginSuccessTdProfile">
                          {profileImage ? (
                            <img
                              src={profileImage}
                              alt=""
                              className="socialLoginSuccessTdProfileImg"
                            />
                          ) : null}
                        </td>
                      </tr>
                      <tr className="socialLoginSuccessTr">
                        <td className="socialLoginSuccessTdTitle">이메일</td>
                        <td className="socialLoginSuccessTd">
                          {userEmail ? <p>{userEmail}</p> : null}
                        </td>
                      </tr>
                      {/* <tr className="socialLoginSuccessTr">
                        <td className="socialLoginSuccessTdTitle">이름</td>
                        <td className="socialLoginSuccessTd">
                          {user && user.name ? <p>{user.name}</p> : null}
                        </td>
                      </tr> */}
                      <tr className="socialLoginSuccessTr">
                        <td className="socialLoginSuccessTdTitle">닉네임</td>
                        <td className="socialLoginSuccessTd">
                          {nickName ? <p>{nickName}</p> : null}
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
                      checked={isChecked}
                      onChange={handleCheckboxChange}
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
                        type="button"
                        onClick={() => clickSignUpKakao()}
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
export default SocialLoginSuccessKakao;
