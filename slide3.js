import './App.css';
import { Outlet } from "react-router-dom";
//import { Link } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
//import Header from './components/Header';
//import Content from './components/Content';
import Footer from './components/Footer';
import White from './components/White';



function slide3() {
  return (
    <div ClassName="App">
      <Navbar />
      <White/>
      {/* <div className="container mt-4">
        <Content/>
      </div> */}
       <br/>  
       <Footer />
       <Outlet />
     </div>
   );
 }
 
export default slide3;