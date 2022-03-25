import React, { useState } from "react";
import Header from "./components/Header/Header";
import Intro from "./components/intro/Intro";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import Resume from "./components/Resume/Resume";

//We set the main components from our app to intro and render.

const App = () => {
  const [currentPage, setCurrentPage] = useState ('Intro');

  //We check the value of currentPage and we return the value to render
  const renderPage = () => {
    if(currentPage ==='Intro'){
      return <Intro />
    }
    if(currentPage ==='Portfolio'){
      return <Portfolio />
    }
    if(currentPage ==='Contact'){
      return <Contact />
    }
    if(currentPage ==='Resume'){
      return <Resume />
    };

    const handlePageChange = (page) => setCurrentPage(page);
    return (
      
    )
  }
}