import react, { useEffect, useState , useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getCountries , clearPage} from '../../Redux/actions/index'
import styles from './Home.module.css'
import clsx from 'clsx'
import useLazyLoad from '../LazyLoading/useLazyLoad';
import Loader from '../Loader'
import Card from '../Card'

export default function Home(){

    const countries  = useSelector((state)  => state.allCountries) 
    console.log(countries)
    const dispatch = useDispatch()
    
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

    return (
      
      <div  className={styles.firstContainer}>
            
            <div className={styles.objectContainer}>
              {countries ?
            (data.map((c) => {
              return (
                <Card
                  name={c.name}
                  flag={c.flag}
                  e={c}>
                </Card>
              )
  
            })) 
            : <div><Loader/></div>}</div> 

           <div ref={triggerRef} className={clsx('trigger', { visible: false })}> <Loader/></div>
           </div>
    )
}