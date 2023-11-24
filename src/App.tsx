import { Hero } from "./Section/Hero";
import SectionEight from "./Section/SectionEight";
import SectionFive from "./Section/SectionFive";
import SectionFour from "./Section/SectionFour";
import SectionSeven from "./Section/SectionSeven";
import SectionSix from "./Section/SectionSix";
import AllInOne from "./Section/SectionThree";
import SectionTwo from "./Section/SectionTwo";

function App() {
  return (
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
  );
}

export default App;
