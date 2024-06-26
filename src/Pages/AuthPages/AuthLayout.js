import React, { useState } from "react";
import leftImg from "../../Assets/Images/man3.jpg";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
const AuthLayout = () => {
  const [PageShowFlag, setPageShowFlag] = useState(false);
  return (
    <>
      <div className="login-page">
        <img src={leftImg} alt="leftImg" className="login-left" />
        <div className="login-right">
          <div className="w-100">
            {PageShowFlag ? (
              <SignUpPage data={setPageShowFlag} />
            ) : (
              <LoginPage data={setPageShowFlag} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
