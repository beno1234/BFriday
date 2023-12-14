import { Botao } from "../../components/Button";

export const SectionTwo = () => {
  return (
    <>
      <section className="container mx-auto text-center lg:text-left flex flex-col md:flex-row items-center mt-8 md:mt-32 justify-between">
        <div className="w-full md:w-1/2 pr-4" data-aos="fade-up">
          <h3 className="text-3xl md:text-5xl font-semibold">
            Essa é a sua chance de ter uma{" "}
            <span className="text-blue-500">
              equipe de marketing all in one
            </span>{" "}
            de verdade do seu lado!
          </h3>
        </div>
        <div className="w-full md:w-1/2 pl-4 mt-4 md:mt-0" data-aos="fade-up">
          <h3 className="text-3xl md:text-5xl font-semibold">
            Preparamos uma{" "}
            <span className="text-blue-500">oferta especial</span> para{" "}
            <span className="text-blue-500">
              você transformar seu faturamento
            </span>{" "}
            da sua empresa em 2024!
          </h3>
        </div>
      </section>
      <div className="container mx-auto mt-8">
        <Botao estilo="secundario" data-aos="fade-up" />
      </div>
    </>
  );
};

export default SectionTwo;
