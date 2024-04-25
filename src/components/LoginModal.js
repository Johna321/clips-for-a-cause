// components/LoginModal.js

import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    width: '300px',
    height: '200px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#A5D3D6',
    color: '#000',
    alignItems: 'center',
    background: '#fff',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
};

const LoginModal = ({ isOpen, onRequestClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      ariaHideApp={false}
    >
      <h2>To track your donation history and receive more benefits, please log in.</h2>
    </Modal>

  );
};

export default LoginModal;
