import { useNavigate } from "react-router-dom";
import "./Register.css";
import Card from "../../layout/Card";
import useValidate from "hooks/use-validate";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => isNotEmpty(value) && value.includes("@");
const passwordLength = (value) => value.length >= 8;

function Register() {
  const navigate = useNavigate();
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

  function addUser(inputEmail, inputPassword) {
    const existUsers = JSON.parse(localStorage.getItem("userArr"));
    const newUser = { email: inputEmail, password: inputPassword };

    if (existUsers === null) {
      const firstUser = [newUser];
      localStorage.setItem("userArr", JSON.stringify(firstUser));
      alert("Complete registration");
    } else {
      const duplicatedUser = existUsers.findIndex(
        (user) => user.email === newUser.email
      );
      if (duplicatedUser > -1) {
        existUsers.splice(duplicatedUser, 1, newUser);
        alert("Success update user information");
      } else {
        existUsers.push(newUser);
        alert("Complete registration");
      }
      localStorage.setItem("userArr", JSON.stringify(existUsers));
    }
  }

  function submitHandler(event) {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted");
    addUser(emailValue, passwordValue);

    resetEmail();
    resetPassword();
  }

  const emailClasses = emailHasError ? "invalid" : "";
  const passwordClasses = passwordHasError ? "invalid" : "";

  return (
    <div className="register">
      <Card>
        <p className="title">Sign Up</p>
        <form className="login-form" onSubmit={submitHandler}>
          <input
            type="text"
            id="name"
            value=""
            onChange={() => {}}
            onBlur={() => {}}
            placeholder="Full Name"
          />
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
          <input
            type="tel"
            id="phone"
            value=""
            onChange={() => {}}
            onBlur={() => {}}
            placeholder="Phone"
          />
          <button type="submit" disabled={!formIsValid}>
            SIGN UP
          </button>
        </form>
        <p className="signin">
          Login?{" "}
          <span onClick={() => navigate("/login")} style={{ color: "blue" }}>
            Click
          </span>
        </p>
      </Card>
    </div>
  );
}

export default Register;
