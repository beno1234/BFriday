import Tom from "../../assets/foto-tom.png";
import LogoBfridy from "../../assets/Logo-Bfriday.png";
import LogoBmouse from "../../assets/Logo-Bmose.png";

export const Hero = () => {
  return (
    <section className="bg-BG relative">
      <div className="container flex flex-col lg:flex-row  mx-auto px-4 py-8 items-center justify-center">
        <div className="w-full lg:w-2/5 mb-8  lg:mr-0" data-aos="fade-up">
          <img
            src={Tom}
            alt="Foto do Tom"
            className="h-full w-full rounded-md shadow-md object-cover"
          />
        </div>
        <div className="w-full lg:w-3/5 ">
          <div
            className="flex justify-center lg:absolute lg:top-10 lg:w-[30%]"
            data-aos="fade-up"
          >
            <img src={LogoBfridy} className="w-full" />
            <div
              className="flex justify-center lg:absolute lg:top-[4rem] lg:left-[40rem] lg:w-[50%]"
              data-aos="fade-up"
            >
              <img src={LogoBmouse} className="w-full" />
            </div>
          </div>

          <h1
            className="text-5xl lg:text-4xl 2xl:text-[4.5rem] 2xl:leading-[4rem] text-white leading-[3.125rem] relative py-10 text-center"
            data-aos="fade-up"
          >
            <span className="absolute content-[''] w-full h-[2px] bg-blue-500 top-0 left-0 right-0 mx-auto "></span>
            Está na hora de transformar o faturamento da sua empresa.
            <span className="after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-blue-500 after:bottom-0 after:left-0 after:right-0 after:mx-auto after:"></span>
          </h1>
        </div>
      </div>
    </section>
  );
};
