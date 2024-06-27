import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: ''
  })
  const { loginUser } = useContext(AuthContext);

  const handleChangeValues = (evento) => {
    setInputValues({
      ...inputValues,
      [evento.target.name]: evento.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    loginUser(inputValues);
  }

  return (
    <main className="h-screen w-full banner">
      <div className="flex flex-col items-center pt-20 h-screen">
        <form onSubmit={handleSubmit} className="bg-white w-96 mt-6 p-4 rounded-lg shadow-lg">
          <div className="flex flex-col space-y-6">
            <input
              type="mail"
              placeholder="Digite o seu email:"
              name="email"
              className="w-full px-4 py-3 rounded-lg ring-red-200 border border-gray-300 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl"
              onChange={handleChangeValues}
            />
            <input
              type="password"
              placeholder="Digite a sua senha:"
              name="password"
              className="w-full px-4 py-3 rounded-lg ring-red-200 border border-gray-300 focus:ring-4 focus:outline-none transition duration-300 focus:shadow-xl"
              onChange={handleChangeValues}
            />
          </div>
          <button type="submit" className="w-full py-3 bg-black text-white focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300">
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;