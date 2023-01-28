import Row from './Row'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Table({rows, handleAction}) {
  const handleToast = () => {
    toast.success('Copied to clipboard', {
      position: "bottom-center",
      zIndex: 9999,
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: false,
      progress: undefined,
      theme: "light",
      });
  }

    return(
        <div style={styles.table}>
          <div style={styles.tableHead}>
              <div>Description</div>
              <div>Login</div>
              <div>Password</div>
              <div>Actions</div>
          </div>
          <div style={styles.solidLine}/>
          {JSON.stringify(rows[0]) === JSON.stringify({'title':'', 'login':'', 'password':''}) ? <div style={styles.noData}>No passwords saved</div> : rows.map((row, index) => <Row key={index} row={row} handleAction={handleAction} handleToast={handleToast}/>)}
          <ToastContainer />
      </div>
    )
}

const styles = {
    solidLine:{
        backgroundColor:'#eeeeee',
        height:0.5,
        marginTop:10,
        marginBottom:10,
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto',
      },
      table:{
        padding:10,
        height:320,
      },
      tableHead:{
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto',
        display:'grid',
        gridTemplateColumns: '35% 26% 26% 5%',
        color:'#777777',
        fontWeight:'400',
        fontSize:13,
        userSelect:'none',
      },
      noData:{
        color:'#444444', 
        fontSize:15, 
        fontWeight:'400',
        textAlign:'center',
        marginTop:20,
      },
}    