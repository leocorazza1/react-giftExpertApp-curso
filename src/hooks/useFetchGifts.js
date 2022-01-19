/*Un hook personalizado nos sirve para extraer logica del componente. No es necesario en primera instancia cuando se aprende react
tratar de pensar en hooks , al principio vamos a estar con muchos componentes y logica complicada dentro
*/
import { useState,useEffect } from "react";
import { getImage } from "../componentes/helpers/getImage";
export const useFetchGifts = (categoria) => {

    const [state, setstate] = useState({
        data:[],
        loading:true
    })
    

    //Son efectos secundariops , es decir se producen luego de que se renderize el componente
    //Cunado la lista de dependencias es vacia quiere decir que lo que esta adentro se ejecutan solo una vez.
    useEffect(() => {
            //gteImage es ahora una funcion aislada que esta en src helper , es una funcion que retorna una promesa--
            //al ser una promesa , una vez que se resuelve devuelve una lista de imagenes , que se la doy a setImage para que actualice su estado
         
            getImage(categoria).then(listaDeImg=>setstate({data:listaDeImg,loading:false}))


        }, [])
        
        // poner en la lista de dependencias del useEffect el nombre de la categoria ., lo que le decimos es que cuando cambie 
        //la categoria , vuelva a ejecutar el getImage.

    return state;
}
