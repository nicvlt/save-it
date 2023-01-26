import { useState } from "react"

export default function ButtonModal({onClick, title}){
    const [isPressed, setIsPressed] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    return(
    <div style={styles.container}>
        <div 
        //animation
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => {setIsPressed(false)
        }}
        //style
        style={{...styles.button, transform: isPressed ? 'scale(0.95)' : 'scale(1)',
        backgroundColor: isHovered ? 'rgba(255,255,255,0.1)' : 'transparent'}} 
        //action
        onClick={onClick}
        >
            <div style={styles.text}>{title}</div>
        </div>
    </div>
    )
}

const styles = {
    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:50,
        width:200,
        marginLeft:'auto',
        marginRight:'auto',
    },
    button:{
        height:35,
        width:80,
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:5,
        border: '1px solid #cccccc',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        transition:'ease 0.2s all'
    },
    text:{
        fontFamily:'Rubik',
        fontSize:16,
        color:'#cccccc',
        userSelect:'none',
    }
}