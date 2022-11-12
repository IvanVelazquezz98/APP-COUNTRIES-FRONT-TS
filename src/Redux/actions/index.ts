import axios from "axios"
import { Dispatch } from 'redux'
import * as actionTypes from "../actions/actionsTypes"
import * as interfaceUtils from "../../Utils/interfaceUtils";


export function getCountries(){
      return async (dispatch:  Dispatch) => {
        const response  = await axios.get('http://localhost:3001/api/countries/All');
        dispatch<actionTypes.Action>({
          type: "GET_COUNTRIES",
          payload: response.data
        })
      };

}
export function registerUser(payload : interfaceUtils.User ) {
  return async function (dispatch : Dispatch) {
      try {
        var json = await axios.post('http://localhost:3001/api/users/register', payload);
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
    const response  = await axios.post('http://localhost:3001/api/users/register/login' , payload );
    dispatch<actionTypes.Action>({
      type: "GET_USER",
      payload: response.data.result.totalUser
    })
  };

}

export function getUser(payload){
  return async (dispatch:  Dispatch) => {
    const response  = await axios.get('http://localhost:3001/api/users/' + payload );
    dispatch<actionTypes.Action>({
      type: "GET_USER",
      payload: response.data.user
    })
  };
}

export function createCountry(payload){
  return async (dispatch:  Dispatch) => {

    const response  = await axios.post('http://localhost:3001/api/countries/CreateCountry' , payload );
    return response
    
  };
}

export function setFavorite(payload){
  return async (dispatch:  Dispatch) => {

    const response  = await axios.post('http://localhost:3001/api/user/favorites/CreateFavorite' , payload );
    return response
    
  };
}

export function removeFavorite(payload){
  return async (dispatch:  Dispatch) => {

    const response  = await axios.delete('http://localhost:3001/api/user/favorites/' +  payload );
    return response
    
  };
}

export function updateUser(payload){
  return async (dispatch:  Dispatch) => {

    const response  = await axios.put('http://localhost:3001/api/users/update' , payload );
    return response
    
  };
}

export function updateUserScore(payload){
  return async (dispatch:  Dispatch) => {

    const response  = await axios.put('http://localhost:3001/api/users/update/score' , payload );
    return response
    
  };
}


