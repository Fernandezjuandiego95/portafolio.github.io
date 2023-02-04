import estilosCertificados from "../assets/css/certificados.module.css";
import GityGithub from "../assets/images/certificados/git_y_github.PNG";
import IngSoft from "../assets/images/certificados/fundaSoft.PNG";
import Scrum from "../assets/images/certificados/scrum.jpg";
import js from "../assets/images/certificados/js.png";
import C_R_avanzado from "../assets/images/certificados/C_react_avanzado.jpg";
import Php_con_Laravel from "../assets/images/certificados/php_con_laravel.jpg";


export function Certificados(){
   
    return(
        <section id="certificados" className={estilosCertificados.section}>

          <h2 className={estilosCertificados.h2}>Certificados</h2>
          <div className={estilosCertificados.div}>
              
              <img  src={GityGithub} alt="Certificado de Git y GitHub" className={estilosCertificados.img}/>
              
              <img  src={IngSoft} alt="Certificado de Fundamentos de Ingenieria del Software" className={estilosCertificados.img}/>
              
              <img  src={js} alt="Certificado de Programacion con JavaScript" className={estilosCertificados.img}/>
            
              <img  src={C_R_avanzado} alt="Certificado de React Avanzado" className={estilosCertificados.img}/>
             
              <img loading="lazy" src={Php_con_Laravel} alt="Certificado de php con Laravel" className={estilosCertificados.img}/>

              <img loading="lazy" src={Scrum} alt="Certificado de Scrum" className={estilosCertificados.img}/>
          </div>

        </section>
    )
}