import "./App.css";
import Footer1 from "./components/Footer1";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import Header3 from "./components/Header3";
import Header4 from "./components/Header4";
import Header5 from "./components/Header5";
import Header6 from "./components/Header6";
import Header7 from "./components/Header7";
import Header8 from "./components/Header8";
import Header9 from "./components/Header9";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        <Header1 />
      </div>
      <Header2 />
      <Header3 />
      <Header4 />
      <Header5 />
      <Header6 />
      <Header7 />
      <Header8 />
      <Header9 />
      <Footer1 />
    </>
  );
}

export default App;
