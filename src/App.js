import AdidasSection from "./AdidasSection";
import ConverseSection from "./ConverseSection";
import Header from "./Header";
import JordanSection from "./JordanSection";
import NikeSection from "./NikeSection";
import VansSection from "./VansSection";

function App() {
  return (
      <div className="App">
        <Header />
        <NikeSection />
        <AdidasSection />
        <JordanSection />
        <VansSection />
        <ConverseSection />
      </div>
  );
}

export default App;
