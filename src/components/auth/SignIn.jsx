import Container from "../Container";
import FormInput from "../form/FromInput";
import Submit from "../form/Submit";
import Title from "../form/Title";
import { NavLink } from "react-router-dom";
const SignIn = () => {
  return (
    <div
      className="fixed inset-0 bg-primary -z-10 flex justify-center
     items-center"
    >
      <Container>
        <form className="bg-secondary rounded p-6 w-72 space-y-6">
          <Title>Sign In</Title>
          <FormInput label="Email" placeholder="XXX@gmail.com" name="Email" />
          <FormInput label="Password" placeholder="*******" name="Password" />
          <Submit value="Sign In" />
          <div className="flex justify-between">
            <NavLink
              to="/auth/forgetPassword"
              className="text-dark-subtle hover:text-white transition"
            >
              Forgot Password?
            </NavLink>
            <NavLink
              to="/auth/signup"
              className="text-dark-subtle hover:text-white transition"
            >
              Sign Up
            </NavLink>
          </div>
        </form>
      </Container>
    </div>
  );
};
export default SignIn;
