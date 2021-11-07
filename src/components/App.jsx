import ButtonSection from "components/ButtonSection";
import HeaderSection from "components/HeaderSection";
import OtpContainer from "components/OtpContainer";
import React from "react";

export default function App() {
  return (
    <div className="otpBox">
      <HeaderSection />
      <OtpContainer />
      <ButtonSection />
    </div>
  );
}
