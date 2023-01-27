import { useState, useEffect } from "react";
import './App.css'
import Header from './components/Header'
import Table from './components/Table'
import ButtonOpenModal from "./components/ButtonOpenModal"
import Modal from './components/Modal'
import {theme} from './shared/theme'

export default function App() {
  const [showModalAdd, setShowModalAdd] = useState(false)
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [rows, setRows] = useState([{'title':'', 'login':'', 'password':''}])
  const [rowToEdit, setRowToEdit] = useState({'title':'', 'login':'', 'password':''})

  useEffect(() => {
    const localRows = JSON.parse(localStorage.getItem('rows'))
    if(localRows) setRows(localRows)
  },[])

  const handleAction = (row, actionToPerform) => {
    if(actionToPerform === 'edit'){
      //TODO : edit the row with the new values in a modal
      setRowToEdit(row)
      setShowModalEdit(true)
    } else if(actionToPerform === 'delete'){
      //TODO : delete the row
      if(rows.length === 1) {
        setRows([{'title':'', 'login':'', 'password':''}])
        localStorage.setItem('rows', JSON.stringify([{'title':'', 'login':'', 'password':''}]))
      }
      else {
        const newRows = rows.filter((r) => r !== row)
        setRows(newRows)
        localStorage.setItem('rows', JSON.stringify(newRows))
      }
    }
  }

  const handleCloseModalAdd = (type) => {
    setShowModalAdd(false)
    
  }

  const handleOpenModalAdd = () => {
    setShowModalAdd(true)
  }

  const handleCloseModalEdit = () => {
    setShowModalEdit(false)
  }

  const handleOpenModalEdit = () => {
    setShowModalEdit(true)
  }


  return (
    <div style={styles.godContainer}>
      <div style={styles.topSpacer}>
        <div style={styles.square}/>
        <svg style={styles.blob} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FEA55B" d="M41.5,-19.1C46.5,1.9,38.2,21.6,20.4,36.5C2.6,51.4,-24.8,61.6,-39.6,51.5C-54.5,41.5,-56.8,11.1,-48.1,-15C-39.4,-41,-19.7,-62.9,-0.7,-62.7C18.2,-62.4,36.5,-40.1,41.5,-19.1Z" transform="translate(100 100)" />
        </svg>
      </div>

      <Header/>

      <div style={styles.container}>
        <Modal label={'Add a new password'}
        subtitle={'Fill the fields below to add a new password'}
        action={'Add'} isOpen={showModalAdd} close={handleCloseModalAdd}
        rows={rows} setRows={setRows} defaultData={{'title':'','login':''}}
        />
        <Modal label={'Change your password'} action={'Edit'} isOpen={showModalEdit} close={handleCloseModalEdit} 
        rows={rows} setRows={setRows} defaultData={rowToEdit}
        />
        <div style={styles.tableLabel}>Your password list</div>
        <ButtonOpenModal  handleOpenModal={handleOpenModalAdd}/>
        <Table rows={rows} handleAction={handleAction}/>
      </div>
    </div>
  );
}

const styles = {
  godContainer: {
    fontFamily:'Rubik',
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  blob: {
    transform: 'translate(50%, -64%)',
  },
  square: {
    height:5,
    width:7,
    backgroundColor: theme.darkOrange,
    borderRadius:1.6,
    transform: 'scale(30) translate(48%, 79%)'
  },
  container: {
    width:'100vw',
    backgroundColor: 'white',
    marginTop:100,
  },
  topSpacer: {
    backgroundColor: theme.lightOrange,
    height:'25vh',
    borderRadius: '0 0 0px 50px',
  },
  tableLabel: {
    fontSize: 23,
    fontWeight: 500,
    color:'#444444',
    marginLeft: 25,
  },
}