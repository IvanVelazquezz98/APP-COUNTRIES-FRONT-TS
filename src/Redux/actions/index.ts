import axios from "axios"
import { Dispatch } from 'redux'
import * as actionTypes from "../actions/actionsTypes"
import * as interfaceUtils from "../../Utils/interfaceUtils";


export function getCountries(){
      return async (dispatch:  Dispatch) => {
        const response  = await axios.get('https://deploy-countries-app-production.up.railway.app/api/countries/All');
        dispatch<actionTypes.Action>({
          type: "GET_COUNTRIES",
          payload: response.data
        })
      };

}
export function registerUser(payload : interfaceUtils.User ) {
  return async function (dispatch : Dispatch) {
      try {
        var json = await axios.post('https://deploy-countries-app-production.up.railway.app/api/users/register', payload);
        dispatch<actionTypes.Action>({
          type: "GET_USER",
          payload: json.data.user1
        })
      } catch (error) {
        console.log(error);
      }
    };
}

export function clearPage(){
    return {
        type: actionTypes.CLEAR_PAGE
    }
}

export function loginUser(payload ){
  return async (dispatch:  Dispatch) => {
    const response  = await axios.post('https://deploy-countries-app-production.up.railway.app/api/users/register/login' , payload );
    dispatch<actionTypes.Action>({
      type: "GET_USER",
      payload: response.data.result.totalUser
    })
  };

}

export function getUser(payload){
  return async (dispatch:  Dispatch) => {
    const response  = await axios.get('https://deploy-countries-app-production.up.railway.app/api/users/' + payload );
    dispatch<actionTypes.Action>({
      type: "GET_USER",
      payload: response.data.user
    })
  };
}

export function createCountry(payload){
  return async (dispatch:  Dispatch) => {

    const response  = await axios.post('https://deploy-countries-app-production.up.railway.app/api/countries/CreateCountry' , payload );
    return response
    
  };
}

export function setFavorite(payload){
  return async (dispatch:  Dispatch) => {

    const response  = await axios.post('https://deploy-countries-app-production.up.railway.app/api/user/favorites/CreateFavorite' , payload );
    return response
    
  };
}

export function removeFavorite(payload){
  return async (dispatch:  Dispatch) => {

    const response  = await axios.delete('https://deploy-countries-app-production.up.railway.app/api/user/favorites/' +  payload );
    return response
    
  };
}

export function updateUser(payload){
  return async (dispatch:  Dispatch) => {

    const response  = await axios.put('https://deploy-countries-app-production.up.railway.app/api/users/update' , payload );
    return response
    
  };
}

export function updateUserScore(payload){
  return async (dispatch:  Dispatch) => {

    const response  = await axios.put('https://deploy-countries-app-production.up.railway.app/api/users/update/score' , payload );
    return response
    
  };
}


