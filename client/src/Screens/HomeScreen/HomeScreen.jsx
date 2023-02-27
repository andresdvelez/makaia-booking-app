import { HomeContainerSC } from "./styles.js";

// Component
import Banner from "../../components/Banner/Banner";
import PaySection from "../../Sections/PaySection/PaySection.jsx";
import ServicesSection from "../../Sections/ServicesSection/ServicesSection.jsx";

function HomeScreen() {
  return (
    <HomeContainerSC>
      <Banner />
      <PaySection />
      <ServicesSection />
    </HomeContainerSC>
  );
}

export default HomeScreen;
