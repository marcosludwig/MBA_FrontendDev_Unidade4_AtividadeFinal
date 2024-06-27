import React, { useState } from 'react';
import { registerUser } from '../../services/usersService';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = {
        name,
        email,
        password,
        image,
        admin: false,
      };
      const response = await registerUser(userData);
      if (response.data) {
        setSuccess(true);
        setName('');
        setEmail('');
        setImage('');
        setPassword('');
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
      <h1 className="text-3xl font-bold mb-4">Adicionar usuário</h1>
      {success && (
        <div className="bg-green-500 text-white p-2 mb-4">
          Usuário adicionado com sucesso!
        </div>
      )}
      {error && (
        <div className="bg-red-500 text-white p-2 mb-4">
          Erro ao adicionar usuário: {error}
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
          Adicionar usuário
        </button>
      </form>
    </div>
  );
};

export default AddUser;