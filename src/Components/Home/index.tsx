import react, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getCountries , clearPage} from '../../Redux/actions/index'
import { RootState } from '../../Redux/store';

export default function Home(){

    const allCountries = useSelector<RootState>((state)  => state.allCountries) 
    console.log(allCountries)
    const dispatch = useDispatch()
    


    useEffect(() => {
        dispatch(getCountries())
        return () => {
            console.log('Component will be unmount')
        }
    }, []);

    return (
            <div>ESTOY VIVO PERO NO DISPACHO</div> 
    )
}