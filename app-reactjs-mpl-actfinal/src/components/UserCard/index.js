import './style.css'
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <div
      className="flex flex-col p-4 bg-white rounded-lg shadow-md border border-gray-200"
      style={{ width: 250 }}
    >
      <div className="flex justify-center mb-4">
        {user.image && <img src={user.image} alt={user.name} className="w-24 h-24 rounded-full" />}
      </div>
      <div className="flex flex-col text-center">
        <h4 className="text-lg font-bold wrap-text">{user.name}</h4>
        <p className="text-gray-600 wrap-text">{user.email}</p>
        <p className="text-gray-600 wrap-text">{user.password}</p>
      </div>
      <div className="flex justify-center mt-4">
        <FaEdit className="text-blue-600 hover:text-blue-900 cursor-pointer mr-2" onClick={onEdit} />
        <FaTrash className="text-red-600 hover:text-red-900 cursor-pointer" onClick={onDelete} />
      </div>
    </div>
  );
};

export default UserCard;