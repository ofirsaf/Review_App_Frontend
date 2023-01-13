import Container from "../components/Container";
import FormInput from "../components/form/FromInput";
import Submit from "../components/form/Submit";
import { NavLink } from "react-router-dom";
import Title from "../components/form/Title";
import FormContainer from "../components/form/FormContainer";
import { commonModelsClassed } from "../utils/theme";
import { useState } from "react";
import { forgetPassword } from "../api/auth";
import { useNotfication } from "../hooks";
import { isValidEmail } from "../utils/helper";

const ForgetPaassword = () => {
  const { updateNotifcation } = useNotfication();
  const [email, setEmail] = useState("");
  const handleChange = ({ target }) => {
    const { value } = target;
    setEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(email))
      return updateNotifcation("error", "Email is invalid");

    const { message, error } = await forgetPassword(email);
    if (error) return updateNotifcation("error", error);

    updateNotifcation("success", message);
  };
  return (
    <FormContainer>
      <Container>
        <form onSubmit={handleSubmit} className={commonModelsClassed + " w-96"}>
          <Title>Please Enter Your Email</Title>
          <FormInput
            label="Email"
            placeholder="XXX@gmail.com"
            value={email}
            name="Email"
            onChange={handleChange}
          />
          <Submit value="Send Link" />
          <div className="flex justify-between">
            <NavLink
              to="/auth/signin"
              className="dark:text-dark-subtle text-light-subtle dark:hover:text-white hover:text-primary transition"
            >
              Sign In
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
export default ForgetPaassword;
