import { theme } from '../shared/theme'

export default function Header(){
    return(
        <div style={styles.container}>
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
    }
}