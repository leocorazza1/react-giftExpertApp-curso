//import React,{useState,useEffect} from "react";
import { useFetchGifts } from "../hooks/useFetchGifts";
import { GiftImageItem } from "./GiftImageItem";
//import { getImage } from "./helpers/getImage";

export const GiftImage = ({categoriaNombre})=>{


    const {data:images,loading} = useFetchGifts(categoriaNombre);

    return(

        <>

    <p className="text-success">{loading?'Cargando...':null}</p> 
        <div>
            {       
            images.map(img=>{
                return(
                    <>
                        <GiftImageItem
                            key={img.id}
                             //LOS 3 PUNTITOS LO QUE HACEN ES MANDAR EL OBJETO IMG COMO TAL ,
                            // OTRA ALTERNATIVA ES IMG={IMG} DONDE ESA PROPS LA RECIBE EL OTRO COMPONENTE
                            { ...img}
                            //img={img}
                        />

                    </>      
                )
            })  
        }
        </div>
        
        </>


    );

}

export default GiftImage;