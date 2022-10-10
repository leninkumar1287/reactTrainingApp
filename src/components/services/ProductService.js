import axios from 'axios'
const API = "http://localhost:3001/products"

function getAllUsers() {
  return axios.get(API)
}

function getUserById(id) {
  return axios.get(`${API}${id}`)
}

function updateUsers(id) {
  return axios.put(`${API}${id}`)
}

function deleteUserById(id) {
  return axios.delete(`${API}/${id}`)
}

function postAdduser(data) {
  return axios.post(`${API}`, data)
}

export { getAllUsers, getUserById, updateUsers, deleteUserById, postAdduser }