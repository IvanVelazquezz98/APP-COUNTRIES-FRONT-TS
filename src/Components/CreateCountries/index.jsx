import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import styles from './CreateCountry.module.css';
import axios from 'axios';
import ModalError from "../ModalError/modalError";
import ModalVistaPrevia from "./ModalVistaPrevia";



export default function ModalCreateCountry({ user, handleClose }) {




    const [show, setShow] = useState(true);
    const [modalError, setModalError] = useState(false)
    const [modalErrorMessage, setModalErrorMessage] = useState(null)
    const [openVistaPrevia , setVistaPrevia] = useState(false)

    const [input, setInput] = useState({
        name: "",
        flag: "",
        continent: "",
        capital: "",
        subregion: "",
        area: "",
        population: "",
        location: "",
        timezones: "",
        userId: user.id

    })

    const handleCloseModalError = () => {
        setModalError(false)
    }
    const handleInputChange = function (e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const handleVistaPrevia = (e) => {
        e.preventDefault()
        if(!input.name || !input.flag ||
            !input.continent || !input.subregion ||
            !input.area || !input.population ||
            !input.location || !input.timezones ){
            return setModalError(true) , 
            setModalErrorMessage('Debes llenar todos los campos') }
            else{
                setVistaPrevia(true)
            }
    }

    const handleCloseModaVistaPrevia = () => {
        setVistaPrevia(false)
    }



    return (

        <Modal show={show}>
            <Modal.Header closeButton onClick={handleClose} >
                <Modal.Title> Crea tu propio pais 🌎 </Modal.Title>
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

                                <label className={styles.text} >Bandera :</label>
                                <input className={styles.input} 
                                placeholder="Bandera"  
                                type="url" 
                                name='flag'
                                value={input.flag} 
                                onChange={(e) => handleInputChange(e)}></input>


                                <label className={styles.text} >Continente :</label>
                                <input className={styles.input} type="text"
                                    value={input.continent}
                                    name='continent'
                                    placeholder="Continente"
                                    onChange={(e) => handleInputChange(e)} />


                                <label className={styles.text}>Capital :</label>
                                <input className={styles.input}
                                    value={input.capital}
                                    type="text"
                                    name='capital'
                                    placeholder="Capital"
                                    onChange={(e) => handleInputChange(e)} />


                                <label className={styles.text}>Sub Region :</label>
                                <input className={styles.input} type="text"
                                    value={input.subregion}
                                    name='subregion'
                                    placeholder="Sub Region"
                                    onChange={(e) => handleInputChange(e)} />

                                <label className={styles.text}>Población :</label>
                                <input className={styles.input}
                                    value={input.population}
                                    type="text"
                                    name='population'
                                    placeholder="Poblacion"
                                    onChange={(e) => handleInputChange(e)} />

                                <label className={styles.text}>Area :</label>
                                <input className={styles.input}
                                    value={input.area}
                                    type="text"
                                    name='area'
                                    placeholder="Area"
                                    onChange={(e) => handleInputChange(e)} />

                                <label className={styles.text}>Localización :</label>
                                <input className={styles.input}
                                    value={input.location}
                                    type="text"
                                    name='location'
                                    placeholder="Localizacion"
                                    onChange={(e) => handleInputChange(e)} />

                                <label className={styles.text}>Zona horaria :</label>
                                <input className={styles.input}
                                    value={input.timezones}
                                    name='timezones'
                                    type="text"
                                    placeholder="Zona horaria"
                                    onChange={(e) => handleInputChange(e)} />
                                    <button className={styles.button} onClick={(e) => handleVistaPrevia(e)}> Vista Previa </button>
                                {modalError ? <ModalError error={modalErrorMessage} closeModal={handleCloseModalError} /> : null}
                                {openVistaPrevia ? <ModalVistaPrevia country={input} closeModal={handleCloseModaVistaPrevia}  /> : null}
                            </div>
                        </div>
                    </form>
                </div>

            </Modal.Body>
        </Modal>
    );
};