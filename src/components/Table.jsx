import Row from './Row'

export default function Table({rows, handleAction}) {
    return(
        <div style={styles.table}>
            <div style={styles.tableHead}>
                <div>Description</div>
                <div>Login</div>
                <div>Password</div>
                <div>Actions</div>
            </div>
            <div style={styles.solidLine}/>
            {JSON.stringify(rows[0]) === JSON.stringify({'title':'', 'login':'', 'password':''}) ? <div style={styles.noData}>No passwords saved</div> : rows.map((row, index) => <Row key={index} row={row} handleAction={handleAction}/>)}
      </div>
    )
}

const styles = {
    solidLine:{
        backgroundColor:'#eeeeee',
        height:0.5,
        marginTop:10,
        marginBottom:10,
        width:'100%',
      },
      table:{
        padding:10,
      },
      tableHead:{
        display:'grid',
        gridTemplateColumns: '25% 25% 25% 10%',
        gap:10,
        color:'#aaaaaa',
        fontWeight:'400',
        fontSize:12,
        userSelect:'none',
        marginLeft:7,
      },
      noData:{
        color:'#eeeeee', 
        fontSize:15, 
        fontWeight:'300',
        textAlign:'center',
        marginTop:20,
      },
}    