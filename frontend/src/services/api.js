// import axios from 'axios'
// const url = 'http://localhost:3333'

// module.exports = {

//     apiData: async () => {
       
//         const response = await axios.get(url);
//         console.log(response);
//         return respose
//     }
    
// }


import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export default api

    // sfddgdg: async () => { 
    
    //     let response = await fetch(url)
    //     let result = await response.json()

    //     console.log(result)

    //     return result   
    // }