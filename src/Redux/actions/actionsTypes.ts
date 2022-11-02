
import { Countries } from '../../Utils/interfaceUtils'
export const GET_COUNTRIES = "GET_COUNTRIES"
export const CLEAR_PAGE = "CLEAR_PAGE"

interface ActionGetCountries {
    type:"GET_COUNTRIES"
    payload?: Countries[]
  }
  
  interface ActionGetCountriesName {
  type:"GET_COUNTRIES_NAME"
  payload?: Countries[]
  }
  
  interface ActionCreateCountries {
    type: "CREATE_COUNTRIES"
  }

  interface ActionClearPage {
    type : "CLEAR_PAGE"
  }
  export type Action = ActionGetCountries | ActionCreateCountries | ActionGetCountriesName | ActionClearPage

