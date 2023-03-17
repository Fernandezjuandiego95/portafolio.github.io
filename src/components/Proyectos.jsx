import estilosProyectos from "../assets/css/proyectos.module.css"
import { SliderTomala} from "./SliderTomala";
import {Tecnologias} from "./Tecnologias";
import gitHub from "../assets/images/svg/github.svg";

export function Proyectos(){
   
    return(
        <section id="proyectos" className={estilosProyectos.section}>

         <h2 className={estilosProyectos.h2}>Proyectos</h2>

         <div className={estilosProyectos.cajapadre}>

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
                    <a href="#" className={estilosProyectos.visitar}>Visitar</a>
                    <a href="https://github.com/Fernandezjuandiego95/I.E.T.A-Tomala" className={estilosProyectos.ihub}> 
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
              <div className={estilosProyectos.caja} id="proyect2">
                  <div>

                  {
                  //trabajar aqui
                  }

                  </div>
                  <div className={estilosProyectos.divflechas}>
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