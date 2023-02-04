import estilos from "../assets/css/slidertomala.module.css";
import Tomala1 from "../assets/proyectos/tomala1.png";
import Tomala2 from "../assets/proyectos/tomala2.png";
import Tomala3 from "../assets/proyectos/tomala3.png";
import Tomala4 from "../assets/proyectos/tomala4.png";
import Tomala5 from "../assets/proyectos/tomala5.png";
import Tomala6 from "../assets/proyectos/tomala6.png";

export function SliderTomala(){

    return(
        <div className={estilos.div} >

            <ul className={estilos.ul}>
                <li className={estilos.li}>
                    <img src={Tomala1} className={estilos.imagen}/>
                </li>

                <li className={estilos.li}>
                    <img src={Tomala2} className={estilos.imagen}/>
                </li>
 
                <li className={estilos.li}>
                    <img src={Tomala3} className={estilos.imagen}/>
                </li>
            
                <li className={estilos.li}>
                    <img src={Tomala4} className={estilos.imagen}/>
                </li>
            
                <li className={estilos.li}>
                    <img src={Tomala5} className={estilos.imagen}/>
                </li>
            
                <li className={estilos.li}>
                    <img src={Tomala6} className={estilos.imagen}/>
                </li>
            </ul>
        </div>
    )
}