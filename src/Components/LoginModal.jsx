import React, { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import gLogo from "../images/googleLogo.png";
import "./LoginModal.css";
import SignupModal from "./SignupModal";
import { useUserAuth } from "../Firebase/UserAuthContext.jsx";
import {auth,provider} from "../Firebase/FirebaseAuth"
import { signInWithPopup } from "@firebase/auth";

const LoginModal = ({ isModalOpen, openModal, closeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);

  const handleLoginClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("RESULT", result);
        const userName = result.user.displayName;
        closeModal();
        navigate("/", {
          state: {
            userName,
          },
        });
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
    console.log("Login btn clicked");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      console.log("logging in home");
      closeModal();
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  const openSignUpModal = () => {
    setSignUpModalOpen(true);
  };

  const closeSignUpModal = () => {
    setSignUpModalOpen(false);
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Login Modal"
        className="custom-modal"
        ariaHideApp={false}
        overlayClassName="custom-modal-overlay"
      >
        <div className="input-wrapper">
          <div className="input-modal">
            <div className="login-heading-box">
              <p className="log-sign-heading">Login/Sign Up On redBus</p>
              <button onClick={closeModal} className="closeBtn">
                ❌
              </button>
            </div>
            {error && <h3>{error}</h3>}
            <form onSubmit={handleSubmit}>
              <p className="description">
                Please provide your Mobile Number or Email to Login/ Sign Up on
                redBus
              </p>
              <input
                placeholder="Email"
                className="signin-input-email"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="Password"
                className="signin-input-password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="continue-btn">CONTINUE</button>
{/*               <p className="commonTextGrey">or login using</p>
        
              <div className="google-box" onClick={handleLoginClick}>
                <img className="gLogo" src={gLogo}></img>
                <h4 className="gName">Google</h4>
              </div> */}
              <div className="signUpBox">
                <h4 className="signUpLink">
                  {" "}
                  Don't have an account?
                  <p
                    style={{ color: "#ef6262", cursor: "pointer" }}
                    onClick={openSignUpModal}
                  >
                    Sign up
                  </p>
                </h4>
              </div>
            </form>
          </div>
        </div>
      </Modal>
      <SignupModal
        isSignUpModalOpen={isSignUpModalOpen}
        closeSignUpModal={closeSignUpModal}
      />
    </>
  );
};

export default LoginModal;

// const LoginModal = ({ isModalOpen, closeModal }) => {
//   return (
//     <Modal
//       isOpen={isModalOpen}
//       onRequestClose={closeModal} >
//       <div>
//         <h2>Login/Signup Modal</h2>
//         <p>This is your login/signup modal content.</p>
//         <button onClick={closeModal}>Close Modal</button>
//       </div>
//     </Modal>
//   );
// };

// export default LoginModal;
