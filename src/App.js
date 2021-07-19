import "./App.css";
import Hero from "./components/Hero";
import Places from "./components/Places";
import Content from "./components/Content";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Places />
      <Content />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
