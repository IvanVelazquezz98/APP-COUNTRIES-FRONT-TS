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

  // async function searchUser() {
  //   let userFound = await localStorage.getItem('user');
  //   if(userFound){setUser(userFound)}
  //   else {
  //      setUser(null)
  //   }
    
  // }

 console.log('user estado' , user)
 console.log('user Gobal' , detailUser)
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
        {detailUser?.length !== 0 ? <button className={styles.button}> Perfil 👤</button> :
          <button className={styles.button} onClick={() => openLoginRegister()}>Iniciar Sesion</button>}
        <button className={styles.button}>Favoritos</button>
        <button className={styles.button}>Foro</button>
        <div className={styles.inputContainer} >
          <Dropdown changeTermDropdown={changeTermDropdown} />
          <input type="text" placeholder={'Filters by ..' + ' ' + term}
            onChange={event => { setSearchTerm(event.target.value) }}
          />
          <button tittle="Recargar Pagina :D" className={styles.botonReload} onClick={() => handleReload()} >🌎↻</button>
        </div>
      </div>
      <div className={styles.objectContainer}>
        {showLoginRegister ? <LoginRegister closeModalRegisterLogin={openLoginRegister} /> : null}
        {show ? <DetailCountry country={detailCountry} closeModal={closeModal} /> : null}

        {countries ?
          data.filter((val) => {
            if (searchTerm === "") {
              return val
            } else if (val?.[term].toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
              return val
            }

          }).map(c => {
            return (
              <div onClick={(e) => clickCountryDetails(c)}>
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