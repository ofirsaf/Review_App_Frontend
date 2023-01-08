import Container from "../Container";
import FormInput from "../form/FromInput";
import Submit from "../form/Submit";
import Title from "../form/Title";
import { NavLink } from "react-router-dom";
import { commonModelsClassed } from "../../utils/theme";
import FormContainer from "../form/FormContainer";

const SignIn = () => {
  return (
    <FormContainer>
      <Container>
        <form className={commonModelsClassed + " w-72"}>
          <Title>Sign In</Title>
          <FormInput label="Email" placeholder="XXX@gmail.com" name="Email" />
          <FormInput label="Password" placeholder="*******" name="Password" />
          <Submit value="Sign In" />
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
