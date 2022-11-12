import React, { useState , useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link , useHistory } from 'react-router-dom';
import preguntas from './Quest'
import QuizGameOver from './ModalGameOver'
import ModalGameOver from './ModalGameOver';
import styles from './Quiz.module.css'

export default function ModalQuiz({ user, closeModal }) {
  const [show, setShow] = useState(true);
  const [quest , setQuest] = useState(false)
  const [preguntaActual , setPreguntaActual] = useState(false)
  const [puntuacion , setPuntuacion] = useState(0)
  const [errorQuest , setErrorQuest] = useState(0)
  const [gameOver , setGameOver] = useState(false)
  const [isfinished , setIsFinished] = useState(false)



  useEffect(() => {
    if(quest == false){setQuest(preguntas)}
    if(preguntaActual === false){random(0 , preguntas.length -1)}
    return() =>{
      setPuntuacion(0)
      setQuest(false)
      setPreguntaActual(false)
      setErrorQuest(0)
      setGameOver(false)
   }
  }, []);

    function random(min, max) {
        if(quest.length === 0){
            return isfinished(true)
        }
    return setPreguntaActual(Math.floor((Math.random() * (max - min + 1)) + min)) ;
    }

    const questDiscard = () => {
        let discard = quest.filter( (e) => (e.titulo !== preguntas[preguntaActual].titulo))
            setQuest(discard)
    }

    const handleAnswerSumbit = async (isCorrect , e ) => {
        e.preventDefault()
        if(errorQuest === 3){
            return setGameOver(true)
        }

        if(isCorrect === true){
            setPuntuacion(puntuacion + 1)
           await questDiscard()
            return random(0 , quest.length -1 )
        }
        else{
            setErrorQuest(errorQuest +1 )
            await questDiscard()
            return random(0 , quest.length -1)
        }
    }
  console.log('preguntas', quest)
  return (
    <>

      <Modal show={show}>
        <Modal.Header closeButton onClick={() =>  closeModal()} >
          <Modal.Title> QuizCountries 🌍  </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {gameOver ? <ModalGameOver user={user} score={puntuacion} /> : null}
            {!quest ? <p>Loading..</p> : 
            <div>
         

         <div className={styles.title}><p>{quest[preguntaActual]?.titulo}</p></div>
            
          <div className={styles.title}> {quest[preguntaActual]?.opciones?.map((r) => { 
            return (<button className={styles.button} className={styles.button} key={r.titulo} onClick={(e) => handleAnswerSumbit(r.isCorrect , e)}>{r.textoRespuesta}</button>)
            
          })}</div>
          
          </div>}
        </Modal.Body>
      </Modal>
    </>
  );
}