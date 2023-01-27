import { useState } from "react"
import { theme } from "../shared/theme"

export default function ButtonModal({onClick, title}){
    const [isPressed, setIsPressed] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    return(
    <div style={styles.container}>
        {title === 'Cancel' ? 
        <div 
        //animation
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => {setIsPressed(false)
        }}
        //style
        style={{...styles.button,
        transform: isPressed ? 'scale(0.95)' : 'scale(1)',
        backgroundColor: isHovered ? 'rgba(59, 47, 60, 0.1)' : 'transparent',}}
        //action
        onClick={onClick}
        >
            <div style={{...styles.text,  color: '#444444',}}>{title}</div>
        </div> : 
        <div 
        //animation
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => {setIsPressed(false)
        }}
        //style
        style={{...styles.button, transform: isPressed ? 'scale(0.95)' : 'scale(1)',
        backgroundColor: isHovered ? theme.activableHovered : theme.activable,}}
        //action
        onClick={onClick}
        >
            <div style={styles.text}>{title}</div>
        </div>
        }
    </div>
    )
}

const styles = {
    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:'auto',
        marginRight:'auto',
    },
    button:{
        border: `1px solid ${theme.activable}`,
        height:35,
        width:80,
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:12,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        transition:'ease 0.2s all'
    },
    text:{
        fontFamily:'Rubik',
        fontSize:14,
        color:'white',
        userSelect:'none',
    }
}