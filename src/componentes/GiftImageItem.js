import React from 'react'

export const GiftImageItem = ({id,titulo,url_image}) => {



    return (

        <div className='col-lg-2'>
            
            <img 
                src={url_image}
                className='img-rounded shadow mt-2 mb-2'
                width={300}
                height={300}
                
                />
                
        </div>
    )
}
