import React from "react";
import styles from './Loader.module.css'
export default function Loading() {


    return(
        <div className={styles.loader}>
        <img src= {"https://i.pinimg.com/originals/13/1f/e1/131fe14bbe6c85b4b3ec1c301251852d.gif"} alt="loading.." border="0"/>
        </div>
    )
}