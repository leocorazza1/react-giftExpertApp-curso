// para un creado rapido del componente hacemos "rafc" y crea la funcion con el nombe del archivo
import React, { useState } from 'react'
import PropTypes from 'prop-types';
export const AddCategoria = ({titulo,setCategoria}) => {

const [ValorInput, setValorInput] = useState("");

const mensajeError = "Intente escribir al menos 3 letras"

const [mostrarMensaje, setmostrarMensaje] = useState(false);

const handleInputChange = (e)=>{

    setValorInput(e.target.value);
    if(e.target.value.length>3){
        setmostrarMensaje(false);
    }else{
        setmostrarMensaje(true);
    }
   

}

const handleSubmit = (e)=>{

        e.preventDefault();
        // Como no tengo acceso a categorias como tal , usando esta funcion callback si puedo tener acceso al primer parametro
    //que serian las categorias! , de otra manera se puede hacer recibiendo las categorias por las props
        setCategoria(cat=>[ValorInput,...cat]);
        setValorInput("");

    

}

    return (

        
        <div className='col-lg-6'>
            
            <h2 className='text-success mt-2'>{titulo}</h2>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    className='form-control'
                    onChange={handleInputChange}
                    value={ValorInput}
                    placeholder='Ingrese una categoria'>
                </input>
                
                <br></br>
              
                <p className='text-danger'>{mostrarMensaje? `${mensajeError}`:null}</p>
            </form>


        </div>
    )
}

AddCategoria.propTypes = {

    setCategoria: PropTypes.func.isRequired,
    
}

/*AddCategoria.defaultProps = {

    subtitulo: "soy un subtitulo",


}*/