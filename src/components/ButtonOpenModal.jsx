import { useState } from "react"

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
      backgroundColor: isHoveredButton ? 'rgba(255,255,255,0.1)' : 'transparent',
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
        width:80, 
        height:35, 
        marginLeft:'auto', 
        marginRight:'auto', 
        marginTop:20,
        marginBottom:30,
        height:40,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
      buttonContainer:{
        width:80,
        height:35,
        borderRadius:5,
        border: '1px solid #cccccc',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        transition:'ease 0.2s all',
      },
      buttonText:{
        fontSize:15,
        userSelect:'none',
        color:'#eeeeee',
      },
}