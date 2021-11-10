// Archivo donde se van a centralizar las peticiones
import axios from 'axios';

const movieDB = axios.create({
  baseURL:'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '0e07735d1f80a69f836d0a9262bc519f',
    language: 'es-ES'
  }
});

export default movieDB;