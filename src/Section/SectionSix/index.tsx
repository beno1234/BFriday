import ursa from "../../assets/Ursa.png";

const SectionSix = () => {
  return (
    <section className="px-16 py-8">
      <div className="container mx-auto flex items-center justify-center">
        <div className="w-1/2 pr-8">
          <h1 className="text-4xl font-bold mb-4">
            O que oferecemos aos nossos clientes?
          </h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            fringilla, urna et dapibus ultricies, elit purus lacinia enim.
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
            <li>Item 6</li>
            <li>Item 7</li>
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
