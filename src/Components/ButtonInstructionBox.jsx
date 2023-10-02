import React, { useState } from "react";

const ButtonInstructionBox = ({ buttonName }) => {
  const [showBox, setShowBox] = useState(true);
  const [showCopied, setShowCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(buttonName);
    setShowCopied(true);

    setTimeout(() => {
      setShowCopied(false);
    }, 2000);
  };

  return (
    <>
      {showBox && (
        <div className="instruction-box">
          <span onClick={() => setShowBox(false)}>Close</span>
          <p>Instructions for {buttonName} button</p>
          <div className="copy-button">
            <button onClick={handleCopy}>
              <img
                src="path_to_copy_icon.png"
                alt="Copy to Clipboard"
                width="20"
                height="20"
              />
            </button>
            {showCopied && <span>is copied</span>}
          </div>
        </div>
      )}
    </>
  );
};

export default ButtonInstructionBox;
