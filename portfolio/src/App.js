import React, { useState } from "react";
import Header from "./components/Header/Header";
import Intro from "./components/intro/Intro.js";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import Resume from "./components/Resume/Resume";

//We set the main components from our app to intro and render.

const App = () => {
  const [currentPage, setCurrentPage] = useState ('Intro');
  // console.log(currentPage)
  //We check the value of currentPage and we return the value to render
  const renderPage = () => {
    // console.log("where is this?")
    if(currentPage ==='Intro'){
      return <Intro />
    }
    if(currentPage ==='Portfolio'){
      return <Portfolio />
    }
    if(currentPage ==='Contact'){
      return <Contact />
    }
    return <Resume />
    
  };

    const handlePageChange = (page) => setCurrentPage(page);
    return (
      <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
    );
};

export default App;