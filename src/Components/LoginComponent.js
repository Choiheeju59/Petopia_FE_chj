import "../Styles/Login.css";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import NaverLogin from "./SocialLogin/NaverLogin";

const LoginComponent = ({ user, setUser }) => {
  const email = useRef("");
  const password = useRef("");

  useEffect(() => {}, [user]);

  const clickLogin = () => {
    sessionStorage.setItem("email", email.current.value);
    const sessionEmail = sessionStorage.getItem("email");
    alert("세션값 임시 설정(email : " + sessionEmail + ")\n");
  };

  const [getToken, setGetToken] = useState("");

  // 카카오 로그인
  const Rest_api_key = `${process.env.REACT_APP_RESTAPI_KAKAO_APP_KEY}`; //REST API KEY
  const redirect_uri = "http://localhost:3000/kakaologin"; //Redirect URI
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code&prompt=login`;

  return (
    <>
      <div className="container loginComponent">
        <div className="input-form-backgroud row">
          <div className="input-form col-md-12 mx-auto signUpForm">
            <h4 className="mb-3 signUpText">로그인</h4>

            <div>
              <NaverLogin setGetToken={setGetToken} setUser={setUser} />

              <Link to={kakaoURL}>
                <img
                  className="socialLoginLogoRight"
                  src="img/kakao.png"
                  alt=""
                  type="button"
                />
              </Link>
            </div>

            <br />
            <p className="p_or">- OR -</p>

            <form className="validation-form" onSubmit={clickLogin}>
              <div className="mb-3 signUpRow">
                {/* <Form.Text muted className="formText">
                  이메일
                </Form.Text> */}
                <label htmlFor="email"></label>
                <input
                  type="email"
                  className="form-control signUpFormInput"
                  id="email"
                  placeholder="이메일"
                  ref={email}
                  name="email"
                  required
                />
                <div className="invalid-feedback">이메일을 입력해주세요.</div>
              </div>

              <div className="mb-3 signUpRow">
                {/* <Form.Text muted className="formText">
                  비밀번호
                </Form.Text> */}
                <label htmlFor="password"></label>
                <input
                  type="password"
                  className="form-control signUpFormInput "
                  id="password1"
                  placeholder="비밀번호"
                  //ref={password}
                  name="password"
                  required
                />
                <div className="invalid-feedback">비밀번호를 입력해주세요.</div>
              </div>
              <div className="findidpwsignupDiv">
                <Link to="/findaccountemail" style={{ textDecoration: "none" }}>
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
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <p className="p_idpw"> 회원가입</p>
                </Link>
              </div>

              <br />

              <div className="mb-4 signUpBtnDiv">
                <button
                  className="btn btn-outline-primary btn-sm btn-block signUpBtn"
                  type="submit"
                >
                  로그인
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
