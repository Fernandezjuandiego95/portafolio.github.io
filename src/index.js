import React from "react";
import ReactDOM from "react-dom";
import { Navar} from "./components/Navar";
import { Proyectos } from "./components/Proyectos";
import { SobreMi } from "./components/SobreMi";
import { Certificados} from "./components/Certificados";
import { Contacto } from "./components/Contacto";
import  Cubo  from "./components/Cubo";
import { Footer } from "./components/Footer";
import "./index.css";



function Componente(){
  return(
    <div>
      <Navar/>
      <Cubo/>
      <SobreMi/>
      <Proyectos/>
      <Certificados/>
      <Contacto/>
      <Footer/>
    </div>
  )
}

ReactDOM.render(<Componente/>, document.getElementById("root"))