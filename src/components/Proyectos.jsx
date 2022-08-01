import estilosProyectos from "../assets/css/proyectos.module.css"


export function Proyectos(){
   
    return(
        <section id="proyectos" className={estilosProyectos.section}>

         <h2 className={estilosProyectos.h2}>Proyectos</h2>

         <div className={estilosProyectos.cajapadre}>

              <div className={estilosProyectos.caja} id="caja1">
                  <div>
                      
                  <u>CAJA 1</u>

                  </div>
                  <div className={estilosProyectos.divflechas}>
                      <a href="#caja5">
                           <span className={estilosProyectos.flechaIzquierda}></span>
                      </a>
                      <a href="#caja2">
                           <span className={estilosProyectos.flechaDerecha}></span>
                      </a>
                  </div>
              </div>

              <div className={estilosProyectos.caja} id="caja2">
                  <div>

                  <u>CAJA 2</u>

                  </div>
                  <div className={estilosProyectos.divflechas}>
                      <a href="#caja1">
                         <span className={estilosProyectos.flechaIzquierda}></span>
                      </a>
                      <a href="#caja3">
                         <span className={estilosProyectos.flechaDerecha}></span>
                      </a>
                  </div>
              </div>

              <div className={estilosProyectos.caja} id="caja3">
                  <div>

                  <u>CAJA 3</u>

                  </div>
                  <div className={estilosProyectos.divflechas}>
                      <a href="#caja2">
                         <span className={estilosProyectos.flechaIzquierda}></span>
                      </a>
                      <a href="#caja4">
                         <span className={estilosProyectos.flechaDerecha}></span>
                      </a>
                  </div>
              </div>
  
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

              <div className={estilosProyectos.caja} id="caja5">
                  <div>

                      <u>CAJA 5</u>

                  </div>
                  <div className={estilosProyectos.divflechas}>
                      <a href="#caja4">
                         <span className={estilosProyectos.flechaIzquierda}></span>
                      </a>
                      <a href="#caja1">
                         <span className={estilosProyectos.flechaDerecha}></span>
                      </a>
                  </div>
              </div>




          </div>
        </section>
    )
}