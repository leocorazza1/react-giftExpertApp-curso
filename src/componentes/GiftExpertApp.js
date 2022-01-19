
import React ,{useState} from 'react'
import { AddCategoria } from './AddCategoria';
import { GiftImage } from './GiftImage';


const GiftExpertApp = function({titulo}){


    const [categoria, setCategoria] = useState(["power ranger"]);


  /*  const handleAdd = ()=>{

        setCategoria([...categoria,"pipeta"]); // usando los 3 puntos copiamos el estado anterior y agregamos otra categoria!!!!
        //setCategoria(cat=>[...cat,"jose"]) // setCategorie recibe un callbacks , recordar eso que el primer argumento es el estado anterior y luego regresa el nuevo estado
    }*/

    const remove = ()=>{

        setCategoria(categoria.splice(1,1))


    }

    return(

        <>
            <h1 className="text-center shadow p-3">{titulo}</h1>
            <div className='col-lg-6'>
                <h2 className='mt-2'>Buscando elementos para:</h2>
                <span className='text-info text-bold text-center'>  
                    {categoria[0]}
                </span>
    
                <hr/>
                <div className='row'>
                    {
                        categoria.map(elemento=>{

                            //return <li key= {elemento} > {elemento} </li>
                            return (
                            
                                <>
                                <GiftImage key={elemento} categoriaNombre={elemento} />
                                </>
                                
                                )
                        })
                    }
                </div>
            </div>

            <AddCategoria 
                titulo="Agregar una categoria"
                setCategoria={setCategoria}

                />
        </>

    );

}
export default GiftExpertApp;