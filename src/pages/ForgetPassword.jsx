import Container from "../components/Container";
import FormInput from "../components/form/FromInput";
import Submit from "../components/form/Submit";
import { NavLink } from "react-router-dom";
import Title from "../components/form/Title";

const ForgetPaassword = () => {
  return (
   <div
      className="fixed inset-0 bg-primary -z-10 flex justify-center
   items-center"
    >
      <Container>
        <form className="bg-secondary rounded p-6 w-96 space-y-6">
          <Title>Please Enter Your Email</Title>
          <FormInput label="Email" placeholder="XXX@gmail.com" name="Email" />
          <Submit value="Send Link" />
          <div className="flex justify-between">
            <NavLink
              to="/auth/signin"
              className="text-dark-subtle hover:text-white transition"
            >
              Sign In
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
export default ForgetPaassword;
