import estilosTec from "./../assets/css/estilosTec.module.css";

export function Tecnologias_dos(){
   
    return(
        <div className={`${estilosTec.divtec} ${estilosTec.divtec_dos}`}>
            <u className={estilosTec.u_dos} $></u><h2 className={`${estilosTec.text_dos} ${estilosTec.text}`}>HTML</h2><br/><br/>
            <u className={`${estilosTec.u_dos} ${estilosTec.blue}`}></u><h2 className={`${estilosTec.text_dos} ${estilosTec.text}`}>CSS</h2><br/><br/>
            <u className={`${estilosTec.u_dos} ${estilosTec.yellow}`}></u><h2 className={`${estilosTec.text_dos} ${estilosTec.text}`}>JavaScript</h2>
        </div>
    )
}