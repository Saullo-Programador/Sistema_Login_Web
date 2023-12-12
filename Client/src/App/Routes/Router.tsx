import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import UseApi from '../Shared/Hooks/UseApi'
import HomeScreens from "../Pages/Home/HomeScreens";
import SigninScreens from "../Pages/Signin/SigninScreens";
import SignupScreens from "../Pages/Signup/SignupScreens";

interface PrivateProps {
  Item: React.ComponentType;
}

const Private: React.FC<PrivateProps> = ({ Item }) => {
  const { signed } = UseApi();

  return signed ? <Item /> : <SigninScreens />;
};

const RouterPages: React.FC = () => {
  return (
    <>
      <Fragment>
        <Routes>
          <Route path="/home" element={<Private Item={HomeScreens} />} />
          <Route path="/" element={<SigninScreens />} />
          <Route path="/signup" element={<SignupScreens />} />
          <Route path="*" element={<SigninScreens />} />
        </Routes>
      </Fragment>
    </>
  )
}

export default RouterPages