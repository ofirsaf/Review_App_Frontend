import Container from "../components/Container";
import FormInput from "../components/form/FromInput";
import Submit from "../components/form/Submit";
import { NavLink } from "react-router-dom";
import Title from "../components/form/Title";
import { useEffect, useRef, useState } from "react";
import { Input } from "postcss";
const OTP_LENGTH = 6;
const EmailVerfication = () => {
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));
  const [activeOtpIndex, setActiveOtpIndex] = useState(0);
  const input = useRef();

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1, value.length);
    console.log(newOtp);
    setOtp([...newOtp]);
    setActiveOtpIndex(index + 1);
  };
  useEffect(() => {
    input.current?.focus();
  }, [activeOtpIndex]);

  return (
    <div
      className="fixed inset-0 bg-primary -z-10 flex justify-center
     items-center"
    >
      <Container>
        <form className="bg-secondary rounded p-6 space-y-6">
          <div>
            <Title>Please Enter the OTP to verify your account</Title>
            <p className="text-center text-dark-subtle">
              OTP has been sent to your email
            </p>
          </div>
          <div className="flex justify-center items-center space-x-4 ">
            {otp.map((_, index) => {
              return (
                <input
                  className="w-12 h-12 border-2 border-dark-subtle
               focus:border-white rounded bg-transparent outline-none
               text-center text-white text-xl font-semibold 
               spin-button-none"
                  type="number"
                  value={otp[index]}
                  key={index}
                  onChange={(e) => handleOtpChange(e, index)}
                  ref={activeOtpIndex === index ? input : null}
                />
              );
            })}
          </div>
          <Submit value="Verify account" />
        </form>
      </Container>
    </div>
  );
};
export default EmailVerfication;
