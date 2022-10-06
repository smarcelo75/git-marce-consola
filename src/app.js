require('dotenv').config();
const axios = require('axios');

//Obtengo las variables de entorno del archivo de configuracion
const url1 = process.env.URL1;
const url2 = process.env.URL2;

axios.get(url1)
	.then(res => console.log(`Ejecucion 1 [${url1}] -> Response.data.message: ${res.data.message}`))
	.catch(err => console.log(`Error: ${err}`))

axios.get(url2)
	.then(res => console.log(`Ejecucion 2 [${url2}] -> Response.data.message: ${res.data.message}`))
	.catch(err => console.log(`Error: ${err}`))