import Container from "../Container";
import FormInput from "../form/FromInput";
import Submit from "../form/Submit";
import Title from "../form/Title";
import { NavLink } from "react-router-dom";
import { commonModelsClassed } from "../../utils/theme";
import FormContainer from "../form/FormContainer";
import { useState } from "react";
import { createUser } from "../../api/auth";
import { useHistory } from "react-router-dom";
import { useNotfication } from "../../hooks";
import { useAuth } from "../../hooks";
import { useEffect } from "react";
import { isValidEmail } from "../../utils/helper";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { authInfo } = useAuth();
  const { isLoggedIn } = authInfo;
  useEffect(() => {
    console.log(isLoggedIn);
    if (isLoggedIn) {
      history.push("/");
    }
  }, [isLoggedIn]);

  const history = useHistory();
  const { updateNotifcation } = useNotfication();
  const [confirmPassword, setConfirmPassword] = useState("");
  const { name, email, password } = userInfo;
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const validateUserInfo = ({ name, email, password }) => {
    const isVlilidName = /^[a-z A-Z]+$/;
    if (!name.trim()) return { ok: false, error: "Name is required" };
    if (!isVlilidName.test(name))
      return { ok: false, error: "Name is invalid" };
    if (!email.trim()) return { ok: false, error: "Email is required" };
    if (!isValidEmail.test(email))
      return { ok: false, error: "Email is invalid" };
    if (!password.trim()) return { ok: false, error: "Password is required" };
    if (password.length < 8)
      return { ok: false, error: "Password is too short, 8 charchterr" };
    if (password !== confirmPassword)
      return { ok: false, error: "Passwords do not match" };
    return { ok: true };
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    validateUserInfo(userInfo);
    const res = validateUserInfo(userInfo);
    if (res.ok) {
      const { error, user } = await createUser(userInfo);
      if (error) {
        return updateNotifcation("error", error);
      }
      history.push("/auth/verification", {
        state: { user: user },
        replace: true,
      });
    } else {
      updateNotifcation("error", res.error);
    }
  };
  return (
    <FormContainer>
      <Container>
        <form onSubmit={handleSubmit} className={commonModelsClassed + "w-72"}>
          <Title>Sign Up</Title>
          <FormInput
            label="Name"
            value={name}
            placeholder="Ofir Safin"
            name="name"
            onChange={handleChange}
            required
          />
          <FormInput
            label="Email"
            value={email}
            placeholder="XXX@gmail.com"
            name="email"
            onChange={handleChange}
            required
          />
          <FormInput
            label="Password"
            value={password}
            placeholder="*******"
            type="password"
            name="password"
            onChange={handleChange}
            required
          />
          <FormInput
            label="Confirm Password"
            placeholder="*******"
            name="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Submit value="Sign Up" />
          <div className="flex justify-between">
            <NavLink
              className="dark:text-dark-subtle text-light-subtle dark:hover:text-white hover:text-primary transition"
              to="/auth/forgetPassword"
            >
              Forgot Password?
            </NavLink>
            <NavLink
              className="dark:text-dark-subtle text-light-subtle dark:hover:text-white hover:text-primary transition"
              to="/auth/signin"
            >
              Sign In
            </NavLink>
          </div>
        </form>
      </Container>
    </FormContainer>
  );
};
export default SignUp;
