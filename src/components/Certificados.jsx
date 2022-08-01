import estilosCertificados from "../assets/css/certificados.module.css";
import GityGithub from "../assets/images/git_y_github.PNG";
import IngSoft from "../assets/images/fundaSoft.PNG";
import Scrum from "../assets/images/scrum.jpg";
import js from "../assets/images/js.png";
import wind from "../assets/images/administracion_de_windows.jpg"


export function Certificados(){
   
    return(
        <section id="certificados" className={estilosCertificados.section}>



          <h2 className={estilosCertificados.h2}>Certificados</h2>
          <div className={estilosCertificados.div}>
              <figure>
              <img src={GityGithub} alt="Certificado de Git y GitHub" className={estilosCertificados.img}/>
              <button className={estilosCertificados.zoom1}></button>
              </figure>

              <figure>
              <img src={IngSoft} alt="Certificado de Fundamentos de Ingenieria del Software" className={estilosCertificados.img}/>
              <button className={estilosCertificados.zoom1}></button>
              </figure>

              <figure>
              <img src={js} alt="Certificado de Programacion con JavaScript" className={estilosCertificados.img}/>
              <button className={estilosCertificados.zoom1}></button>
              </figure>
             
              <figure>
              <img src={Scrum} alt="Certificado de Scrum" className={estilosCertificados.img}/>
              <button className={estilosCertificados.zoom1}></button>
              </figure>

              <figure>
              <img src={wind}alt="Certificado de adimistracion de Windows" className={estilosCertificados.img}/>
              <button className={estilosCertificados.zoom1}></button>
              </figure>

              <figure>
              <img src="" alt="Certificado de Laravel 8" className={estilosCertificados.img}/>
              <button className={estilosCertificados.zoom1}></button>
              </figure>
          </div>

        </section>
    )
}