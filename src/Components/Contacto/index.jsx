import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link , useHistory } from 'react-router-dom';
import linkedin from './linkedin.png'
import git from './git.png'
import styles from './Contacto.module.css'
export default function ModalError({  closeModal }) {
  const [show, setShow] = useState(true);
  
  
  return (
    <>

      <Modal show={show}>
        <Modal.Header closeButton onClick={() =>  closeModal()} >
          <Modal.Title> Sobre Mi </Modal.Title>
        </Modal.Header>
        <Modal.Body><h3>Ivan Emanuel Velazquez - Full Stack Developer</h3><div>
          <div>
          <img src={'https://media-exp1.licdn.com/dms/image/D4D35AQHIPmLB6GdmyA/profile-framedphoto-shrink_200_200/0/1667671384863?e=1668891600&v=beta&t=ntmmj1nZtPiB3R0NIn4_bHY9Nax4DR8Xy8j5tfjsa0U'}/></div>
            <div></div></div>
            <br></br>
            <h5 className={styles.divTitle}>Te cuento un poco sobre mí :</h5>
            <p>Desarrollador Web FullStack con capacidad de aprendizaje, confianza y pensamiento creativo.
            Aprender cosas nuevas es de lo que más disfruto. ¡Soy una persona autodidacta que nunca deja de aprender!
            Quiero ser parte de un equipo donde pueda crecer de manera personal,
            donde pueda desarrollar y mejorar mis habilidades, ayudar a crecer a mis compañeros y alcanzar todos los objetivos.

            Actualmente, me encuentro cursando la carrera de Licenciatura en Informática en la UNQ (Universidad Nacional de Quilmes).
            Estoy listo para nuevos desafíos en el mundo de la programación.</p>
            <br></br>
            <h4 className={styles.divTitle}>Sobre Countries App 🌎 </h4>
            <p>Decidí hacer Countries App para exigirme un poco más sobre los desafíos que ya había realizado. Primero tenía la idea
                de hacer una app que consultara una API y haga filtros con un scroll “infinito”, tal como Instagram, pero luego de
                pensarlo me di cuenta de que esto ya lo había ejecutado en proyectos anteriores, Entonces me propuse a ejecutar algo un poco
                más complejo y de aquí nació esta app ❤️. Si bien ya había trabajado en proyectos anteriores con Login/Registro,
                nunca lo había hecho completamente solo, además nunca había hecho un juego que es algo que hace mucho quería hacer.
                La idea de la app la explico en mi video de LinkedIn. Pero te dejo un enlace al proyecto con el readme que explica todas
                sus geniales funcionalidades.<br></br>
                PD: Pienso seguir actualizando este proyecto. 🚀
            </p>
            <h3 className={styles.divTitle}>Mis redes y demás vínculos 🌐 :</h3>
           <div> <h5>Linkedin: </h5>  <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/ivan-velazquez-a095aa243/"
            target="_blank"
          >
            <img className={styles.image} alt="linkedin" src={linkedin} />
          </a>
          <h5>Readme del proyecto y mi GitHub:</h5><a
            rel="noreferrer"
            href="https://github.com/IvanVelazquezz98"
            target="_blank"
          >
            <img className={styles.image} alt="github" src={git} />
          </a>
          <h5>Video del proyecto:</h5><a
            rel="noreferrer"
            href="https://github.com/IvanVelazquezz98"
            target="_blank"
          >
            <img className={styles.image} alt="Linkedin" src={linkedin} />
          </a></div>
          
        </Modal.Body>
      </Modal>
    </>
  );
}