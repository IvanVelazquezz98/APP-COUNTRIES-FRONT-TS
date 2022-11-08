import { AxiosRequestConfig } from "axios";

  

 export interface AxiosResponse<T = any> {
    data: T;
    status: number;
    statusText: string;
    headers: any;
    config?: AxiosRequestConfig;
    request?: any;
   }

 export interface Countries {
    id: string,
    name: string,
    flag: string,
    continent: string,
    capital: string,
    subregion: string,
    area: string,
    population: string,
    populationVirtual: string,
    unMember: string,
    location: string,
    timezones: string
}

export interface User {
      id?: string,
      name?: string,
      lastName?: null,
      descripcion?: null,
      imagen_profile?: null,
      password?: string,
      email?: string,
      createdAt?: string,
      updatedAt?: string
}

