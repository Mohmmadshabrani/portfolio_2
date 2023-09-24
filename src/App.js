import "./App.css";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import About from "./components/about/about";
import Capabilities from "./components/capabilities/capablities";
import HireMe from "./components/hire-me/hire-me";
import Footer from "./components/footer/footer";
import Portfolio from "./components/portfolio/portfolio";
import ContactMe from "./components/contact-me/contact-me";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Capabilities></Capabilities>
      <Portfolio></Portfolio>
      <HireMe></HireMe>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </>
  );
}
export default App;

