import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/navigationbar";
import Banner from "./img/Pizza Banner.jpg";
import BodyContent from "./components/bodycontent";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      {/* <img src={Banner} alt="" /> */}
      <NavigationBar img={Banner}></NavigationBar>
      <BodyContent></BodyContent>
      <Footer></Footer>
    </div>
  );
}

export default App;
