import React, { useState } from 'react';
import styles from './Card.module.css'

export default function Card({ image , name }){

   
    return (
        <div className={styles.mainContainer} >
            <img className={styles.image}  src={image ? image : null} alt="Image not found"/>
            <div className={styles.innerContainer} >
                <h3 className={styles.name}> {name ? name : null}</h3>
                <h5 ><button title="Add to Favorites" className={styles.botonfavorites}  >❤</button></h5>
            </div>
        </div>
    )
}