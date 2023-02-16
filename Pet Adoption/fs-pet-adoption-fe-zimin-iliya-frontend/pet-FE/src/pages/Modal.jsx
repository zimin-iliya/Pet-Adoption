import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CreateAcc from "./createAcc";
import Login from "./login";


function Modal() {
  const [isSignUp, setisSignUp] = useState(false);
  const [modal, setModal] = useState(false);

  // useEffect(() => {
  //   toggleModal();
  // }, []);
  // function useMountEffect(effectFn, useEffect(effectFn,[]));

  // useMountEffect(toggleModal())
  const toggleSignUp = (e) => {
    e.preventDefault();
    setisSignUp(!isSignUp);
  };
  const toggleModal = (e) => {
    e.preventDefault();
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <div className="modalwrap">
      <a href="#" onClick={toggleModal}>
        Login
      </a>
      <>
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <div>
                {!isSignUp && (<><Login /><a href="#" onClick={toggleSignUp}>
                      {" "}
                      Create an account{" "}
                    </a>
                  </>
                )}
                {isSignUp && (<><CreateAcc /><a href="#" onClick={toggleSignUp}>{" "}
                Back to Login{" "}
              </a>
              </>
                )}
                
              </div>
              <button className="close-modal" onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        )}
      </>
    </div>
  );
}
export default Modal;
