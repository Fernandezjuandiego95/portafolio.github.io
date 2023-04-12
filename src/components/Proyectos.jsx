import estilosProyectos from "../assets/css/proyectos.module.css"
import { SliderTomala} from "./SliderTomala";
import {Tecnologias} from "./Tecnologias";
import gitHub from "../assets/images/svg/github.svg";
import {Tecnologias_dos} from "./Tecnologias_dos";
import {SliderJuego} from "./SliderJuego";

export function Proyectos(){
   
    return(
        <section id="proyectos" className={estilosProyectos.section}>

         <h2 className={estilosProyectos.h2}>Proyectos</h2>

         <div className={`${estilosProyectos.cajapadre} ${estilosProyectos.cajapadrejuego}`}>

         {/*-----------contenido del primer proyecto "Tomala"-------------*/}
              <div className={estilosProyectos.caja} id="proyect1">
                
                <span className={estilosProyectos.titulo}>
                <i>PROYECTO DE AULA:</i> Diseño de una aplicación web dinámica que sea capaz de fomentar los 
                procesos de enseñanza de las matemáticas como una ayuda complementaria
                en el aprendizaje de los estudiantes de grado quinto de la I. E. T. A 
                DE TOMALA.
                </span>
                <div className={estilosProyectos.ccc}> 
                    <SliderTomala/>
                    <Tecnologias/>
                    {/**El link de visita esta invisible, si quieres dar visivilidad hazlo en el css */}
                    <a href="#" className={`${estilosProyectos.visitar} ${estilosProyectos.ver}`}>Visitar</a>
                    <a href="https://github.com/Fernandezjuandiego95/I.E.T.A-Tomala" target="_blank" rel="noopener" className={estilosProyectos.ihub}> 
                    <img src={gitHub} alt="GitHub" className={estilosProyectos.redesimg}/>
                    </a>
                </div>
               
                  
                  <div className={estilosProyectos.divflechas}>
                      <a href="#proyect2">
                           <span className={estilosProyectos.flechaIzquierda}></span>
                      </a>
                      <a href="#proyect2">
                           <span className={estilosProyectos.flechaDerecha}></span>
                      </a>
                  </div> 
              </div>
              {/*----------------Fin primer proyecto------------------------------*/}
              
                <br/><br/><br/><br/><br/><br/>
             
              {/*------------------contenido del segundo proyecto-----------------*/}
              <div className={`${estilosProyectos.caja} ${estilosProyectos.cajajuego}`} id="proyect2">

                <span className={estilosProyectos.titulo}>
                    <i>PROYECTO PEROSNAL:</i> Juego De Memoria.
                </span>
                <div className={estilosProyectos.ccc}>
                    <SliderJuego/>
                    <Tecnologias_dos/>
                    <a href="https://fernandezjuandiego95.github.io/proyectoJuegoMemory.github.io/index.html" target="_blank" rel="noopener"
                     className={`${estilosProyectos.visitar} ${estilosProyectos.visitarjuego}`}>Visitar</a>
                    <a href="https://github.com/Fernandezjuandiego95/proyectoJuegoMemory.github.io" target="_blank" rel="noopener"
                     className={`${estilosProyectos.ihub} ${estilosProyectos.ihubjuego}`}> 
                    <img src={gitHub} alt="GitHub" className={estilosProyectos.redesimg}/>
                    </a>
                </div>
                  <div className={`${estilosProyectos.divflechas} ${estilosProyectos.divflechasjuego}`}>
                      <a href="#proyect1">
                         <span className={estilosProyectos.flechaIzquierda}></span>
                      </a>
                      <a href="#proyect1">
                         <span className={estilosProyectos.flechaDerecha}></span>
                      </a>
                  </div>
              </div>
              {/*-----------------------Fin segundo proyecto-------------------*/}
             
              <br/><br/><br/><br/><br/><br/>
{/*
              <div className={estilosProyectos.caja} id="caja3">
                  <div>

                  <u>CAJA 3</u>

                  </div>
                  <div className={estilosProyectos.divflechas}>
                      <a href="#proyect2">
                         <span className={estilosProyectos.flechaIzquierda}></span>
                      </a>
                      <a href="#caja4">
                         <span className={estilosProyectos.flechaDerecha}></span>
                      </a>
                  </div>
              </div>

              <br/><br/><br/><br/><br/><br/>
  
              <div className={estilosProyectos.caja} id="caja4">
                  <div> 

                     <u>CAJA 4</u>

                  </div>
                  <div className={estilosProyectos.divflechas}>
                      <a href="#caja3">
                         <span className={estilosProyectos.flechaIzquierda}></span>
                      </a>
                      <a href="#caja5">
                         <span className={estilosProyectos.flechaDerecha}></span>
                      </a>
                  </div>
              </div>

              <br/><br/><br/><br/><br/><br/>

              <div className={estilosProyectos.caja} id="caja5">
                  <div>

                      <u>CAJA 5</u>

                  </div>
                  <div className={estilosProyectos.divflechas}>
                      <a href="#caja4">
                         <span className={estilosProyectos.flechaIzquierda}></span>
                      </a>
                      <a href="#proyect1">
                         <span className={estilosProyectos.flechaDerecha}></span>
                      </a>
                  </div>
              </div>
    */}

          </div>
        </section>
    )
}