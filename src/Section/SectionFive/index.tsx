import React from "react";
import equipe from "../../assets/foto-equipe.png";
import vetor from "../../assets/vetor.png";

const SectionFive = () => {
  return (
    <div className="bg-Section bg-no-repeat">
      <div className="flex container py-16 mx-auto">
        <div className="w-[65%] relative">
          <div className="flex text-center justify-around">
            <h1 className="text-white text-7xl">Quem somos nós ?</h1>{" "}
            <img src={vetor} alt="" width={200} />
          </div>
          <div className="absolute top-44 bg-equipe max-w-full w-[50%] h-full bg-no-repeat"></div>
          <div className="absolute bg-brilho1 w-full h-full bg-no-repeat top-[33rem] right-28"></div>
          <div className="absolute bg-brilho1 w-full h-full bg-no-repeat top-10 left-[52rem]"></div>
          <img src={equipe} className="" />
        </div>
        <div className="w-[45%]">
          <h6 className="text-white">
            A BMouse é muito mais do que uma agência de marketing. Somos uma
            agência de criatividade com um compromisso inabalável em levar a sua
            marca a novos patamares. Contamos com uma{" "}
            <strong>equipe de profissionais</strong> altamente capacitados e
            dedicados cuja paixão pela criativade é evidente em tudo o que
            fazemos.
          </h6>
          <h6 className="text-white">
            O nosso diferencial ? Possuímos o <strong> Bmouse Studios</strong>,
            um espaço equipado com tecnologia de ponta, garantido que cada
            conteúdo audiovisual produzido atenda aos mais altos padrões de
            qualidade. Com <strong>equipamentos de última geração</strong>,
            criamos imagens que parecem sair diretamente das telas de cinema
          </h6>

          <h5 className="text-white">
            Conte com a <strong>Bmouse</strong> para fazer a{" "}
            <strong>diferença no mercado</strong>e{" "}
            <strong>expandir a sua franquia.</strong>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
