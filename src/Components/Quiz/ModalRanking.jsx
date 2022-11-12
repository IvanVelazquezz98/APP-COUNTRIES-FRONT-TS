import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'


export default function ModalRanking({ user, closeModal }) {
    const [show, setShow] = useState(true);
    const [ranking, setRanking] = useState(null)
    var number = 0

    useEffect(() => {
        getRanking()
    }, []);

    const getRanking = async () => {
        var json = await axios.get('http://localhost:3001/api/users/All')

        let ranking = top5(json.data)
        setRanking(json.data)

    }
    console.log('ranking', ranking)


    function top5(users) {
        users = users?.point?.parseFloat(users.point).sort((a, b) => b - a);
        return [users?.point[0], users?.point[1], users?.point[2], users?.point[3], users?.point[4], users?.point[5]];
    };


    return (
        <>

            <Modal show={show}>
                <Modal.Header closeButton onClick={() => closeModal()} >
                    <Modal.Title>Hola {user.name} este es el ranking de usuarios  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {ranking ? ranking.map((e) => {
                        return (<div><p> * {number + 1} : {e.name} </p><p>{e.point}</p></div> )
                    }): <p>Loading..</p>}

                </Modal.Body>
            </Modal>
        </>
    );
}