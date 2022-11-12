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
    var number = 0

    useEffect(() => {
        getRanking()
    }, []);

    const getRanking = async () => {
        var json = await axios.get('http://localhost:3001/api/users/All')

        let ranking = top5(json.data)
        setRanking(json.data)

    }



    function top5(users) {
        users = users?.point?.parseFloat(users.point).sort((a, b) => b - a);
        return [users?.point[0], users?.point[1], users?.point[2], users?.point[3], users?.point[4], users?.point[5]];
    };
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
                <Modal.Body><p>* Puedes ver la informacion de los usuarios clickeando su nickname </p>
                    {ranking ? ranking.map((useRef) => {
                        return (<div className={styles.divRanking} ><h3 className={styles.title} >* {number + 1}</h3> 
                        <p className={styles.text} onClick={(e) => handleInfoUser(e , user)}> {user.name} </p> <div className={styles.pointContainer}>
                            <button className={styles.point} >{user.point}</button>
                        </div>{(number === 1) ? <p className={styles.pointContainer}>🏆</p> : null } </div> )
                    }): <p>Loading..</p>}

                </Modal.Body>
            </Modal>
        </>
    );
}