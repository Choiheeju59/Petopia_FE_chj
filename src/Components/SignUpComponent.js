import "../Styles/Login.css";
import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NaverLogin from "./SocialLogin/NaverLogin";

const SignUpComponent = ({ user, setUser }) => {
  const name = useRef("");
  const nickname = useRef("");
  const email = useRef("");
  const birthdate = useRef("");
  const password1 = useRef("");
  const password2 = useRef("");

  const regCheck = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;

  const navigate = useNavigate();

  const checkCharacter = (event) => {
    if (
      regCheck.test(name.current.value) ||
      regCheck.test(nickname.current.value) ||
      regCheck.test(password1.current.value) ||
      regCheck.test(password2.current.value)
    ) {
      //event.preventDefault();
      alert("특수문자는 포함될 수 없습니다.");
    } else if (password1.current.value !== password2.current.value) {
      //event.preventDefault();
      alert("비밀번호가 일치하지 않습니다.");
      return;
    } else {
      alert("회원가입을 환영합니다.");
      navigate("/login");
    }
    console.log(
      name.current.value +
        "\n" +
        nickname.current.value +
        "\n" +
        email.current.value +
        "\n" +
        birthdate.current.value +
        "\n" +
        password1.current.value
    );
  };

  // 카카오 로그인
  const Rest_api_key = `${process.env.REACT_APP_RESTAPI_KAKAO_APP_KEY}`; //REST API KEY
  const redirect_uri = "http://localhost:3000/kakaologin"; //Redirect URI
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code&prompt=login`;

  const [getToken, setGetToken] = useState("");

  return (
    <>
      <div className="container loginComponent">
        <div className="input-form-backgroud row">
          <div className="input-form col-md-12 mx-auto signUpForm">
            <h4 className="mb-3 signUpText">회원가입</h4>

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

            <form
              className="validation-form"
              id="submitForm"
              onSubmit={(event) => checkCharacter(event)}
            >
              <div className="signUpRow">
                <div className="col-md-5 mb-3 signUpName">
                  {/* <Form.Text muted className="formText">
                    성명
                  </Form.Text> */}
                  <label htmlFor="name"></label>
                  <input
                    type="text"
                    className="form-control signUpFormInput"
                    id="name"
                    name="name"
                    ref={name}
                    placeholder="이름"
                    maxLength="10"
                    required
                  />
                  <div className="invalid-feedback">이름을 입력해주세요.</div>
                </div>
                <div className="col-md-6 mb-3 signUpNickname">
                  {/* <Form.Text muted className="formText">
                    닉네임
                  </Form.Text> */}
                  <label htmlFor="nickname"></label>
                  <input
                    type="text"
                    className="form-control signUpFormInput"
                    id="nickname"
                    name="nickname"
                    ref={nickname}
                    placeholder="닉네임"
                    maxLength="10"
                    required
                  />
                  <div className="invalid-feedback">닉네임을 입력해주세요.</div>
                </div>
              </div>

              <div className="mb-3 signUpRow">
                {/* <Form.Text muted className="formText">
                  이메일
                </Form.Text> */}
                <label htmlFor="email"></label>
                <input
                  type="email"
                  className="form-control signUpFormInput"
                  id="email"
                  name="email"
                  placeholder="이메일"
                  ref={email}
                  maxLength="40"
                  required
                />
                <div className="invalid-feedback">이메일을 입력해주세요.</div>
              </div>

              <div className="mb-3 signUpRow">
                {/* <Form.Text muted className="formText">
                  생년월일
                </Form.Text> */}
                <label htmlFor="birth"></label>
                <input
                  type="date"
                  className="form-control signUpFormInput signUpFormInputDate"
                  id="birth"
                  name="birth"
                  placeholder="서울특별시 강남구"
                  data-placeholder="생년월일"
                  ref={birthdate}
                  required
                />
                <div className="invalid-feedback">생년월일을 입력해주세요.</div>
              </div>

              <div className="mb-3 signUpRow">
                {/* <Form.Text muted className="formText">
                  비밀번호
                </Form.Text> */}
                <label htmlFor="address"></label>
                <input
                  type="password"
                  className="form-control signUpFormInput"
                  id="password1"
                  name="password1"
                  placeholder="비밀번호"
                  ref={password1}
                  maxLength="20"
                  required
                />
                <div className="invalid-feedback">비밀번호를 입력해주세요.</div>
              </div>

              <div className="mb-3 signUpRow">
                {/* <Form.Text muted className="formText">
                  비밀번호 확인
                </Form.Text> */}
                <label htmlFor="password"></label>
                <input
                  type="password"
                  className="form-control signUpFormInput"
                  id="password2"
                  placeholder="비밀번호 확인"
                  name="password2"
                  ref={password2}
                  maxLength="20"
                  required
                />
                <div className="invalid-feedback">
                  비밀번호를 다시 한 번 입력해주세요.
                </div>
              </div>
              {/* <hr class="mb-4" /> */}
              <div className="custom-control custom-checkbox signupCheckAgreeDiv">
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
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <p className="p_idpw"> 로그인</p>
                </Link>
              </div>
              <br />
              <div className="mb-4 signUpBtnDiv">
                <button
                  className="btn btn-primary btn-sm btn-block signUpBtn"
                  type="submit"
                >
                  가입 완료
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpComponent;
