import { HomeContainerSC } from "./styles.js";

// Component
import Banner from "../../components/Banner/Banner";
import PaySection from "../../Sections/PaySection/PaySection.jsx";
import ServicesSection from "../../Sections/ServicesSection/ServicesSection.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";

function HomeScreen() {
  return (
    <HomeContainerSC>
      <Navbar />
      <Banner />
      <PaySection />
      <ServicesSection />
    </HomeContainerSC>
  );
}

export default HomeScreen;
