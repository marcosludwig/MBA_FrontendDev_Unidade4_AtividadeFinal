import api from './api'

const registerUser = (addUserValues) =>
  api.post('/user/create', addUserValues)
    .then(response => response)
    .catch((err) => console.error('Erro na chamada', err));

const getUserById = (idUser) => {
  console.log(idUser);
  return api.get(`/user/findbyId/${idUser}`)
    .then(response => response)
    .catch((err) => err)
}

const getAllUsers = () => {
  return api.get(`/user/findAll`)
    .then(response => response)
    .catch((err) => err)
}

const updateUser = (id, userData) => {
  return api.put(`/user/update/${id}`, userData)
    .then(response => response)
    .catch((err) => err)
}

const deleteUser = (id) => {
  return api.delete(`/user/remove/${id}`)
    .then(response => response)
    .catch((err) => err)
}

export { registerUser, getUserById, getAllUsers, updateUser, deleteUser }