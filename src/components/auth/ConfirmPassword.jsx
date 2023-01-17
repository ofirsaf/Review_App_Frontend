import React, { useEffect } from "react";
import { commonModelsClassed } from "../../utils/theme";
import Container from "../Container";
import { useParams } from "react-router-dom";
import FormContainer from "../form/FormContainer";
import FormInput from "../form/FromInput";
import Submit from "../form/Submit";
import Title from "../form/Title";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { ImSpinner3 } from "react-icons/im";
import { resetPassword, verifyPasswordResetToken } from "../../api/auth";
import { useNotfication } from "../../hooks";
const ConfirmPassword = () => {
  const { updateNotifcation } = useNotfication();
  const history = useHistory();
  const { id } = useParams();
  const { token } = useParams();
  const [isVerifying, setIsVerifying] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [password, setPassword] = useState({
    one: "",
    two: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setPassword({ ...password, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password.one.trim()) {
      return updateNotifcation("error", "Password is required");
    }
    if (password.one.trim().length < 8) {
      return updateNotifcation("error", "Password must be 8 characters long");
    }
    if (password.one !== password.two) {
      return updateNotifcation("error", "Passwords do not match!");
    }
    const { error, message } = await resetPassword({
      newPassword: password.one,
      userId: id,
      token,
    });
    if (error) {
      return updateNotifcation("error", error);
    }
    updateNotifcation("success", message);
    history.push("/auth/signin", { replace: true });
  };
  useEffect(() => {
    isValidToken();
  }, []);
  const isValidToken = async () => {
    if (id == undefined || token == undefined) {
      history.push("/auth/reset-password", { replace: true });
      setIsVerifying(false);
      console.log("Invalid Token");
      return updateNotifcation("error", "Invalid Token");
    }
    const { error, valid } = await verifyPasswordResetToken(token, id);
    setIsVerifying(false);

    if (error) {
      history.push("/auth/reset-password", { replace: true });
      return updateNotifcation("error", error);
    }
    if (!valid) {
      setIsValid(false);
      return history.push("/auth/reset-password", { replace: true });
    }
    setIsValid(true);
  };
  if (isVerifying) {
    return (
      <FormContainer>
        <Container>
          <div className="flex space-x-2 items-center ">
            <h1 className="text-4xl font-semibold dark:text-white text-primary">
              Please wait we are verfiying your token
            </h1>
            <ImSpinner3 className="animate-spin text-4xl dark:text-white text-primary" />
          </div>
        </Container>
      </FormContainer>
    );
  }
  if (!isValid) {
    return (
      <FormContainer>
        <Container>
          <h1 className="text-4xl font-semibold dark:text-white text-primary">
            Sorry the token is invalid!
          </h1>
        </Container>
      </FormContainer>
    );
  }
  return (
    <FormContainer>
      <Container>
        <form onSubmit={handleSubmit} className={commonModelsClassed + " w-96"}>
          <Title>Please Enter New Password</Title>
          <FormInput
            label="New Password"
            placeholder="*******"
            name="one"
            type="password"
            value={password.one}
            onChange={handleChange}
          />
          <FormInput
            label="Confirm Password"
            placeholder="*******"
            name="two"
            type="password"
            value={password.two}
            onChange={handleChange}
          />
          <Submit value="Confirm Password" />
        </form>
      </Container>
    </FormContainer>
  );
};
export default ConfirmPassword;
