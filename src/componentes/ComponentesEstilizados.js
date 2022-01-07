import React, { useState } from 'react'
import styled from "styled-components"
import Escena from './escena/escena';


function ComponentesEstilizados() {
    
   
    // Style to buttons with styled components
    const MyButton = styled.button`
    width: 50%;
    `
    
    const [contador, setContador] = useState(0);

    // before button 
    const previousPhrase = () => {
        console.log(contador);
        
         setContador(contador - 1);
  };
      
    // next button 
    const nextPhrase = () => {
        console.log(contador);
     
        setContador(contador + 1);
  
    }  
    
   
    //button function call back 
    return (
        <div>
            <MyButton onClick={ ()=> previousPhrase()}>Anterior</MyButton>
            <MyButton onClick={ () => nextPhrase()}>Siguiente</MyButton>
            <Escena contador={contador}/>
            
        </div>
    )
}


export default ComponentesEstilizados

