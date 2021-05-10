// Parent Component ===> App.tsx
// mostly carries data ... ===> passed on to the children ==> passing props ...

//Child components
import Header from "./components/Header";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import "././assets/css/App.css";
import Footer from "./components/Footer";

const App = () => (
  <div>
    <Header />
    <NavBar />
    <div className="row">
      <Sidebar />
      <Main />
    </div>
    <Footer/>
  </div>
);

export default App;
