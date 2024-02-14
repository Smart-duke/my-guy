import ChooseUs from "../components/ChooseUs";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
import Hero1 from "../components/Hero1";
import NavBar from "../components/NavBar";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero1 />
      <ChooseUs />
      <Testimonial />
      <Explore />
      <Footer />
    </div>
  );
};

export default Home;
