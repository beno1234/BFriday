import React from "react";
import TomRoberta from "../../assets/tom-roberta.png";

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
          <h1 className="text-4xl font-bold mb-4 text-white">
            Título do Lado Direito
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            fringilla, urna et dapibus ultricies, elit purus lacinia enim.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionSeven;
