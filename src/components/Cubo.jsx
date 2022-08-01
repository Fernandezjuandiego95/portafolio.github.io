import estilosCubo from "../assets/css/estilosCubo.module.css"

function Cubo() {
    return(
     <div className={estilosCubo.cube}>
        <div className={estilosCubo.top}></div>
        <div>
            <span className={estilosCubo.span}></span>
            <span className={estilosCubo.span2}></span>
            <span className={estilosCubo.span3}></span>
            <span className={estilosCubo.span4}></span>
        </div>
    </div>
    )
}

export default Cubo;