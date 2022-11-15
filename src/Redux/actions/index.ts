import axios from "axios"
import { Dispatch } from 'redux'
import * as actionTypes from "../actions/actionsTypes"
import * as interfaceUtils from "../../Utils/interfaceUtils";
export const SERVER_URL = 'https://countries-app-zqvw.onrender.com'

export function getCountries(){
      return async (dispatch:  Dispatch) => {
        const response  = await axios.get( SERVER_URL +'/api/countries/All');
        dispatch<actionTypes.Action>({
          type: "GET_COUNTRIES",
          payload: response.data
        })
      };

}
export function registerUser(payload : interfaceUtils.User ) {
  return async function (dispatch : Dispatch) {
      try {
        var json = await axios.post(SERVER_URL +'/api/users/register', payload);
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
    const response  = await axios.post(SERVER_URL +'/api/users/register/login' , payload );
    dispatch<actionTypes.Action>({
      type: "GET_USER",
      payload: response.data.result.totalUser
    })
  };

}

export function getUser(payload){
  return async (dispatch:  Dispatch) => {
    const response  = await axios.get(SERVER_URL +'/api/users/' + payload );
    dispatch<actionTypes.Action>({
      type: "GET_USER",
      payload: response.data.user
    })
  };
}

export function createCountry(payload){
  return async (dispatch:  Dispatch) => {

    const response  = await axios.post(SERVER_URL +'/api/countries/CreateCountry' , payload );
    return response
    
  };
}

export function setFavorite(payload){
  return async (dispatch:  Dispatch) => {

    const response  = await axios.post(SERVER_URL +'/api/user/favorites/CreateFavorite' , payload );
    return response
    
  };
}

export function removeFavorite(payload){
  return async (dispatch:  Dispatch) => {

    const response  = await axios.delete(SERVER_URL +'/api/user/favorites/' +  payload );
    return response
    
  };
}

export function updateUser(payload){
  return async (dispatch:  Dispatch) => {

    const response  = await axios.put(SERVER_URL +'/api/users/update' , payload );
    return response
    
  };
}

export function updateUserScore(payload){
  return async (dispatch:  Dispatch) => {

    const response  = await axios.put(SERVER_URL +'/api/users/update/score' , payload );
    return response
    
  };
}


