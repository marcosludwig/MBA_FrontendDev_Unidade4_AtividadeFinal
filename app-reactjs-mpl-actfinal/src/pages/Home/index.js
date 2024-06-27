import React, { useState, useEffect } from 'react';
import { getAllUsers, deleteUser } from '../../services/usersService';
import UserCard from '../../components/UserCard';
import { useNavigate } from 'react-router-dom';

const findAllUsers = async () => {
  const response = await getAllUsers();
  const data = response.data;
  return data;
}

const deleteUserById = async(id) => {
  console.log(`Deleting... ${id}`);
  const response = await deleteUser(id);
  const data = response.data;
  console.log(response);
  console.log(data);
  return data;
}

const Home = () => {
  const [usersData, setUsersData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await findAllUsers();
        setUsersData(data);
      } catch (error) {
        console.error('Erro buscando usuários:', error);
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este usuário?')) {
      try {
        await deleteUserById(id);
        setUsersData(usersData.filter((user) => user._id !== id));
      } catch (error) {
        console.error('Erro excluindo usuário:', error);
      }
    }
  };

  const handleEdit = (user) => {
    navigate(`/edit-user/${user._id}`);
  };

  return (
    <div className="max-w-full mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Painel de controle de usuários</h1>
      <h2 className="text-2xl font-semibold mb-4">Aqui está a lista dos usuários já cadastrados</h2>
      { usersData.length > 0 ? (
        <div className="flex flex-wrap -mx-4">
          <div className="flex flex-wrap -mx-4 mt-4">
            { usersData.map((user) => (
              <UserCard
                key={user._id}
                user={user}
                onEdit={() => handleEdit(user)}
                onDelete={() => handleDelete(user._id)}
                className="w-full md:w-1/2 xl:w-1/3 p-4 mb-4"
              />
            ))}
          </div>
        </div>
      ) : (
        <h3 className="text-lg font-bold mb-4">Carregando usuários...</h3>
      )}
    </div>
  );
};

export default Home;