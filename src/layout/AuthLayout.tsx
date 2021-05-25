import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";

import Home from "../pages/home/Home";
import Auth from "../pages/auth/Auth";

const AuthLayout = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  return (
    <>
      {token ? (
        <>
          <Home />
        </>
      ) : (
        <Auth/>
      )}
    </>
  );
};

export default AuthLayout;
