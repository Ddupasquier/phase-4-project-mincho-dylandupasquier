import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import "./index.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
