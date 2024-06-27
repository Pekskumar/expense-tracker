import React, { useState } from "react";
// import leftImg from "../../Assets/Images/man3.jpg";
import leftImg from "../../Assets/Images/bg1.jpg";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import Logo1 from "../../Assets/Images/Logo12.png";
const AuthLayout = () => {
  const [PageShowFlag, setPageShowFlag] = useState(false);
  return (
    <>
      <div className="login-page">
        <img src={leftImg} alt="leftImg" className="login-left" />
        <div className="login-right">

          <div className="w-100">
            <div className="text-center pb-3 d-flex
    justify-content-center
    align-items-center">
              <img src={Logo1} style={{ height: "50px", width: "50px" }} />
              {/* <h5 className="mb-0 text-start">Expense <br/> Tracker</h5> */}
            </div>
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
