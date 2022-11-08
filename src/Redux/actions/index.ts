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
        return json;
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
    const response  = await axios.get('http://localhost:3001/api/users/login' , payload );
    dispatch<actionTypes.Action>({
      type: "GET_USER",
      payload: response.data
    })
  };

}
