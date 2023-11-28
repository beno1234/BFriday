import ursa from "../../assets/Ursa.png";

const SectionSix = () => {
  return (
    <section className="px-16 py-8">
      <div className="container mx-auto flex items-center justify-center">
        <div className="w-1/2 pr-8">
          <h1 className="text-6xl font-bold mb-4">
            O que oferecemos aos nossos clientes?
          </h1>
          <p className="mb-4 text-xl">
            Na Bmouse nossa garantia é o seu Sucesso. Trabalhamos
            incansavelmente para oferecer soluções de marketing que transformam
            sua presença online e impulsionam sua marca.
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Vídeos de alta qualidade que contam a história da sua empresa de
              forma criativa e envolvente;
            </li>
            <li>
              Presença digital profissional e constante com designs incriveis
              que atraem e mantem sua audiência;
            </li>
            <li>
              Identidade visual que destacará sua marca e estabelecerá sua
              posição de destaque do mercado;
            </li>
            <li>
              Endormarketing assertivo que motiva e aproxima os colaboradores,
              gerando menos rotatividade no time;
            </li>
            <li>
              Criação de Sites e LP'S que destacam sua empresa, produtos e
              serviços proporcionando maior visibilidade no mundo digital;
            </li>
            <li>
              Assessoria em eventos, com criação de todo material necessário
              para destacar a sua presença, como modelo stand, papelaria,
              banners, e entre outros.
            </li>
          </ul>
        </div>
        <div className="w-1/2">
          {/* Substitua a próxima linha pelo código real de incorporação da imagem */}
          <img src={ursa} alt="Descrição da imagem" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
