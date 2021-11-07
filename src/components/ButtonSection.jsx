import React from "react";
export default function ButtonSection({}) {
  return (
    <div>
      <div className="btnContainer">
        <input type="submit" value="Change Number" />
        <input type="submit" value="Re-send OTP" />
      </div>
      <center>
        <input
          type="submit"
          value="Verify Phone Number"
          className="verifyBtn"
        />
      </center>
    </div>
  );
}
