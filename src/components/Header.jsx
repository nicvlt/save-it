import { theme } from '../shared/theme'
import Logo from '../assets/logo.png'

export default function Header(){
    return(
        <div style={styles.container}>
          <div style={styles.logo}>
            <img src={Logo} alt="logo" 
            style={{width:30, height:30}}/>
          </div>
          <div style={styles.header}>
            <div style={styles.title}>
                Welcome back !
            </div>
            <div style={styles.subtitle}>
                Save your passwords in a secure place with us
            </div>
          </div>
        </div>
    )
}

const styles = {
  container:{
    display:'flex',
    justifyContent:'center',
    marginLeft:'auto',
    marginRight:'auto',
    top:'12vh',
    zIndex:1,
    transform: 'translate(0, -70%)',
  },
  header: {
      borderRadius:30,
      userSelect:'none',
      paddingTop:40,
      paddingBottom:30,
      paddingLeft:30,
      backgroundColor:theme.whiteContrast,
      width:'70vw',
    },
    title:{
      fontSize:30,
      color:'#444444',
      fontWeight:'500',
    },
    subtitle:{
      fontSize:15,
      marginTop:10,
      color:'#898683'
    },
    logo: {
      position:'absolute',
      borderRadius:22,
      backgroundColor:'white',
      padding:17,
      left:100,
      top:-43,
      boxShadow: '0px 5px 15px 0px rgba(0,0,0,0.07)',
    }
}