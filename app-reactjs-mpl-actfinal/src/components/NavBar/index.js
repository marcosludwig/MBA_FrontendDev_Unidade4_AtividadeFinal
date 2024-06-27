import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="flex justify-between bg-gray-800 py-4">
      <ul className="flex items-center">
        <li className="mr-6">
          <Link
            className="text-gray-300 hover:text-white transition duration-300 ease-in-out"
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="mr-6">
          <Link
            className="text-gray-300 hover:text-white transition duration-300 ease-in-out"
            to="/add-user"
          >
            Adicionar novo usuário
          </Link>
        </li>
        <li>
          <Link
            className="text-gray-300 hover:text-white transition duration-300 ease-in-out"
            to="/logout"
          >
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;