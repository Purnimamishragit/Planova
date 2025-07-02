import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import './App.css';
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value"; // Make sure this exists
import Contact from "./components/Contacts/Contact";
import GetStarted from "./components/GetStarted/GetStarted";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
    </div>
  );
}

export default App;

// import React from 'react'
// const Header = () => {
//     return(
//         <div>Header</div>
//     )
// }
// export default Header
