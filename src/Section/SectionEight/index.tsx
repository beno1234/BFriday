import TomChave from "../../assets/tom-chave.png";

const SectionEight = () => {
  return (
    <section className="bg-Section py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div
          className="w-full md:w-2/3 md:pr-8 text-center md:text-left"
          data-aos="fade-right"
        >
          <h1 className="text-3xl md:text-5xl  font-bold mb-4 text-white">
            Não perca essa oportunidade 🚀
          </h1>
          <p className="mb-4 text-lg md:text-xl text-white">
            Ao aderir ao plano anual, você garante uma mensalidade por nossa
            conta! Aproveite esse presente exclusivo e potencialize o sucesso do
            seu negócio.
          </p>
        </div>
        <div className="w-full md:w-1/3 mt-6 md:mt-0">
          {/* Substitua a próxima linha pelo código real de incorporação da imagem */}
          <img
            src={TomChave}
            alt="Ilustração de uma chave"
            className="w-full h-auto rounded-lg shadow-md"
            data-aos="fade-left"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionEight;
