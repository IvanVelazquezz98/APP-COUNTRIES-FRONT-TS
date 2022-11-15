import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from './ModalFavorites.module.css';
import { useDispatch, useSelector } from "react-redux";
import ModalDetail from '../DetailCountry';
import axios from "axios"
import { removeFavorite } from '../../Redux/actions';

export default function ModalFavorites({ user, closeModal }) {
    const [showError, setShow] = useState(true);
    const dispatch = useDispatch()

    const detailUser = useSelector((state) => state.detailUser)
    const [modalDetail, setOpenModalDetail] = useState(false)
    const [favoritesUser, setFavoritesUser] = useState(null)
    const [countrySelected, setCountrySelected] = useState(false)

    console.log('favoritos del usuario', favoritesUser)
    async function handleFavoritesForUser(user) {
        try {
            var json = await axios.get('https://deploy-countries-app-production.up.railway.app/api/user/favorites/user/' + user.id)
            if (json.data.existe === true) {
                return setFavoritesUser(json.data)
            } else {
                return setFavoritesUser(null)
            }
        } catch (error) {
            return
        }
    }
    useEffect(() => {
        handleFavoritesForUser(user)
    }, [favoritesUser]);

    const handleDeleteFavorites = (id) => {

      return  dispatch(removeFavorite(id))
    }

    const closeModalDetail = () => {
       return setOpenModalDetail(false) , setCountrySelected(null)
       
    }

    const handleDetailFavorites = (country) => {
       return setOpenModalDetail(true) , setCountrySelected(country)
    }
    return (
        <>
            {modalDetail ? <ModalDetail user={detailUser} country={countrySelected} closeModal={closeModalDetail} /> : null}
            <Modal show={showError}>
                <Modal.Header closeButton onClick={() => closeModal()} >
                    <Modal.Title> Tus Favoritos {user.name} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={styles.content}> <div className={styles.title}><p className={styles.title} > ❤️ Tus Favoritos  :</p>  </div>
                        {favoritesUser ? favoritesUser.favorites.map((f) => {
                            return (<div key={f.id} className={styles.divCountriesCreated} ><p onClick={() => handleDetailFavorites(f)}
                                className={styles.info}> 🌍 {f?.name} 🌍 </p>
                                : <img className={styles.imageCountries}
                                    src={f?.flag ? (f.flag) :
                                        (<p className={styles.info}>Image not found</p>)} /><button className={styles.button}
                                            onClick={() => handleDeleteFavorites(f.id)}> ❌ </button> </div>)
                        }) :
                            <p className={styles.info}>No tienes favoritos</p>}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
