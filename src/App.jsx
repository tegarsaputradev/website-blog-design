import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
// import { Helmet } from "react-helmet";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <style>{"body {background-color: #ebebeb;}"}</style>

      <Header />
      <Nav />
      <div className="container-main">
        <div className="row">
          <Main />
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
