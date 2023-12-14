import ursa from "../../assets/Ursa.png";

const SectionSix = () => {
  return (
    <section className=" px-4 md:px-16 py-8">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
        <div
          className="w-full md:w-1/2 md:pr-8  md:text-left "
          data-aos="fade-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Transforme sua marca com a BMouse
          </h1>
          <p className="mb-4 text-base md:text-lg">
            Na BMouse, garantimos o seu sucesso. Oferecemos soluções de
            marketing que vão impulsionar sua presença online e destacar sua
            marca no mercado.
          </p>
          <ul className="list-disc ml-6 mb-4 text-base md:text-lg">
            <li>
              Vídeos de alta qualidade contando a história da sua empresa de
              forma criativa e envolvente;
            </li>
            <li>
              Presença digital profissional com designs incríveis que atraem e
              mantêm sua audiência;
            </li>
            <li>
              Identidade visual que destaca sua marca e a posiciona em destaque
              no mercado;
            </li>
            <li>
              Endomarketing assertivo, motivando e aproximando os colaboradores;
            </li>
            <li>
              Criação de Sites e LP's destacando sua empresa, produtos e
              serviços;
            </li>
            <li>
              Assessoria em eventos, criando todo material necessário para
              destacar sua presença.
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <img
            src={ursa}
            alt="Descrição da imagem"
            className="w-full h-auto hidden md:block rounded-lg shadow-md"
            data-aos="fade-right"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
