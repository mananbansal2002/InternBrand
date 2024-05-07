import axios from 'axios';
axios.defaults.withCredentials=false;
const url = 'https://internbrand-ekq2.onrender.com/api'

export const getDatas= async () => {
    return await axios.get(`${url}/getPosts`).catch((err)=>console.log(err));
}


// import axios from 'axios';
// import dataDetails from '../Data.js';

// export const getDatas= async () => {
//     console.log(dataDetails);
//     return dataDetails;
// }
