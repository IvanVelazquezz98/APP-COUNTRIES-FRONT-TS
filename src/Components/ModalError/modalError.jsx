import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link , useHistory } from 'react-router-dom';

export default function ModalError({ error, closeModal }) {
  const [showError, setShow] = useState(true);
  
  
  return (
    <>

      <Modal show={showError}>
        <Modal.Header closeButton onClick={() =>  closeModal()} >
          <Modal.Title> Ups! Error ⚠️ </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>{error}</div>
        </Modal.Body>
      </Modal>
    </>
  );
}