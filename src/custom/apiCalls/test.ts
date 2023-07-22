import axios, { AxiosResponse } from 'axios'

const config = {
    headers: {
        header1: 'Access-Control-Allow-Origi',
        header2: 'the User-Agent of your application'
    }
}

export default async function test(): Promise<Object> {
    return axios.get<Object>("https://pokeapi.co/api/v2/pokemon/ditto", config)
        .then((response: AxiosResponse<Object>) => {
            return response.data
        })
}
