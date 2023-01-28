import {useState} from 'react'
import '../App.css'
import { theme } from '../shared/theme'

export default function Textfield({label, onChange, defaultData}){
    const [focus, setFocus] = useState(false)

    return(
        <div style={styles.container}>
            <input
            value={defaultData}
            onFocusCapture={() => setFocus(true)}
            onBlurCapture={() => setFocus(false)}
            onChange={(e) => onChange(e.target.value)}
            type="text" 
            placeholder={label}
            style={{...styles.textfield, 
            border: focus ? `2px solid ${theme.activableHovered}`
            : `2px solid #eeeeee`,
            backgroundColor: focus ? 'transparent' 
            : '#eeeeee',
            
            }}/>
        </div>
    )
}

const styles = {
    container:{
        fontFamily:'Rubik',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        fontWeight:'400',
    },
    textfield: {
        WebkitAppearance: 'none',
        outline:'none',
        padding:11,
        fontSize:13,
        width:'38vw',
        border:'none',
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:15,
        color:'#333333',
        userSelect:'none',
        transition:'ease 0.2s all',
    },
    label:{
        color:'#777777',
        fontSize:12,
        marginLeft:50,
        marginBottom:3,
        userSelect:'none',
    }
}