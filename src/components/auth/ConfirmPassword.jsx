import React from "react";
import { commonModelsClassed } from "../../utils/theme";
import Container from "../Container";
import { useParams } from "react-router-dom";
import FormContainer from "../form/FormContainer";
import FormInput from "../form/FromInput";
import Submit from "../form/Submit";
import Title from "../form/Title";
const ConfirmPassword = () => {
  const { id } = useParams();
  const { token } = useParams();
  
  return (
    <FormContainer>
      <Container>
        <form className={commonModelsClassed + " w-96"}>
          <Title>Please Enter New Password</Title>
          <FormInput
            label="New Password"
            placeholder="*******"
            name="password"
            type="password"
          />
          <FormInput
            label="Confirm Password"
            placeholder="*******"
            name="comfirmPassword"
          />
          <Submit value="Confirm Password" />
        </form>
      </Container>
    </FormContainer>
  );
};
export default ConfirmPassword;
