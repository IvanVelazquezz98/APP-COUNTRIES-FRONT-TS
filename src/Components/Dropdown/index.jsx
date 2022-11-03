import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import styles from './Dropdown.module.css'



export default function DropdownInput({changeTermDropdown }) {

  const [dropdown, setDropdown] = useState(false);
  const [show, setShow] = useState(false)
  

  const abrirCerrarDropdown = () => {
    setDropdown(!dropdown)
  }
  function handleClose() {
    openModal()
  }
  
  function closeModal(){
    setShow(false)
  }
  async function openModal() {
     setShow(true)
  }

  return (
    <div className={styles.mainContainer}>
      {/* {show ? <Modal closeModal={closeModal} showClose={handleClose} /> : null} */}


      <br></br>
      <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
        <DropdownToggle  className={styles.dropdownContent} caret >
          Abrir filtros 
        </DropdownToggle>
        <DropdownMenu >
          <DropdownItem className={styles.filtros} onClick={() => changeTermDropdown('name')} >Nombre</DropdownItem>
          <DropdownItem className={styles.filtros} onClick={() => changeTermDropdown('continent')} >Continente</DropdownItem>
          <DropdownItem className={styles.filtros} onClick={() => changeTermDropdown('capital')}>Capital</DropdownItem>
          <DropdownItem className={styles.filtros} onClick={() => changeTermDropdown('Subregion')} >Sub-region</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}