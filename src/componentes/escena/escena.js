import React from 'react'
import styled from "styled-components"
import datos from "../../datos"



/*export let phrases = [

    'Nuestro héroe estaba flotando por el espacio sideral cuando a lo lejos divisó una nave espacial',
    'Sentía curiosidad por el interior de la nave y se puso a inspeccionarla. Llegó a una sala con dos puertas',
    'El héroe decidió atravesar la puerta que le llevaba a casa',
    'Mientras tanto, otras heroes no tuvieron tanta suerte en su elección...'
]*/


  // function to export in App and show phrases in HTML 
  function Escena({contador}) {
    console.log(contador)
    
    //Styled element used
    const MyP1 = styled.p`
    border: 2px solid black;
    ` ;

    
      
    // shows al phrases with style in const MyP1
    return (
        
        <div>
            {datos.map((dato, index)=>{
              //
              const isSelected = index === contador%datos.length;
              return (
                <div style={{backgroundImage: isSelected ? `url(${dato.img})` : "",
                              height: isSelected ? "80vh" : "20px"}}>
                <MyP1 style={{backgroundColor: isSelected ? "rgb(255,192,203, 0.3)" : "undefined"      
                              }}>{dato.txt}</MyP1> 
                </div>
              );

            })}

        </div>
    )
}
export default Escena;