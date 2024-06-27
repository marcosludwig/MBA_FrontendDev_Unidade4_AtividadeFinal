import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-center text-sm text-green-500 p-5">
      Sérviam! Desenvolvido por © <a href="http://about.me/marcosludwig" className="hover:text-green-700 transition duration-300 ease-in-out">MPL</a> {" "} 
      para a disciplina de Frontend Development no curso {" "} 
      <a href="https://unyleya.edu.br/pos-graduacao-ead/curso/mba-em-desenvolvimento-full-stack" className="hover:text-green-700 transition duration-300 ease-in-out">
        MBA de Desenvolvimento Full Stack, Faculdade Unyleya
      </a>
     .
    </footer>
  );
};

export default Footer;