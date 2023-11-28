import React from "react";
import TomRoberta from "../../assets/tom-roberta.png";
import Logos from "../../assets/logos-clientes.png";

const SectionSeven = () => {
  return (
    <section className=" bg-FundoRoberta">
      <div className="container mx-auto flex items-center justify-center">
        <div className="w-1/2">
          {/* Substitua a próxima linha pelo código real de incorporação da imagem */}
          <img
            src={TomRoberta}
            alt="Descrição da imagem"
            className="w-full h-auto"
          />
        </div>
        <div className="w-1/2 pl-8">
          <h1 className="text-4xl uppercase font-bold mb-4 text-white">
            Conheça alguns de nossos clientes:
          </h1>
          <p className="text-white">
            COM MAIS DE 50 NOMES EM NOSSO PORTFÓLIO DE CLIENTES, TEMOS COMO
            PARCEIROS CLIENTES DOS MAIS DIVERSOS SETORES.DO AGRO AO FRANCHISING,
            SOMOS ESPECIALISTAS EM CRIATIVIDADE PREPARADOS PARA LEVAR SUA
            EMPRESA A NOVOS HORIZONTES.
          </p>
          <img src={Logos} className="mt-16" />
        </div>
      </div>
    </section>
  );
};

export default SectionSeven;
