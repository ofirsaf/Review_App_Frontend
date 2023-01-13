import Container from "../Container";
import FormInput from "../form/FromInput";
import Submit from "../form/Submit";
import Title from "../form/Title";
import { NavLink } from "react-router-dom";
import { commonModelsClassed } from "../../utils/theme";
import FormContainer from "../form/FormContainer";
import { useEffect, useState } from "react";
import { useAuth, useNotfication } from "../../hooks";
import { useHistory } from "react-router-dom";
const SignIn = () => {
  const { updateNotifcation } = useNotfication();
  const history = useHistory();
  const { handleLogin, authInfo } = useAuth();
  const { isPending, isLoggedIn } = authInfo;
  useEffect(() => {
    console.log(isLoggedIn);
    if (isLoggedIn) {
      history.push("/");
    }
  }, [isLoggedIn]);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userInfo;
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const validateUserInfo = ({ name, email, password }) => {
    const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.trim()) return { ok: false, error: "Email is required" };
    if (!isValidEmail.test(email))
      return { ok: false, error: "Email is invalid" };
    if (!password.trim()) return { ok: false, error: "Password is required" };
    if (password.length < 8)
      return { ok: false, error: "Password is too short, 8 charchterr" };
    return { ok: true };
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { ok, error } = validateUserInfo(userInfo);
    if (!ok) {
      return updateNotifcation("error", error);
    }
    handleLogin(userInfo.email, userInfo.password);
  };
  return (
    <FormContainer>
      <Container>
        <form onSubmit={handleSubmit} className={commonModelsClassed + " w-72"}>
          <Title>Sign In</Title>
          <FormInput
            label="Email"
            value={email}
            placeholder="XXX@gmail.com"
            name="email"
            onChange={handleChange}
          />
          <FormInput
            label="Password"
            value={password}
            placeholder="*******"
            name="password"
            onChange={handleChange}
            type="password"
          />
          <Submit value="Sign In" busy={isPending} />
          <div className="flex justify-between">
            <NavLink
              to="/auth/forgetPassword"
              className="dark:text-dark-subtle text-light-subtle dark:hover:text-white hover:text-primary transition"
            >
              Forgot Password?
            </NavLink>
            <NavLink
              to="/auth/signup"
              className="dark:text-dark-subtle text-light-subtle dark:hover:text-white hover:text-primary transition"
            >
              Sign Up
            </NavLink>
          </div>
        </form>
      </Container>
    </FormContainer>
  );
};
export default SignIn;
