import estilos from "../assets/css/stylos.module.css";
import Ilustracion from "../assets/images/svg/coding_red.svg"

export function Navar(){
   
    return(
        <section className={estilos.div}>
        <header className={estilos.header}>
        <section className={estilos.opacidad}>
        <h1>Juan Fernández</h1>
        
         <nav>
            <ul className={estilos.ul}>
               <a href="index.html" className={`${estilos.a} ${estilos.home}`}>
                    <li className={estilos.li}>
                        <span> Inicio</span>
                        <i></i>
                    </li>
                </a>

                <a href="#sobremi" className={`${estilos.a} ${estilos.user}`}>
                    <li className={`${estilos.li} ${estilos.sbr}`}>
                        <span>Sobre Mi</span>
                        <i></i>
                    </li>
                </a>

                <a href="#proyectos" className={`${estilos.a} ${estilos.proyect}`}>
                    <li className={`${estilos.li} ${estilos.pry}`}>
                        <span>Proyectos</span>
                        <i></i>
                    </li>
                </a>

                <a href="#certificados" className={`${estilos.a} ${estilos.certifi}`}>
                    <li className={`${estilos.li} ${estilos.cert}`}>
                        <span>Certificados</span>
                        <i></i>
                    </li>
                </a>

                <a href="#contacto" className={`${estilos.a} ${estilos.contact}`}>
                    <li className={`${estilos.cont} ${estilos.li}`}>
                        <span>Contacto</span>
                        <i></i>
                    </li>
                </a>
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