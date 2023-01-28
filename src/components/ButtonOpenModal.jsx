import { useState } from "react"
import { theme } from "../shared/theme"

export default function ButtonOpenModal({handleOpenModal}){
  const [isPressedButton, setIsPressedButton] = useState(false)
  const [isHoveredButton, setIsHoveredButton] = useState(false)

  return(
  <div style={styles.buttonFixVoid}>
      <div
      //animation
      onMouseEnter={()=> setIsHoveredButton(true)}
      onMouseLeave={()=> setIsHoveredButton(false)}
      onMouseDown={()=>setIsPressedButton(true)}
      onMouseUp={()=>{setIsPressedButton(false)
      handleOpenModal(true)}}
      //style
      style={{...styles.buttonContainer, 
      backgroundColor: isHoveredButton ? theme.activableHovered : theme.activable,
      transform: isPressedButton ? 'scale(0.95)' : 'scale(1)'}}>
      <div style={{...styles.buttonText}}>
          Add
      </div>
      </div>
  </div>
  )
}

const styles = {
    buttonFixVoid:{
        marginTop:30,
        marginBottom:20,
        height:40,
        display:'flex',
        alignItems:'center',
        marginLeft:25,
        textAlign:'center',
    },
      buttonContainer:{
        width:80,
        height:35,
        borderRadius:12,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        transition:'ease 0.2s all',
      },
      buttonText:{
        fontSize:15,
        userSelect:'none',
        color:'white',
        textAlign:'center',
      },
}