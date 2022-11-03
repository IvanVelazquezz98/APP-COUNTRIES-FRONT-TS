import react, { useEffect, useState , useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getCountries , clearPage} from '../../Redux/actions/index'
import { Link , useHistory } from 'react-router-dom';
import DetailCountry from '../DetailCountry/index'
import Dropdown from '../Dropdown/index'
import styles from './Home.module.css'
import clsx from 'clsx'
import useLazyLoad from '../LazyLoading/useLazyLoad';
import Loader from '../Loader'
import Card from '../Card'


export default function Home(){

    const countries  = useSelector((state)  => state.allCountries) 
    console.log(countries)
    const dispatch = useDispatch()

    const [searchTerm, setSearchTerm] = useState('')
    const [term, setTerm] = useState('name')
    const [detailCountry , setDetail] = useState(null)
    const [modalDetail , setModalDetail] = useState(false)
    const [show, setShow] = useState(false)

    const handleReload = () => {
      window.location.reload();
    }

    function clickCountryDetails (c) {
      setDetail(c)
      setModalDetail(!modalDetail)
      openModal()
    }
    
    function closeModal(){
      setShow(false)
    }

    async function openModal() {
       setShow(true)
    }
  console.log(detailCountry)

    function changeTermDropdown(term) {
      setTerm(term)
      return term
    }
    
    const NUM_PER_PAGE = 13;
    const TOTAL_PAGES = 100;
    
     const triggerRef  = useRef(null)
    
    const onGrabData  = (currentPage )  => {
        return new Promise((resolve) => {
          const data = countries?.slice(
            ((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGE,
            NUM_PER_PAGE * (currentPage % TOTAL_PAGES)
          );
          console.log(data);
          resolve(data);
        })
      }
      const { data , loading } = useLazyLoad({ triggerRef , onGrabData })

      console.log('datalazy', data)

    useEffect(() => {
        dispatch(getCountries())
        return () => {
            console.log('Component will be unmount')
        }
    }, []);
    console.log(term)
    return (
     
      <div  className={styles.firstContainer}>
        <div className={styles.navBar}>
          
          <div className={styles.inputContainer} >
          <Dropdown  changeTermDropdown={changeTermDropdown} />
          <input  type="text" placeholder={'Filters by ..' + ' ' + term }
          onChange={event => { setSearchTerm(event.target.value) }} 
          />
          <button tittle="Recargar Pagina :D" className={styles.botonReload} onClick={() => handleReload()} >↻</button>
          </div>
        </div>
            <div className={styles.objectContainer}>
              {show ? <DetailCountry  country={detailCountry} closeModal={closeModal} /> : null}
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

          ) : <div><Loader/></div>}

            </div>


           <div ref={triggerRef} className={clsx('trigger', { visible: false })}> <Loader/></div>
           </div>
    )
}