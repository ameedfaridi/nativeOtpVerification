import React, { useRef, useState } from "react";
import { isNumeric } from "utils";

export default function OtpContainer() {
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");
  const [otp6, setOtp6] = useState("");

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  const handlePaste = (text) => {
    if (isNumeric(text)) {
      if (text.length === 1) {
        setOtp1(text[0] || "");
      }
      if (text.length === 2) {
        setOtp1(text[0] || "");
        setOtp2(text[1] || "");
        ref2.current.focus();
      }
      if (text.length === 3) {
        setOtp1(text[0] || "");
        setOtp2(text[1] || "");
        setOtp3(text[2] || "");
        ref3.current.focus();
      }
      if (text.length === 4) {
        setOtp1(text[0] || "");
        setOtp2(text[1] || "");
        setOtp3(text[2] || "");
        setOtp4(text[3] || "");
        return ref4.current.focus();
      }
      if (text.length === 5) {
        setOtp1(text[0] || "");
        setOtp2(text[1] || "");
        setOtp3(text[2] || "");
        setOtp4(text[3] || "");
        setOtp5(text[4] || "");
        return ref5.current.focus();
      }
      if (text.length === 6) {
        setOtp1(text[0] || "");
        setOtp2(text[1] || "");
        setOtp3(text[2] || "");
        setOtp4(text[3] || "");
        setOtp5(text[4] || "");
        setOtp6(text[5] || "");
        return ref6.current.focus();
      }
    }
  };

  //eventBubbling
  const handleKeyDown = ({ key, keyCode, target: { name } }) => {
    const keyIsNumber =
      (keyCode > 47 && keyCode < 58) || (keyCode > 95 && keyCode < 106);
    const clear = key === "Backspace";
    const arrowLeft = key === "ArrowLeft";
    const arrowRight = key === "ArrowRight";

    if (name === "otp1") {
      if (keyIsNumber) {
        setOtp1(key);
        ref2.current.focus();
      } else if (clear) {
        setOtp1("");
      } else if (arrowRight) {
        ref2.current.focus();
      }
    }

    if (name === "otp2") {
      if (keyIsNumber) {
        setOtp2(key);
        ref3.current.focus();
      } else if (clear) {
        setOtp2("");
        ref1.current.focus();
      } else if (arrowRight) {
        ref3.current.focus();
      } else if (arrowLeft) {
        ref1.current.focus();
      }
    }
    if (name === "otp3") {
      if (keyIsNumber) {
        setOtp3(key);
        ref4.current.focus();
      } else if (clear) {
        setOtp3("");
        ref2.current.focus();
      } else if (arrowRight) {
        ref4.current.focus();
      } else if (arrowLeft) {
        ref2.current.focus();
      }
    }

    if (name === "otp4") {
      if (keyIsNumber) {
        setOtp4(key);
        ref5.current.focus();
      } else if (clear) {
        setOtp4("");
        ref3.current.focus();
      } else if (arrowRight) {
        ref5.current.focus();
      } else if (arrowLeft) {
        ref3.current.focus();
      }
    }

    if (name === "otp5") {
      if (keyIsNumber) {
        setOtp5(key);
        ref6.current.focus();
      } else if (clear) {
        setOtp5("");
        ref4.current.focus();
      } else if (arrowRight) {
        ref6.current.focus();
      } else if (arrowLeft) {
        ref4.current.focus();
      }
    }

    if (name === "otp6") {
      if (keyIsNumber) {
        setOtp6(key);
      } else if (clear) {
        setOtp6("");
        ref5.current.focus();
      } else if (arrowLeft) {
        ref5.current.focus();
      }
    }
  };

  return (
    <div
      className="otpContainer"
      onPaste={(e) => handlePaste(e.clipboardData.getData("Text"))}
      onKeyDown={handleKeyDown}
    >
      <input
        type="text"
        maxLength="1"
        name="otp1"
        value={otp1}
        ref={ref1}
        autoFocus={true}
      />
      <input type="text" maxLength="1" name="otp2" ref={ref2} value={otp2} />
      <input type="text" maxLength="1" name="otp3" ref={ref3} value={otp3} />
      <input type="text" maxLength="1" name="otp4" value={otp4} ref={ref4} />
      <input type="text" maxLength="1" name="otp5" value={otp5} ref={ref5} />
      <input type="text" maxLength="1" name="otp6" value={otp6} ref={ref6} />
    </div>
  );
}
