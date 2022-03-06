import React from "react";

import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work,
  TypeGame,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    {/* <Testimonial /> */}
    <TypeGame />
    <Footer />
  </div>
);

export default App;
