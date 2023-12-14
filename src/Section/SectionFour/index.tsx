import calendario from "../../assets/calendario.png";
import { Botao } from "../../components/Button";

export const SectionFour = () => {
  return (
    <div className="container py-16 px-4 lg:px-0 mx-auto">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-3/5" data-aos="fade-left">
          <h1 className="font-semibold text-3xl md:text-5xl mb-5">
            Quer elevar o seu faturamento e aproveitar as condições especiais?
          </h1>
          <p className="text-base md:text-xl">
            A <strong>Bmouse Productions</strong> é uma agência de criatividade
            preparada para impulsionar o seu crescimento. Com um arsenal de
            cinema e especialistas das mais diversas áreas de criação, somos uma
            agência 360° que dispensa terceirizações! Aqui dentro, temos tudo
            que seu negócio precisa para alcançar o sucesso à sua disposição.
          </p>
          <div className="mt-4">
            <Botao />
          </div>
        </div>
        <div className="w-full md:w-[90%] mb-8 md:mb-0" data-aos="fade-right">
          <img src={calendario} alt="Calendário" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
