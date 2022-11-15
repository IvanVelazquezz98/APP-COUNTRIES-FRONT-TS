import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from './DetailCountry.module.css'
import { setFavorite } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'

export default function ModalDetail({ user, country, closeModal }) {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const [favoritesUser, setFavoritesUser] = useState(false)



  async function handleFavoritesForUser(user) {
    try{
    var json = await axios.get('https://deploy-countries-app-production.up.railway.app/api/user/favorites/user/' + user?.id)
    if (json.data.existe === true) {
      let info = json.data
      let result = info.favorites.filter((e) => (e.name === country.name))
      if (result.length !== 0) {
        return setFavoritesUser(null)
      } else {
        return setFavoritesUser(json.data)
      }
    }
    else {
      console.log(json.existe)
    }
  }catch(error){
    return setFavoritesUser(null)
  }


  }


  const [input, setInput] = useState({
    name: country.name,
    flag: country.flag,
    continent: country.continent,
    capital: country.capital,
    subregion: country.subregion,
    area: country.area,
    population: country.population,
    location: country.location,
    timezones: country.timezones,
    userId: user?.id
  })

  function handleClose() {
    closeModal()
    setShow(false)
  }

  const handleSetFavorite = (country) => {

    dispatch(setFavorite(input))

  }

  useEffect(() => {
   if(user !== undefined){handleFavoritesForUser(user)} 

  }, []);
  return (
    <>

      <Modal show={show}>
        <Modal.Header closeButton onClick={handleClose} >
          <Modal.Title> Detalles de {country.name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <img className={styles.image} src={country?.flag ? (country.flag) : (<p>Image not found</p>)} />
          </div>
          <div className={styles.content}>
            <h4 className={styles.continent}> Continente : {country.continent} </h4>
            <div><h5 className={styles.text}>🏙️ Capital: {country.capital}</h5></div>
            <div><h5 className={styles.text}>👉 Sub Region: {country.subregion}</h5></div>
            <div><h5 className={styles.text}>📍 Area: {country.area}</h5></div>
            <div><h5 className={styles.text}>👤 Población: {country.population}</h5></div>
            <div><h5 className={styles.text}>🗺️ Localización: <a href={country.location}>{country.location}</a></h5></div>
            <div><h5 className={styles.text}>⌚ Zona Horaria: {country.timezones}</h5></div>
            {favoritesUser ? <div className={styles.content}> <button className={styles.button} onClick={(e) => handleSetFavorite(e)}> ❤️ </button> </div> : null}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}