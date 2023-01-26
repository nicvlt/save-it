export default function Header(){
    return(
        <div style={styles.header}>
            <div style={styles.title}>
                Save IT
            </div>
            <div style={styles.subtitle}>
                Save your passwords
            </div>
      </div>
    )
}

const styles = {
    header: {
        userSelect:'none',
        paddingTop:30,
        paddingBottom:25,
        textAlign:'center',
      },
      title:{
        fontSize:40,
        color:'#eeeeee',
      },
      subtitle:{
        fontSize:15,
        marginTop:10,
        color:'#cccccc'
      }
}