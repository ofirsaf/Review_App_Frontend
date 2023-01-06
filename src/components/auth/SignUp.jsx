import Container from "../Container";
import FormInput from "../form/FromInput";
import Submit from "../form/Submit";
import Title from "../form/Title";
import { NavLink } from "react-router-dom";
const SignUp = () => {
  return (
    <div
      className="fixed inset-0 bg-primary -z-10 flex justify-center
     items-center"
    >
      <Container>
        <form className="bg-secondary rounded p-6 w-72 space-y-3">
          <Title>Sign Up</Title>
          <FormInput label="Email" placeholder="XXX@gmail.com" name="Email" />
          <FormInput label="Name" placeholder="Ofir Safin" name="name" />
          <FormInput label="Password" placeholder="*******" name="Password" />
          <FormInput
            label="Confirm Password"
            placeholder="*******"
            name="Confirm Password"
          />
          <Submit value="Sign Up" />
          <div className="flex justify-between">
            <NavLink
              className="text-dark-subtle hover:text-white transition"
              to="/auth/forgetPassword"
            >
              Forgot Password?
            </NavLink>
            <NavLink
              className="text-dark-subtle hover:text-white transition"
              to="/auth/signin"
            >
              Sign In
            </NavLink>
          </div>
        </form>
      </Container>
    </div>
  );
};
export default SignUp;
