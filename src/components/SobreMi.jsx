import estilosSobremi from "../assets/css/sobreMi.module.css";
import Html from "../assets/images/tecno/html.png";
import Css from "../assets/images/tecno/css.png";
import Js from "../assets/images/tecno/js.png";
import Php from "../assets/images/tecno/php.png";
import Mysql from "../assets/images/tecno/Mysql.png";
import IconoReactJs from "../assets/images/tecno/react.png";
import Laravel from "../assets/images/tecno/laravel.png";
import Git from "../assets/images/tecno/git.png";
import GitHub from "../assets/images/tecno/github.png";
import Mano from "../assets/images/mano.png";

export function SobreMi(){
   
    return(
        <section id="sobremi" className={estilosSobremi.section}>

         <h2 className={estilosSobremi.h2}>Sobre Mí</h2>
            <div className={estilosSobremi.divizquierdo}>

                <h3 className={estilosSobremi.h3}>Tecnologías Que Utilizo</h3>
                   
                   <div className={estilosSobremi.fondopc}>
                    <div className={estilosSobremi.divcaja}>
                        <img src={Html} alt="icono html" className={estilosSobremi.imghoriz}/>
                        <img src={Css} alt="icono css" className={estilosSobremi.imghoriz}/>
                        <img src={Js} alt="icono Js" className={estilosSobremi.imgcuadrado}/>
                        <img src={Php} alt="icono php" className={estilosSobremi.imgcuadrado}/>
                        <img src={Mysql} alt="icono Mysql" className={estilosSobremi.imghoriz}/>
                        <img src={IconoReactJs} alt="icono React" className={estilosSobremi.imgcuadrado}/>
                        <img src={Laravel} alt="icono Laravel" className={estilosSobremi.imgrectangulo}/>
                        <img src={Git} alt="icono git" className={estilosSobremi.imgcuadrado}/>
                        <img src={GitHub} alt="icono gitHub" className={estilosSobremi.imgcuadrado}/>
                    </div>
                 </div>
        </div>
        
         <div className={estilosSobremi.divderecho}>
             
            <div className={estilosSobremi.yo}/>
 
            <span className={estilosSobremi.hola}>HOLA!</span>
            <img src={Mano} alt="saludo" className={estilosSobremi.mano}/>
            <span className={estilosSobremi.nombre}>: Soy Juan Diego Fernández</span>
            
            <div className={estilosSobremi.parrafos}>
                <span className={estilosSobremi.span}>
                    Estudiante de Ingeniería de Sistemas en la Universidad 
                    Antonio José de Sucre (UAJS), en la ciudad de Sincelejo.
                </span>
                <br/><br/>
                <span className={estilosSobremi.span}>
                    Tengo 21 años de edad, me apasiona todo lo relacionado con el desarrollo web y
                    las nuevas tecnologías emergentes; por lo que nunca paro de aprender algo nuevo.
                </span>
                <br/><br/> 
                <span className={estilosSobremi.span}>Estoy enfocado en llegar a ser un “Desarrollador Web Full Stack”</span>   
            </div>
         </div>
        </section>
    )
}