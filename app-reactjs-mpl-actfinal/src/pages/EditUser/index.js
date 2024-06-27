import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserById, updateUser } from '../../services/usersService';

const EditUser = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUserById(id);
      const userData = response.data;
      setName(userData.name);
      setEmail(userData.email);
      setImage(userData.image);
      setPassword(userData.password);
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (event) => {
    console.log("handleSubmit");
    event.preventDefault();
    try {
      const userData = {
        name,
        email,
        password,
        image,
        admin: false,
      };
      const response = await updateUser(id, userData);
      console.log(response);
      if (response.data) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000); // mostrar alert de sucesso por 3 segundos
      } else {
        setError(response.error);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Editar usuário {id}</h1>
      {success && (
        <div className="bg-green-500 text-white p-2 mb-4">
          Usuário atualizado com sucesso!
        </div>
      )}
      {error && (
        <div className="bg-red-500 text-white p-2 mb-4">
          Erro ao atualizar usuário: {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          <span className="text-lg font-bold">Nome:</span>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </label>
        <label className="block mb-2">
          <span className="text-lg font-bold">E-mail:</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </label>
        <label className="block mb-2">
          <span className="text-lg font-bold">Imagem:</span>
          <input
            type="text"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </label>
        <label className="block mb-2">
          <span className="text-lg font-bold">Senha:</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </label>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Atualizar usuário
        </button>
      </form>
    </div>
  );
};

export default EditUser;