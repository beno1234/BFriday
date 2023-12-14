import { useEffect, useState } from "react";
import { Hero } from "./Section/Hero";
import SectionEight from "./Section/SectionEight";
import SectionFive from "./Section/SectionFive";
import SectionFour from "./Section/SectionFour";
import SectionSeven from "./Section/SectionSeven";
import SectionSix from "./Section/SectionSix";
import AllInOne from "./Section/SectionThree";
import SectionTwo from "./Section/SectionTwo";
import AOS from "aos";
import "aos/dist/aos.css";
import LoadingScreen from "./home/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 2500, // Ajuste conforme necessário
    });
  }, []);

  useEffect(() => {
    // Simula um tempo de carregamento
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Limpeza do temporizador ao desmontar o componente
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        // Renderize o restante da sua aplicação aqui
        <div>
          <Hero />
          <SectionTwo />
          <AllInOne />
          <SectionFour />
          <SectionFive />
          <SectionSix />
          <SectionSeven />
          <SectionEight />
        </div>
      )}
    </>
  );
}

export default App;

/*     <div>
      
    </div> */
