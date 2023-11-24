import Tom from "../../assets/foto-tom.png";

export const Hero = () => {
  return (
    <section className="bg-BG">
      <div className="container flex mx-auto px-4 py-16 items-center justify-center">
        <div className="w-[40%]">
          <img
            src={Tom}
            alt="Foto do Tom"
            className=" h-auto rounded-md shadow-md bg-fundo bg-no-repeat bg-center"
          />
        </div>
        <div className="w-[60%] ml-32">
          <h1 className="text-4xl lg:text-4xl 2xl:text-[3.5rem] 2xl:leading-[4rem] text-white leading-[3.125rem]">
            {" "}
            Está na hora{" "}
            <strong className="text-[#99CC33]">
              de transformar o faturamento
            </strong>{" "}
            da sua empresa.
          </h1>
        </div>
      </div>
    </section>
  );
};
