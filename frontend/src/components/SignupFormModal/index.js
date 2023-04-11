import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from "./SignupForm";
import './SignupForm.css'

function SignupFormModal() {
  const [showSignupForm, setShowSignupForm] = useState(false);

  const handleSignupFormClose = () => {
    setShowSignupForm(false);
  };

  return (
    <>
       {showSignupForm && (
        <Modal onClose={handleSignupFormClose}>
          <SignupForm onClose={handleSignupFormClose} />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;