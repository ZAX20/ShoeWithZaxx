import AdidasSection from "./AdidasSection";
import ConverseSection from "./ConverseSection";
import CopyrightSection from "./CopyrightSection";
import FooterSection from "./FooterSection";
import Header from "./Header";
import JordanSection from "./JordanSection";
import NikeSection from "./NikeSection";
import VansSection from "./VansSection";
import 'swiper/css';

function App() {
  return (
      <div className="App">
        <Header />
        <NikeSection />
        <AdidasSection />
        <JordanSection />
        <VansSection />
        <ConverseSection />
        <FooterSection />
        <CopyrightSection />
      </div>
  );
}

export default App;
