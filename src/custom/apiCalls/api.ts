import axios from "axios";

export const api = axios.create({
        baseURL: 'https://pokeapi.co/api/v2/',
        headers: {
            header1: 'Access-Control-Allow-Origin',
            header2: 'the User-Agent of your application',
          },
      });