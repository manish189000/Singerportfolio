import Nav from "../Navfooter/Nav";
import About2 from "../Pages/About1";
import About1 from "../Pages/Abouthero";
import My from "../Pages/My";
import Mordern from "../Pages/Mordern";
import Arts from "../Pages/Arts";
import Social from "../Pages/Social";
import Footer from "../Navfooter/Footer";
import Press from "../Pages/Press";
import Testmonial from "../Testimonial";

const About = () => {
  return (
    <>
      <Nav />

      <div className="">
        <About1 />

        <About2 />
        <My />
        <Arts />
        <Press />
        <Social />
        <Testmonial />
        <Footer />
      </div>
    </>
  );
};

export default About;
