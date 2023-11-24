import { Button } from "@material-tailwind/react";

interface BotaoProps {
  estilo?: "principal" | "secundario";
}

export const Botao: React.FC<BotaoProps> = ({ estilo = "principal" }) => {
  function redirecionar() {
    window.open(
      "https://wa.me/5534999306776?text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site%2C+gostaria+de+receber+mais+informa%C3%A7%C3%B5es+sobre+os+servi%C3%A7os+de+voc%C3%AAs.",
      "_blank"
    );
  }

  return (
    <Button
      onClick={redirecionar}
      size="md"
      className={`${
        estilo === "principal"
          ? "bg-[#99CC33] text-[#181b1f]"
          : "bg-[#6254e5] text-white "
      } w-full h-[4rem] mt-7 font-bold text-3xl rounded-md`}
    >
      Entre em contato conosco
    </Button>
  );
};
