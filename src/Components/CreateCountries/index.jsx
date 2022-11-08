import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser, getAllUsers, loginUser } from "../../Redux/actions/index";
import { useSelector } from "react-redux";
import { FcCheckmark } from "react-icons/fc"
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';





export default function ModalCreateCountry({ user , handleClose}) {


 

    const [show, setShow] = useState(true);
    const [modalError, setModalError] = useState(false)
    const [modalErrorMessage, setModalErrorMessage] = useState(null)
    const [input, setInput] = useState({
        name: "",
        flag: "",
        continent: "",
        capital: "",
        subregion: "",
        area: "",
        population: "",
        unMember: "",
        location: "",
        timezones: "",
        userCountries: user.id

    })
    

    const handleInputChange = function (e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

   const history = useHistory();
    const dispatch = useDispatch()



    return (

        <Modal show={show}>
            <Modal.Header closeButton onClick={handleClose} >
                <Modal.Title> Crea tu propio pais </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>

                    <form >
                        <div>
                        <label>Nombre</label>
                            <input
                               
                                value={input.name}
                                type="text"
                                name="name"
                                maxLength='60'
                                minLength='8'
                                placeholder="Nombre del pais"
                                onChange={(e) => handleInputChange(e)}
                            />
                        

                        </div>
                        <div >
                            <label >Bandera</label>
                            <input  type="url" value={input.image} name="image" onChange={(e) => handleInputChange(e)}></input>
                        </div>
                        <div>
                        <label >Continente</label>
                            <input type="email"
                               
                                value={input.email}
                                name='email'
                                placeholder="Email"
                                onChange={(e) => handleInputChange(e)} />
                        </div>
                        <div>
                        <label>Capital</label>
                            <input
                                value={input.password}
                                type="text"
                                placeholder="Contraseña"
                                name='password'
                                onChange={(e) => handleInputChange(e)} />
                        </div>

                        <div>
                        <label>Sub Region</label>
                            <input type="text"
                             
                                value={input.email}
                                name='email'
                                placeholder="Email"
                                onChange={(e) => handleInputChange(e)} />
                        </div>
                        <div>
                        <label>Poblacion</label>
                            <input 
                                value={input.password}
                                type= "text"
                                placeholder="Contraseña"
                                name='password'
                                onChange={(e) => handleInputChange(e)} />
                        </div>
                        <div>
                        <label>Area</label>
                            <input 
                                value={input.password}
                                type="text" 
                                placeholder="Contraseña"
                                name='password'
                                onChange={(e) => handleInputChange(e)} />
                        </div>
                        <div>
                        <label>Localizacion</label>
                            <input 
                                value={input.password}
                                type= "text" 
                                placeholder="Contraseña"
                                name='password'
                                onChange={(e) => handleInputChange(e)} />
                        </div>
                        <div>
                        <label>Zona horaria</label>
                            <input 
                                value={input.password}
                                type= "text" 
                                placeholder="Contraseña"
                                name='password'
                                onChange={(e) => handleInputChange(e)} />
                        </div>
                        {/* {modalError ? <ModalError error={modalErrorMessage} closeModal={handleCloseModalError} /> : null} */}
                    </form>
                </div>

            </Modal.Body>
        </Modal>
    );
};