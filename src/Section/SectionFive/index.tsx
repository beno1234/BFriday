import equipe from "../../assets/teste-imagem-equipe.png";

const SectionFive = () => {
  return (
    <div className="bg-Section bg-no-repeat">
      <div className="flex container py-16 mx-auto">
        <div className="w-[65%]">
          <div className="flex items-center">
            <h1 className="text-white text-7xl font-bold">Quem somos nós?</h1>
          </div>
          <img src={equipe} alt="Equipe" className="" />
        </div>
        <div className="w-[45%] text-right leading-loose">
          <p className="text-white mb-10 text-2xl">
            A BMouse é muito mais do que uma agência de marketing. Somos uma
            agência de criatividade com um compromisso inabalável em levar a sua
            marca a novos patamares. Contamos com uma{" "}
            <strong className="text-blue-500">equipe de profissionais</strong>{" "}
            altamente capacitados e dedicados cuja paixão pela criatividade é
            evidente em tudo o que fazemos.
          </p>
          <p className="text-white mb-20 text-2xl">
            O nosso diferencial? Possuímos o{" "}
            <strong className="text-blue-500">Bmouse Studios</strong>, um espaço
            equipado com tecnologia de ponta, garantindo que cada conteúdo
            audiovisual produzido atenda aos mais altos padrões de qualidade.
            Com{" "}
            <strong className="text-blue-500">
              equipamentos de última geração
            </strong>
            , criamos imagens que parecem sair diretamente das telas de cinema.
          </p>

          <p className="text-white text-2xl">
            Conte com a <strong className="">Bmouse</strong> para fazer a{" "}
            <strong className="">diferença no mercado</strong> e{" "}
            <strong className="">expandir a sua franquia.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
