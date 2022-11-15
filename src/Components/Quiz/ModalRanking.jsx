import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import styles from './ModalRanking.module.css'
import ModalInfoUser from './ModalInfoUser';


export default function ModalRanking({ user, closeModal }) {
    const [show, setShow] = useState(true);
    const [ranking, setRanking] = useState(null)
    const [infoUser , setInfoUser] = useState(false)
    const [openModalInfoUser , setOpenModalInfoUser] = useState(false)
    // const [number, setNumber] = useState(0)
    var number = 1

    useEffect(() => {
        getRanking()
    }, []);

    const getRanking = async () => {
        var json = await axios.get('https://countries-app-zqvw.onrender.com/api/users/All')

        let ranking = json.data
       let filterUser = ranking.sort(function(a,b) {
            if(a.point < b.point){
               return 1
            }
             if (b.point < a.point){
                 return -1
             }
             return 0
         }) 
       let top20 = filterUser.slice(0,20)
        setRanking(top20)

    }

    console.log('ranking', ranking)

    ;
    const closeModalInfoUser = () => {
        setInfoUser(null)
        setOpenModalInfoUser(false)
    }

    const handleInfoUser = (e , user) => {
        setInfoUser(user)
        setOpenModalInfoUser(true)
    }


    return (
        <>  {openModalInfoUser ? <ModalInfoUser user={infoUser} closeModal={closeModalInfoUser}/> : null}

            <Modal show={show}>
                <Modal.Header closeButton onClick={() => closeModal()} >
                    <Modal.Title>Hola {user.name} este es el ranking de usuarios  </Modal.Title>
                </Modal.Header>
                <Modal.Body><p>* Puedes ver la información de los usuarios cliqueando su nickname </p>
                    {ranking ? ranking.map((user) => {
                        return (<div className={styles.divRanking} ><h3 className={styles.title} >*  <div><p>{number++}  </p> </div></h3> 
                        <p className={styles.text} onClick={(e) => handleInfoUser(e , user)}> {user.name} </p> <div className={styles.pointContainer}>
                            <div className={styles.pointContainer}><button className={styles.point} >{user.point}</button></div>
                        </div>{(number === 0) ?  (<p className={styles.pointContainer}>🏆</p>)  : null } </div>  )
                    }): <p>Loading..</p>}

                </Modal.Body>
            </Modal>
        </>
    );
}
