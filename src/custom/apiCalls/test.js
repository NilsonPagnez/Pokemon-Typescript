import axios from 'axios'

const config = {
    headers: {
        header1: 'Access-Control-Allow-Origi',
        header2: 'the User-Agent of your application'
    }
}

export default function test() {
    return axios.get("https://pokeapi.co/api/v2/pokemon/ditto", config)
        .then(response => {
            return response.data
        })

}
