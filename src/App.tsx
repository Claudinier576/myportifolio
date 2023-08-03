import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useState } from 'react';

export interface GenericProps {
  language: "pt-br" | "en";
  setLanguage?: React.Dispatch<React.SetStateAction<"pt-br" | "en">>;
}

function App() {
  const [language, setLanguage] = useState<"pt-br" | "en">("pt-br");
  return (
    <div className="App">
      <NavBar language={language} setLanguage={setLanguage} />
      <Banner language={language} />
      <Skills language={language} />
      <Projects  language={language}/>
      <Contact  language={language}/>
      <Footer language={language} />
    </div>
  );
}

export default App
