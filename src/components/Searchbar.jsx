import {useState } from "react"
import { theme } from "../shared/theme"
import SearchIcon from '../assets/search-icon.svg'
import '../App.css'

export default function Searchbar({onChange, searchValue}) {
    const [focus, setFocus] = useState(false)

    return(
        <div style={styles.container}>
            <input type="text" placeholder="Search" 
            value={searchValue} 
            onChange={onChange}
            onFocusCapture={() => setFocus(true)}
            onBlurCapture={() => setFocus(false)}
            style={{...styles.input, 
                border: focus ? `2px solid ${theme.activableHovered}`
                : `2px solid ${theme.activable}`,                
                }}/>
            <img src={SearchIcon} alt="search-icon" 
            style={{...styles.icon, 
            filter: focus ? 'invert(0)' : 'invert(0.4)'}}/>
        </div>

    )
}

const styles = {
    container:{
        display:'flex',
        transition:'ease 0.2s all',
        userSelect:'none',
    },
    input:{
        WebkitAppearance: 'none',
        fontFamily:'Rubik',
        padding: '8px 30px 8px 12px',
        borderRadius:10,
        width:100,
        color:'#333333',
        outline:'none',
    },
    icon:{
        height:12,
        width:12,
        marginTop:'auto',
        marginBottom:'auto',
        transform: 'translateX(-25px)',
    }
}