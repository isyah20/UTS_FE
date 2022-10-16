import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

/*export default function App() {
  return (
  <div>
    <h1>Route pada React</h1>
    <nav
      style={{
      borderBottom: "solid 1px",
      paddingBottom: "1rem",
    }}
    >
    <Link to="/invoice">Invoice</Link> |{" "}
    <Link to="/pembayaran">Pembayaran</Link>
    </nav>
    <Outlet />
    </div>
    );
  }*/



//import logo from './logo.svg';
import './App.css';
//import Komponen1 from './components/Komponen1';
//import ClassKomponen from './components/ClassKomponen';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
//import './flex.css';
import Flex from './components/Flex';
//import './card.css';
import Card from './components/card/Card';




function App() {
  return (
    <div ClassName=" ">
      <Navbar />
      <Header/>
      {/*<Flex/>*/}
      <div className="container mt-4">
        <Content/>
      </div>
      {/* <><div class="right-container">
        <Card />
        <Card />
        <Card />
  </div><Flex /></>*/}
       <br/>  
       <Footer />
       <Outlet />
     </div>
   );
 }

 export default App;