import { Botao } from "../../components/Button";

export const SectionTwo = () => {
  return (
    <>
      <section className="container flex mx-auto items-center mt-32 justify-between">
        <div className="w-[40%]">
          <h3 className="text-5xl ">
            Essa é a sua chance de ter uma{" "}
            <strong>equipe de marketing all in one</strong> de verdade do seu
            lado!
          </h3>
        </div>
        <div className="w-[40%]">
          <h3 className="text-5xl">
            Preparamos uma <strong>oferta especial</strong> para{" "}
            <strong>voce transformar seu faturamento</strong> da sua empresa em
            2024!
          </h3>
        </div>
      </section>
      <div className="container mx-auto">
        <Botao estilo="secundario" />
      </div>
    </>
  );
};

export default SectionTwo;
