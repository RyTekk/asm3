import { useNavigate } from "react-router-dom";
import "./Login.css";
import Card from "../../layout/Card";
import useValidate from "hooks/use-validate";
import { useDispatch } from "react-redux";
import { loginAction } from "store/loginReducer";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => isNotEmpty(value) && value.includes("@");
const passwordLength = (value) => value.length >= 8;

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useValidate(isEmail);
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useValidate(passwordLength);

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  function checkUser(inputEmail, inputPassword) {
    const existUsers = JSON.parse(localStorage.getItem("userArr"));
    const userIndex = existUsers.findIndex((user) => user.email === inputEmail);

    if (userIndex > -1) {
      if (existUsers[userIndex].password === inputPassword) {
        return true;
      }
    }

    return false;
  }

  function submitHandler(event) {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    if (!checkUser(emailValue, passwordValue)) {
      alert("User is not existed or wrong password");
    } else {
      console.log("Submitted");
      dispatch(loginAction.login(emailValue));

      resetEmail();
      resetPassword();
      navigate("/");
    }
  }

  const emailClasses = emailHasError ? "invalid" : "";
  const passwordClasses = passwordHasError ? "invalid" : "";

  return (
    <div className="login">
      <Card>
        <p className="title">Sign In</p>
        <form className="login-form" onSubmit={submitHandler}>
          <div className={emailClasses}>
            <input
              type="email"
              id="email"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              placeholder="Email"
            />
          </div>
          <div className={passwordClasses}>
            <input
              type="password"
              id="password"
              value={passwordValue}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              placeholder="Password"
            />
          </div>
          <button type="submit" disabled={!formIsValid}>
            SIGN IN
          </button>
        </form>
        <p className="signup">
          Create an accout?{" "}
          <span onClick={() => navigate("/register")} style={{ color: "blue" }}>
            Sign up
          </span>
        </p>
      </Card>
    </div>
  );
}

export default Login;
