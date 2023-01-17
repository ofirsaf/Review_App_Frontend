import React from "react";
import { useAuth } from "../../hooks";
import { useHistory } from "react-router-dom";
import Container from "../Container";

export default function NotVerfied() {
  const { authInfo } = useAuth();
  const history = useHistory();
  const { isLoggedIn } = authInfo;
  const isVerified = authInfo.profile?.isVerified;
  const navigateToVerfication = (e) => {
    e.preventDefault();
    console.log(authInfo);
    history.push("/auth/verification", { state: { user: authInfo.profile } });
  };
  return (
    <Container>
      {isLoggedIn && !isVerified ? (
        <p className="text-lg text-center bg-blue-50 p-2">
          It looks like you haven't verified your account,{" "}
          <button
            onClick={navigateToVerfication}
            className="text-blue-500 font-semibold hover:underline"
          >
            click here to verify your account.
          </button>
        </p>
      ) : null}
    </Container>
  );
}
