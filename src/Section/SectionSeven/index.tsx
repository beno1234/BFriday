import TomRoberta from "../../assets/tom-roberta.png";
import Logos from "../../assets/logos-clientes.png";

const SectionSeven = () => {
  return (
    <section className="bg-gradient-to-r from-purple-800 to-blue-800 py-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 pr-8">
          {/* Substitua a próxima linha pelo código real de incorporação da imagem */}
          <img
            src={TomRoberta}
            alt="Descrição da imagem"
            className="w-full h-auto rounded-lg shadow-md"
            data-aos="fade-up"
          />
        </div>
        <div className="w-full md:w-1/2 pl-8 text-white" data-aos="fade-up">
          <h1 className="text-3xl md:text-5xl uppercase font-bold mb-4">
            Conheça alguns de nossos clientes:
          </h1>
          <p className="text-base md:text-lg leading-loose">
            COM MAIS DE 50 NOMES EM NOSSO PORTFÓLIO DE CLIENTES, TEMOS COMO
            PARCEIROS CLIENTES DOS MAIS DIVERSOS SETORES. DO AGRO AO
            FRANCHISING, SOMOS ESPECIALISTAS EM CRIATIVIDADE PREPARADOS PARA
            LEVAR SUA EMPRESA A NOVOS HORIZONTES.
          </p>
          <div className="mt-6 md:mt-12">
            <img
              src={Logos}
              alt="Logos dos clientes"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSeven;
