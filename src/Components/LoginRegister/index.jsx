import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser, getAllUsers } from "../../Redux/actions/index";
import { useSelector } from "react-redux";
import { FcCheckmark } from "react-icons/fc"
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import styles from './LoginRegister.module.css'



export default function LoginRegister({closeModalRegisterLogin})  {


  const history = useHistory();
  const dispatch = useDispatch()
  const [errorRegister, setErrorRegister] = useState(false)
  const [validate_name, setValidate_name] = useState("0px 3px 4px 0px rgba(0, 0, 0, 0.08)")
  const [validate_email, setValidate_email] = useState("0px 3px 4px 0px rgba(0, 0, 0, 0.08)")
  const [validate_password, setValidate_password] = useState("0px 3px 4px 0px rgba(0, 0, 0, 0.08)")
  const [closePopUp, setClosePopUp] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [show, setShow] = useState(true);



  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorsName, setErrorsName] = useState({
    name: "inicio"
  })
  const [errorsEmail, setErrorsEmail] = useState({
    email: "inicio"
  })
  const [errorsPassword, setErrorsPassword] = useState({
    password: "inicio"
  })

  function registerValidateEmail(input) {
    let nombreMax = 60
    let emailMax = 100
    let errorsEmail = {}

    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(input.email)) {

      errorsEmail = ""
      if (input.mail < emailMax) {

        errorsEmail = ""
      }

      if (!input.email) {

        errorsEmail = "error"
      }

    } else {

      errorsEmail = "error"
    }
    return errorsEmail
  }
  function registerValidateName(input) {
    let nombreMax = 60
    let emailMax = 100

    let errorsName = {}

    if (input.name.length < 1) {
      errorsName = "vacio"
    }
    if (input.name.length > 66 || input.name.length < 8) {
      errorsName = "largo"
    } else {

      errorsName = ""
    }
    return errorsName

  }

  function registerValidatePassword(input) {

    let errorsPassword = {}
  
    if (!input.password) {
      errorsPassword = "error"
    }
    if (input.password.length <= 6) {
      errorsPassword = "error"
    } else {
      errorsPassword = ""
    }
    return errorsPassword
  }


  const handleInputChangeName = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrorsName(registerValidateName({
      ...errorsName,
      name: e.target.value
    }))

  };
  const handleInputChangeEmail = function (e) {
    setInput({
      ...input,
      email: e.target.value,
    });
    setErrorsEmail(registerValidateEmail({
      ...errorsEmail,
      email: e.target.value
    }))
  };

  const handleInputChangePassword = function (e) {
    setInput({
      ...input,
      password: e.target.value,
    });
    setErrorsPassword(registerValidatePassword({
      ...errorsPassword,
      password: e.target.value
    }))
  };

  const handleShowPassword = (e) => {
    e.preventDefault()
    setShowPassword(!showPassword)
  }



  function handleClose() {
    closeModalRegisterLogin()
    setShow(false)
  }
  console.log(input)

  async function handleValidateUser(input) {
    console.log('llegue')
    try {
      var json = await axios.get('http://localhost:3001/api/users/' + input.email)
      if (json.data.existe === true) {
        return alert('el usuario ya existe')

      } else {
        console.log('llegue al dispatch')
        dispatch(registerUser(input))
      }
    } catch (error) {
      return alert('algo salio mal :(' `${error}`)
    }
  }

function handleRegister(e) {
    e.preventDefault()
    registerValidateName(input);
    registerValidateEmail(input);
    registerValidatePassword(input)
    let nombreMax = 60
    let emailMax = 100
    
    if (!input.email) {

      return alert('algo salio mal :C')
    }
    if (!input.name) {

      return alert('algo salio mal :C')
    }
    if (input.name < nombreMax) {


      return alert('algo salio mal :C')
    }
    if (!input.password) {
      return alert('algo salio mal :C')
    }
    if (input.password.length <= 6) {
   
      return alert('algo salio mal :C')
    }
    handleValidateUser(input)

  }


  return (

    <Modal show={show}>
    <Modal.Header closeButton onClick={handleClose} >
      <Modal.Title> Forma parte de Countries App 😁</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <div>
      <form >
        <div>
                  <input
                    className="inputLogin"
                    value={input.name}
                    type="text"
                    name="name"
                    maxLength='60'
                    minLength='8'
                    placeholder="Nombre de usuario"
                    onChange={(e) => handleInputChangeName(e)}
                  />
                  {errorsName.name === "inicio" ? null :
                    errorsName !== "vacio" && errorsName !== "largo" ? ( <FcCheckmark/> ) : null}
                
              </div>
                <div>
                  <input type="email"
                    className="inputLogin"
                    value={input.email}
                    name='email'
                    placeholder="Email"
                    onChange={(e) => handleInputChangeEmail(e)} />
                  {errorsEmail.email === "inicio" ? null :
                    errorsEmail !== "error" ? (<FcCheckmark/>) : null} 
                
              </div>
            <div>

                  <input className="inputPassword"
                    value={input.password}
                    type={showPassword ? "text" : "password"}
                    placeholder="Contraseña"
                    name='password'
                    onChange={(e) => handleInputChangePassword(e)} />
              </div>
              <button  onClick={(e) => handleShowPassword(e)}>👁️</button>

             <button className={styles.button} onClick={(e) => handleRegister(e)}>Registrarse</button> 
           
              <p className={styles.button}>¿Ya estás registrado?</p>
              {/* <button className={styles.button} type='button' onClick={(e) => handleRedirectLogin(e)}>
                Iniciar sesión
              </button> */}
         
    </form>
    </div>
    </Modal.Body>
      </Modal>
  );
};
