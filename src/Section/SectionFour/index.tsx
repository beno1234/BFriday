import calendario from "../../assets/calendario.png";
import { Botao } from "../../components/Button";

export const SectionFour = () => {
  return (
    <div className="container py-16 mx-auto">
      <div className="flex items-center ">
        <div className="w-[40%]">
          <h1 className="font-semibold text-6xl mb-5">
            Quer elevar o seu faturamento e aproveitar as condições especiais?
          </h1>
          <p className="text-xl">
            A <strong>Bmouse Productions</strong> é uma agência de criatividade
            preparada para impulsionar o seu crescimento. Com um arsenal de
            cinema e especialista das mais diversas áreas de criação. Somos uma
            agência 360° que dispensa terceirizações! Aqui dentro, temos tudo
            que seu negócio precisa para alcançar o sucesso à sua disposição.{" "}
          </p>
          <div>
            <Botao />
          </div>
        </div>
        <div className="w-[60%]">
          <img src={calendario} alt="Calendário" />
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
