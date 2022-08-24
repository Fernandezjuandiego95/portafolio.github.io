import estilos from "../assets/css/stylos.module.css";
import Ilustracion from "../assets/images/svg/coding_red.svg"

export function Navar(){
   
    return(
        <section className={estilos.div}>
        <header className={estilos.header}>
        <section className={estilos.opacidad}>
        <h1>Juan Fernández</h1>
        
         <nav>
            <ul>
               <li>
                   <a href="index.html">
                      <span> Inicio</span>
                      <i></i>
                    </a>
                </li>
                <li>
                   <a href="#sobremi" className={estilos.sbr}>
                       <span>Sobre Mi</span>
                       <i></i>
                    </a>
                </li>
               <li>
                   <a href="#proyectos" className={estilos.pry}>
                       <span>Proyectos</span>
                       <i></i>
                    </a>
                </li>
               <li>
                   <a href="#certificados" className={estilos.cert}>
                       <span>Certificados</span>
                       <i></i>
                    </a>
                </li>
               <li>
                   <a href="#contacto" className={estilos.cont}>
                       <span>Contacto</span>
                       <i></i>
                    </a>
                </li>
           </ul>
            </nav>
            </section>
            </header>

            <h2 className={estilos.h2}>Juan Fernández</h2>
            <p>
                Desarrollador Web
            </p> 
             <span className={estilos.maquina_escribir}>Nunca dejes de aprender algo nuevo.</span> 
             
            <img loading="lazy" src={Ilustracion} alt="Ilustracion" className={estilos.ilustracion}/>
        </section>
         
    )
}