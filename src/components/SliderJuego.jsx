import estilos from "../assets/css/sliderjuego.module.css";
import Juego1  from "../assets/proyectos/juego1.png";
import Juego2  from "../assets/proyectos/juego2.png";
import Juego3 from "../assets/proyectos/juego3.png";
import Juego4 from "../assets/proyectos/juego4.png";
import Juego5 from "../assets/proyectos/juego5.png";


export function SliderJuego(){

    return(
        <div className={estilos.div} >

            <ul className={estilos.ul}>
                <li className={estilos.li}>
                    <img src={Juego1 } className={estilos.imagen}/>
                </li>

                <li className={estilos.li}>
                    <img src={Juego2 } className={estilos.imagen}/>
                </li>
 
                <li className={estilos.li}>
                    <img src={Juego3} className={estilos.imagen}/>
                </li>
            
                <li className={estilos.li}>
                    <img src={Juego4} className={estilos.imagen}/>
                </li>
            
                <li className={estilos.li}>
                    <img src={Juego5} className={estilos.imagen}/>
                </li>
            </ul>
        </div>
    )
}