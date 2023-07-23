import axios, { AxiosResponse } from 'axios'

const config = {
    headers: {
        header1: 'Access-Control-Allow-Origi',
        header2: 'the User-Agent of your application'
    }
}

export const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

export default async function test(){
    return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`, config)
        .then((response: AxiosResponse<Object>) => {
            return response.data
        })
}
