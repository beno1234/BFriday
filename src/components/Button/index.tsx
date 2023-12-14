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
      size="lg"
      ripple={true}
      color={estilo === "principal" ? "green" : "indigo"}
      className={`w-full mt-7 font-bold text-xl md:text-2xl rounded-full py-3 ${
        estilo === "principal"
          ? "bg-green-500 hover:bg-green-600 text-white"
          : "bg-indigo-500 hover:bg-indigo-600 text-white"
      }`}
    >
      Entre em contato conosco
    </Button>
  );
};
