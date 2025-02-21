import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUserApi } from '../services/authService';
import { getUserById } from '../services/usersService';
import api from '../services/api';

const useAuth = () => {
  const [userLogged, setUserLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userFull, setUserFull] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      api.defaults.headers.common['Authorization'] = `Bearer ${userInfo.token}`
      findUserById(userInfo.idUser);
      setUserLogged(true);
    }

    setLoading(false)
  }, [])

  const loginUser = async (inputValues) => {
    const response = await loginUserApi(inputValues);
    console.log(response);
    const data = await response.data;
    localStorage.setItem('userInfo', JSON.stringify(data))
    api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
    navigate('/')
    setUserLogged(true);
  }
  
  const logoutUser = () => {
    setUserLogged(false);
    localStorage.clear();
    navigate('/login')
  }

  const findUserById = async (idUser) => {
    const response = await getUserById(idUser);
    setUserFull(response.data)
    console.log(userFull);
  }

  return { userLogged, userFull, loading, loginUser, logoutUser }
}

export default useAuth;