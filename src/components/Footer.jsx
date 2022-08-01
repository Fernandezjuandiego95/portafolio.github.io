import estilosFooter from "../assets/css/estilosFooter.module.css";
import gitHub from "../assets/images/github.svg";
import Facebook from "../assets/images/facebook.png";
import Whatp from "../assets/images/what.png";


export function Footer(){
    return(
        
            <div className={estilosFooter.div}>

            <h2 className={estilosFooter.h2}>Juan Diego Fernández 
            <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} className={estilosFooter.copy}/>
              2022</h2>
            <h3 className={estilosFooter.h3}>Dessarrollador Web</h3>

            <div className={estilosFooter.divredes}>
                <h5 className={estilosFooter.redes}>Redes Sociales</h5>

                <a href="https://www.facebook.com/profile.php?id=100054830910045" className={estilosFooter.iface}> 
                <img src={Facebook} alt="Facebook" className={estilosFooter.redesimg}/>
                </a>

                <a href="https://wa.link/1mj2mq" className={estilosFooter.iwht}>
                <img src={Whatp} alt="WhatsApp" className={estilosFooter.redesimg}/>
                </a>
                
                <a href="https://github.com/Fernandezjuandiego95" className={estilosFooter.ihub}> 
                 <img src={gitHub} alt="GitHub" className={estilosFooter.redesimg}/>
                 </a>
              
            </div>
            </div>
        
    )
}