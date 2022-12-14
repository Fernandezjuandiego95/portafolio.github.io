import estilosContacto from "../assets/css/contacto.module.css";
import Telefono from "../assets/images/telefono.png";
import Email from "../assets/images/email.png";

export function Contacto(){
   
    return(
        <section id="contacto" className={estilosContacto.section}>
         <h2 className={estilosContacto.h2}>Contacto</h2>
         <div loading="lazy" className={estilosContacto.contenedor}>
               
               <div loading="lazy" className={estilosContacto.via}>
                    <div loading="lazy" className={estilosContacto.divllamada}>
                        <img src={Telefono} alt="icon Telefono" className={estilosContacto.icon}/>
                        <h4 className={estilosContacto.h4}>Vía Telefónica</h4>
                        <span className={estilosContacto.pnum}>3017256135</span>
                    </div>
                    <div loading="lazy" className={estilosContacto.divllamada}>
                        <img src={Email} alt="icon Email" className={estilosContacto.icon}/>
                        <h4 className={estilosContacto.h4}>Correo Electrónico</h4>
                        <span className={estilosContacto.pcont2}>juandiegofer57@gmail.com</span>
                        <span className={estilosContacto.pcont}>fernandezgonzalezjuandiego95
                                                                @gmail.com</span>
                    </div>
               </div>       
                       
                <div loading="lazy" className={estilosContacto.divmensaje}>
                    
                    <form action="https://formsubmit.co/fernandezgonzalezjuandiego95@gmail.com" method="POST" loading="lazy">

                    <input type="text" name="w3lName" placeholder="Nombre" required className={estilosContacto.input}/>
                    <input type="email" name="w3lSender" placeholder="Correo" required className={estilosContacto.input}/>
                    <input type="text" name="w3lSubject" placeholder="Asunto" required className={estilosContacto.asunto}/>
                    <textarea name="w3lMessage" placeholder="Mensaje" required className={estilosContacto.area}></textarea>
                    <button type="submit" className={estilosContacto.btn}>Enviar</button>

                    <input type="hidden" name="_next" value="https://juan-fernandez.herokuapp.com/index.html#contacto"/>
                    <input type="hidden" name="_captcha" value="false" />
                    </form>
                </div>
         </div>
        </section>
    )
}