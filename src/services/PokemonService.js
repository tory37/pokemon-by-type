import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getAllPokemon(page, amount) {
    //console.log(page, amount);
    return apiClient
      .get(`pokemon/?limit=${amount}&offset=${page * amount - amount}`)
      .then(response => {
        //console.log(response.data.results);
        return response.data;
      })
      .catch(err => {
        throw err;
      });
  },
  getPokemon(name) {
    return apiClient.get(`/pokemon/${name}`).then(response => response.data);
  }
};
