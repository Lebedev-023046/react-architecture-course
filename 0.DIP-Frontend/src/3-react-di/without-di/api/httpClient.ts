import axios, { type AxiosRequestConfig } from "axios";

export type RequestConfig<Payload = undefined> = Payload extends undefined
  ? { config?: AxiosRequestConfig }
  : { payload: Payload; config?: AxiosRequestConfig };

export const httpClient = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});
