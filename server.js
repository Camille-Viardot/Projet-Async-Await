const fs = require('fs').promises;
const fetch = require('node-fetch');




async function DataApi() {
    let response = await fetch("https://restcountries.eu/rest/v2/name/France")
    let data = await response.json()
    console.log(JSON.stringify(data, null, "\t"))
}

DataApi()





