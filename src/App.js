import "./App.css";
import Hero from "./components/Hero";
import Places from "./components/Places";
import Content from "./components/Content";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Places />
      <Content />
      <Form />
    </div>
  );
}

export default App;
