import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://hangman-game-web-backend.herokuapp.com/api'
})
