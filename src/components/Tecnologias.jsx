import estilosTec from "./../assets/css/estilosTec.module.css";

export function Tecnologias(){
   
    return(
        <div>
            <u></u><h2 className={estilosTec.text}>HTML</h2><br/><br/>
            <u className={estilosTec.blue}></u><h2 className={estilosTec.text}>CSS</h2><br/><br/>
            <u className={estilosTec.purple}></u><h2 className={estilosTec.text}>PHP</h2><br/><br/>
            <u className={estilosTec.yellow}></u><h2 className={estilosTec.text}>MYSQL</h2>
            
        </div>
    )
}