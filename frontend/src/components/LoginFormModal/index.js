import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "./LoginForm";
import "./LoginForm.css";

function LoginFormModal() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginFormClose = () => {
    setShowLoginForm(false);
  };

  return (
    <>
       {showLoginForm && (
        <Modal onClose={handleLoginFormClose}>
          <LoginForm onClose={handleLoginFormClose} />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
