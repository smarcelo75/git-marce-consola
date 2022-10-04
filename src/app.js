require('dotenv').config(); 
const axios = require('axios');
const url = process.env.URL;
console.log(url);

axios.get(url)
.then(res=>console.log(res.data))
.catch(err=>console.log(`Error: ${err}`))
