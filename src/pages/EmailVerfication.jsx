import Container from "../components/Container";
import Submit from "../components/form/Submit";
import Title from "../components/form/Title";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import FormContainer from "../components/form/FormContainer";
import { commonModelsClassed } from "../utils/theme";
import { verifyUserEmail } from "../api/auth";
const OTP_LENGTH = 6;
const EmailVerfication = () => {
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));
  const [activeOtpIndex, setActiveOtpIndex] = useState(0);

  const input = useRef();

  const history = useHistory();

  const { state } = useLocation();
  const user = state?.state.user;
  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1, value.length);

    if (!value) {
      focusPrevInputField(index);
    } else {
      focusNextInputField(index);
    }
    setOtp([...newOtp]);
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      focusPrevInputField(index);
    }
  };
  const focusPrevInputField = (index) => {
    let nextIndex;
    const diff = index - 1;
    nextIndex = diff !== 0 ? diff : 0;
    setActiveOtpIndex(nextIndex);
  };
  const focusNextInputField = (index) => {
    setActiveOtpIndex(index + 1);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    if (!isValidOtp(otp)) return console.log("otp is invalid");
    const { error, message } = await verifyUserEmail({
      OTP: otp.join(""),
      userId: user.id,
    });
    if (error) return console.log(error);
    console.log(message);
  };
  const isValidOtp = (otp) => {
    let valid = false;

    for (let val of otp) {
      valid = !isNaN(parseInt(val));
      if (!valid) break;
    }
    return valid;
  };
  useEffect(() => {
    input.current?.focus();
  }, [activeOtpIndex]);
  useEffect(() => {
    if (!user) {
      history.push("/not-found");
    }
  }, []);
  return (
    <FormContainer>
      <Container>
        <form onSubmit={handleSubmit} className={commonModelsClassed}>
          <div>
            <Title>Please Enter the OTP to verify your account</Title>
            <p className="text-center dark:text-dark-subtle text-light-subtle">
              OTP has been sent to your email
            </p>
          </div>
          <div className="flex justify-center items-center space-x-4 ">
            {otp.map((_, index) => {
              return (
                <input
                  className="w-12 h-12 border-2 dark:border-dark-subtle border-light-subtle
               dark:focus:border-white focus:border-primary rounded bg-transparent outline-none
               text-center dark:text-white text-primary text-xl font-semibold 
               spin-button-none"
                  type="number"
                  value={otp[index]}
                  key={index}
                  onChange={(e) => handleOtpChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={activeOtpIndex === index ? input : null}
                />
              );
            })}
          </div>
          <Submit value="Verify account" />
        </form>
      </Container>
    </FormContainer>
  );
};
export default EmailVerfication;
