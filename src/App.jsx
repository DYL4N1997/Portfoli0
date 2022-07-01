import React from "react";

// import { About, Header, Featured, Footer, Projects, Skills } from "./container";
import { Navbar } from "./components";
import Header from './components/Header/Header'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from "./components/Footer/Footer";

import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
