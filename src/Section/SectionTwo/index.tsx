import { Botao } from "../../components/Button";

export const SectionTwo = () => {
  return (
    <>
      <section className="container flex mx-auto items-center mt-32 justify-between">
        <div className="w-[45%] pr-8">
          <h3 className="text-5xl font-semibold">
            Essa é a sua chance de ter uma{" "}
            <span className="text-blue-500">
              equipe de marketing all in one
            </span>{" "}
            de verdade do seu lado!
          </h3>
        </div>
        <div className="w-[45%] pl-8">
          <h3 className="text-5xl font-semibold">
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
        <Botao estilo="secundario" />
      </div>
    </>
  );
};

export default SectionTwo;
