import React from "react";
import SignIn from "../components/Auth/SignIn.jsx/SignIn";

export default function AuthPage({ auth }) {
  return (
    <>
      <SignIn auth={auth} />
    </>
  );
}
