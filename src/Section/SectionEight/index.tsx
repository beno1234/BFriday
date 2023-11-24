import React from "react";
import TomChave from "../../assets/tom-chave.png";

const SectionEight = () => {
  return (
    <section className="bg-Section">
      <div className="container mx-auto flex items-center justify-center">
        <div className="w-2/3 pr-8">
          <h1 className="text-5xl font-bold mb-4 text-white">
            Título Bem Grande
          </h1>
          <p className="mb-4 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            fringilla, urna et dapibus ultricies, elit purus lacinia enim. Sed
            vestibulum justo id velit faucibus, in efficitur nisi dignissim.
            Fusce malesuada sem sit amet mi posuere fermentum.
          </p>
        </div>
        <div className="w-1/3">
          {/* Substitua a próxima linha pelo código real de incorporação da imagem */}
          <img
            src={TomChave}
            alt="Descrição da imagem"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionEight;