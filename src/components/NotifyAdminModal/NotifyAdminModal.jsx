import React from "react";
import SuccessfullyDone from "../../assets/SuccessfullyDone.png";
import "./NotifyAdminModal.css";

const BankAccountModal = ({closeModal}) => {
  return (
    <div className="modal_overlay" onClick={closeModal}>
      <div className="modal_content">
        <div className="icon_container">
          <img src={SuccessfullyDone} alt='Check'></img>
        </div>
        <h3 className="success_header">Admin has been notified</h3>
<<<<<<< HEAD
        <p className="success_details">"Your wallet would be credited soon"</p>
=======
        <p className="success_details">
        "Your wallet would be credited soon"
        </p>
>>>>>>> 5875411 (copy-to-clipboard icon and description text)
        <div className="btn_container">
          <button className="done_btn" onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default BankAccountModal;
