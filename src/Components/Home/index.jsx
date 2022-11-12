import react, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, clearPage, getUser } from '../../Redux/actions/index'
import { Link, useHistory } from 'react-router-dom';
import LoginRegister from '../LoginRegister/index'
import DetailCountry from '../DetailCountry/index'
import Dropdown from '../Dropdown/index'
import styles from './Home.module.css'
import clsx from 'clsx'
import useLazyLoad from '../LazyLoading/useLazyLoad';
import Loader from '../Loader'
import Card from '../Card'
import ModalPerfil from '../Perfil';
import ModalCreateCountry from '../CreateCountries'
import ModalFavorites from '../Favorites';
import ModalQuiz from '../Quiz';
import ModalMenuQuiz from '../Quiz/MenuQuiz';
import Contacto from '../Contacto/index'

export default function Home() {

  const countries = useSelector((state) => state.allCountries)
  const detailUser = useSelector((state) => state.detailUser)

  const dispatch = useDispatch()
  const [user, setUser] = useState(localStorage.getItem('user'))
  const [searchTerm, setSearchTerm] = useState('')
  const [term, setTerm] = useState('name')
  const [detailCountry, setDetail] = useState(null)
  const [modalDetail, setModalDetail] = useState(false)
  const [show, setShow] = useState(false)
  const [showLoginRegister, setShowLoginRegister] = useState(false)
  const [perfilUser, setPerfilUser] = useState(false)
  const [createCountry , setCreateCountry] = useState(false)
  const [favoritesModal , setFavoritesModal] = useState(false)
  const [openQuiz , setOpenQuiz] = useState(false)
  const [openContact , setOpenContact] = useState(false)

 const closeModalPerfil = () => {
  setPerfilUser(false)
 }
  
  const handleReload = () => {

    window.location.reload();
  }

  function clickCountryDetails(c) {
    setDetail(c)
    setModalDetail(!modalDetail)
    openModal()
  }

  function closeModal() {
    setShow(false)
  }

  async function openModal() {
    setShow(true)
  }


  function changeTermDropdown(term) {
    setTerm(term)
    return term
  }

  function openLoginRegister() {

    setShowLoginRegister(!showLoginRegister)
  }

  function closeModalFavorites () {
    setFavoritesModal(false)
  }

  function closeModalQuiz () {
    setOpenQuiz(false)
  }
  function closeModalContact(){
    setOpenContact(false)
  }

  const NUM_PER_PAGE = 13;
  const TOTAL_PAGES = 100;

  const triggerRef = useRef(null)

  const onGrabData = (currentPage) => {
    return new Promise((resolve) => {
      const data = countries?.slice(
        ((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGE,
        NUM_PER_PAGE * (currentPage % TOTAL_PAGES)
      );
      console.log(data);
      resolve(data);
    })
  }
  const handleCloseCreateCountry = () => {
    setCreateCountry(false)
  }
  const { data, loading } = useLazyLoad({ triggerRef, onGrabData })

 


  useEffect(() => {
    dispatch(getCountries())
    setTimeout(function () {
      dispatch(getUser(user))
    }, 2500);

  }, []);

  return (

    <div className={styles.firstContainer}>
      <div className={styles.navBar}>
        {user ? <button className={styles.button} onClick={() => setPerfilUser(!perfilUser)}> Perfil 👤</button> :
          <button className={styles.button} onClick={() => openLoginRegister()}>Iniciar Sesion</button>}
        {user ? <button className={styles.button} onClick={() => setFavoritesModal(true)}>Favoritos</button> : null}
        <button className={styles.button}>Foro</button>
        
        <div className={styles.inputContainer} >
          <Dropdown changeTermDropdown={changeTermDropdown} />
          <input type="text" placeholder={'Filters by ..' + ' ' + term}
            onChange={event => { setSearchTerm(event.target.value) }}
          />
          <button tittle="Recargar Pagina :D" className={styles.botonReload} onClick={() => handleReload()} >🌎↻</button>
        </div>
      </div>
      { user ? 
      <div className={styles.quizCreate}>
       <button className={styles.button} onClick={() => setCreateCountry(!createCountry)}>Crear Pais</button>
        <button className={styles.button} onClick={(e) => setOpenQuiz(true)}>Juega el QuizCountries</button> 
      </div> : null}
      <div className={styles.about}><button className={styles.button} onClick={(e) => setOpenContact(true)}>Sobre mi</button></div>
      
      <div className={styles.objectContainer}>
        {createCountry ? <ModalCreateCountry user={detailUser} handleClose={handleCloseCreateCountry}/>: null}
        {perfilUser ? <ModalPerfil user = {detailUser} closeModal={closeModalPerfil} /> : null}
        {showLoginRegister ? <LoginRegister closeModalRegisterLogin={openLoginRegister} /> : null}
        {show ? <DetailCountry user={detailUser} country={detailCountry} closeModal={closeModal} /> : null}
        {favoritesModal ? <ModalFavorites user={detailUser} closeModal={closeModalFavorites}/> : null}
        {openQuiz ? <ModalMenuQuiz user={detailUser} closeModal={closeModalQuiz} /> : null}
        {openContact ? <Contacto closeModal={closeModalContact}/> :  null}
        {countries ?
          data.filter((val) => {
            if (searchTerm === "") {
              return val
            } else if (val?.[term].toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
              return val
            }

          }).map(c => {
            return (
              <div key={c.name} onClick={(e) => clickCountryDetails(c)}>
                <Card
                  name={c.name}
                  flag={c.flag}
                  e={c}>
                </Card>
              </div>
            )
          }
          ) : <div><Loader /></div>}
      </div>
      <div ref={triggerRef} className={clsx('trigger', { visible: false })}> <Loader /></div>
    </div>
  )
}