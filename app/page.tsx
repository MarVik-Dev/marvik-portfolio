import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("./components/layout/NavBar"));
const Hero = dynamic(() => import("./components/layout/Hero"));
const About = dynamic(() => import("./components/layout/About"));
const Projects = dynamic(() => import("./components/layout/Projects"));
const Reviews = dynamic(() => import("./components/layout/Reviews"));
const Features = dynamic(() => import("./components/layout/Features"));
const FAQs = dynamic(() => import("./components/layout/FAQs"));
const Communication = dynamic(
  () => import("./components/layout/Communication")
);
const Footer = dynamic(() => import("./components/layout/Footer"));

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <div className="flex flex-col container dark:bg-transparent/10 border border-y-0  dark:border-indigo-50/20">
        <About />
        <FAQs />
        <Features />
        {/* Soon */}
        <Projects />
        <Reviews />
        <Communication />
      </div>
      <Footer />
    </>
  );
};

export default Home;
