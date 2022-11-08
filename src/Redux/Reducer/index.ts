import * as actionTypes from "../actions/actionsTypes"
import { Action } from "../actions/actionsTypes"
import {Countries , User} from "../../Utils/interfaceUtils"


interface initialState{
  allCountries? : Countries[] | []
  copyCountries? : Countries[]
  countryName? : Countries[]
  detailCountry? : Array<Countries>[] | []
  detailUser? : User[]
}

const initialState : initialState = {
 allCountries: [],
 copyCountries : [],
 countryName : [],
 detailCountry : [],
 detailUser : []
}




export default function rootReducer(state = initialState , action : Action){
  switch (action.type) {
          case "GET_COUNTRIES":
          return {
              ...state,
              allCountries: action.payload,
              copyCountries: action.payload,     
          }

          case actionTypes.CLEAR_PAGE:
          return {
              ...state,
              detailCountry : [] 
          }

          case actionTypes.GET_USER:
            return {
              ...state,
              detailUser: action.payload
            }

          
          default: return state
  }

}