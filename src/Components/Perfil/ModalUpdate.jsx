import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import styles from './ModalUpdate.module.css';
import { updateUser } from "../../Redux/actions";
import { useDispatch, useSelector } from 'react-redux';


export default function ModalCreateCountry({ user, closeModal }) {
    const dispatch = useDispatch()

    const [show, setShow] = useState(true);


    const [input, setInput] = useState({
        name:user.name,
        descripcion:user.descripcion,
        imagen_profile:user.imagen_profile,
        userId: user.id
    })
    console.log("input" , input)

    const handleInputChange = function (e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const handleUpdateUser = ( e) => {
        e.preventDefault()
        dispatch(updateUser(input))
        setTimeout(function () {
            window.location.reload();
          }, 2500);
    }



    return (

        <Modal show={show}>
            <Modal.Header closeButton onClick={() => closeModal()} >
                <Modal.Title> Actualiza tu informacion del Perfil </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div >

                    <form >
                        <div className={styles.firstDiv}>
                            <div className={styles.inputContainer}>
                                <label className={styles.text}> Nombre : </label>
                                <input className={styles.input}
                                    value={input.name}
                                    type="text"
                                    name='name'
                                    maxLength='60'
                                    minLength='8'
                                    placeholder="Nombre del pais"
                                    onChange={(e) => handleInputChange(e)}
                                />

                                <label className={styles.text} >Descripción :</label>
                                <input className={styles.input} 
                                placeholder="Descripcion"  
                                type="textarea" 
                                name='descripcion'
                                value={input.descripcion} 
                                onChange={(e) => handleInputChange(e)}></input>


                                <label className={styles.text} >Foto de perfil {'*url'} :</label>
                                <input className={styles.input} type="url"
                                    value={input.continent}
                                    name='imagen_profile'
                                    placeholder="Imagen de perfil"
                                    onChange={(e) => handleInputChange(e)} />

                            </div>
                            <button className={styles.button} onClick={(e) => handleUpdateUser(e)}>Cambio!</button>
                        </div>
                    </form>
                </div>

            </Modal.Body>
        </Modal>
    );
};