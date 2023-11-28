import Tom from "../../assets/foto-tom.png";
import LogoBfridy from "../../assets/Logo-Bfriday.png";
import LogoBmouse from "../../assets/Logo-Bmose.png";

export const Hero = () => {
  return (
    <section className="bg-BG relative">
      <div className="container flex mx-auto px-4 py-16 items-center justify-center">
        <div className="w-[40%] mr-8">
          <img
            src={Tom}
            alt="Foto do Tom"
            className="h-full w-full rounded-md shadow-md object-cover"
          />
        </div>
        <div className="w-[60%] ">
          <div className="flex">
            <img src={LogoBfridy} className="absolute top-10 w-[30%]" />
            <img
              src={LogoBmouse}
              className="absolute top-[8rem] w-[10%] right-40"
            />
          </div>

          <h1 className="text-4xl lg:text-4xl 2xl:text-[4.5rem] 2xl:leading-[4rem] text-white leading-[3.125rem] relative py-10">
            <span className="absolute content-[''] w-full h-[2px] bg-blue-500 top-0 left-0 right-0 mx-auto "></span>
            Está na hora de transformar o faturamento da sua empresa.
            <span className="after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-blue-500 after:bottom-0 after:left-0 after:right-0 after:mx-auto after:"></span>
          </h1>
        </div>
      </div>
    </section>
  );
};
