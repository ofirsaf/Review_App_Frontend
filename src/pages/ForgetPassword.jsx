import Container from "../components/Container";
import FormInput from "../components/form/FromInput";
import Submit from "../components/form/Submit";
import { NavLink } from "react-router-dom";
import Title from "../components/form/Title";
import FormContainer from "../components/form/FormContainer";
import { commonModelsClassed } from "../utils/theme";

const ForgetPaassword = () => {
  return (
    <FormContainer>
      <Container>
        <form className={commonModelsClassed + " w-96"}>
          <Title>Please Enter Your Email</Title>
          <FormInput label="Email" placeholder="XXX@gmail.com" name="Email" />
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
