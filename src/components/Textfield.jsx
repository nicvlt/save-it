import {useState} from 'react'
import '../App.css'

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
            style={{...styles.textfield, border: focus ? '2px solid #cccccc' : '2px solid rgba(0,0,0,0)'}}/>
        </div>
    )
}

const styles = {
    container:{
        fontFamily:'Rubik',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
    },
    textfield: {
        WebkitAppearance: 'none',
        outline:'none',
        padding:10,
        fontSize:14,
        width:'40vw',
        border:'none',
        backgroundColor:'hsl(238, 26%, 19%)',
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:5,
        color:'#cccccc',
        userSelect:'none',
        transition:'ease 0.2s all',
    },
    label:{
        color:'#cccccc',
        fontSize:12,
        marginLeft:50,
        marginBottom:3,
        userSelect:'none',
    }
}