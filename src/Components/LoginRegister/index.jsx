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
      setValidate_email("0px 3px 4px 0px rgba(0, 0, 0, 0.08)")
      errorsEmail = ""
      if (input.mail < emailMax) {
        setValidate_email("0px 3px 4px 0px rgba(0, 0, 0, 0.08)")
        errorsEmail = ""
      }

      if (!input.email) {
        setValidate_email("0px 3px 6px 2px rgba(241, 91, 100, 0.5)")
        errorsEmail = "error"
      }

    } else {
      setValidate_email("0px 3px 6px 2px rgba(241, 91, 100, 0.5)")
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
      setValidate_name("0px 3px 6px 2px rgba(241, 91, 100, 0.5)")
    }
    if (input.name.length > 66 || input.name.length < 8) {
      console.log("largo")
      errorsName = "largo"
      setValidate_name("0px 3px 6px 2px rgba(241, 91, 100, 0.5)")
    } else {
      setValidate_name("0px 3px 4px 0px rgba(0, 0, 0, 0.08)")
      errorsName = ""
    }
    return errorsName

  }

  function registerValidatePassword(input) {

    let errorsPassword = {}

    if (!input.password) {
      setValidate_password("0px 3px 6px 2px rgba(241, 91, 100, 0.5)")
      errorsPassword = "error"
    }
    if (input.password.length <= 6) {
      setValidate_password("0px 3px 6px 2px rgba(241, 91, 100, 0.5)")
      errorsPassword = "error"
    } else {
      setValidate_password("0px 3px 4px 0px rgba(0, 0, 0, 0.08)")
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

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }


  const handleRedirectLogin = (e) => {
    history.push('/login')
  }

  function handleClose() {
    closeModalRegisterLogin()
    setShow(false)
  }

  async function handleValidateUser(input) {

    try {
      let nombreMax = 60
      let emailMax = 100
      var json = await axios.get('http://localhost:3001/api/users/' + input.email)
      if (json.data.existe === true) {
        return alert('el usuario ya existe')
      } else {
        dispatch(registerUser(input))
      }
    } catch (error) {
      return alert('algo salio mal :(' `${error}`)
    }
  }

  async function handleRegister(e) {
    registerValidateName(input);
    registerValidateEmail(input);
    registerValidatePassword(input)
    let nombreMax = 60
    let emailMax = 100

    if (!input.email) {
      setErrorRegister(true)
      return
    }
    if (!input.name) {
      setErrorRegister(true)
      return
    }
    if (input.name < nombreMax) {
      setErrorRegister(true)

      return
    }
    if (!input.password) {
      setErrorRegister(true)
      return
    }
    if (input.password.length <= 6) {
      setErrorRegister(true)
      return
    }
    handleValidateUser(input)

  }


  function cerrarPopUp() {
    setClosePopUp(false)
    setErrorRegister(false)

    setInput({
      name: input.name,
      email: input.email,
      password: input.password
    })

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
          
             <button className={styles.button}>Registrarse</button> 
           
              <p className={styles.button}>¿Ya estás registrado?</p>
              <button className={styles.button} type='button' onClick={(e) => handleRedirectLogin(e)}>
                Iniciar sesión
              </button>
         
    </form>
    </div>
    </Modal.Body>
      </Modal>
  );
};
