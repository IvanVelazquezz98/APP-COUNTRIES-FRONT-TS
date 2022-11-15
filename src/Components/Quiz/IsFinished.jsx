import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link , useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserScore } from '../../Redux/actions';
import styles from './isFinished.module.css'

export default function ModalIsFinished({ user, score }) {
  const [show, setShow] = useState(true);
  
  
  const [userScore , setUserScore] = useState({
    userId: user.id,
    point: score
  })

  const dispatch = useDispatch()

  const handleSumbitScore = () => {
    dispatch(updateUserScore(userScore))
    setTimeout(function () {
      window.location.reload();
    }, 2500);
  }
  
  return (
    <>

      <Modal show={show}>
        <Modal.Header >
          <Modal.Title> Wow! 🤯 </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.title}>Has respondido todas las preguntas de forma exitosa sin perder las 3 vidas</div>
          <p className={styles.text}>🏆 Sin duda te ganaste un lugar en los mejores usuarios 🏆</p>
          <p className={styles.text}>🏆 Te has ganado una insignia por tu hazaña, puedes chequear tu perfil 🏆</p>
            <button  className={styles.button} onClick={(e) => handleSumbitScore()}>Subir Puntuación 🚀</button> <button className={styles.button}>Dar feedBack en el foro</button>
        </Modal.Body>
      </Modal>
    </>
  );
}