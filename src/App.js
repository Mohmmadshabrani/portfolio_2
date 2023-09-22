import "./App.css";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import About from "./components/about/about";
import Capabilities from "./components/capabilities/capablities";
import HireMe from "./components/hire-me/hire-me";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Capabilities></Capabilities>
      <HireMe></HireMe>
      <Footer></Footer>
    </>
  );
}

export default App;
