const axios = require('axios');
const URL = `https://swapi.co/api/people`;

async function obterPessoas(nome) {
    const url = `${URL}/?search=${nome}&format=json`
    const response = await axios.get(url);
    return response.data;
}

obterPessoas('r2')
    .then(function (resultado) {
        console.log("O resultado da consulta: ", resultado);
    })
    .catch(function (error) {
        console.error("O erro da consulta: ", error);
    });

module.exports = {
    obterPessoas
};