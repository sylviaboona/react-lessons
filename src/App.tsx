import React from "react";
import "./assets/css/App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";
function App() {
  return (
    <div> 
      <Header />
      <div className="row">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
