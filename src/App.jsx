import { useState, useEffect } from "react";
import './App.css'
import Header from './components/Header'
import Table from './components/Table'
import ButtonOpenModal from "./components/ButtonOpenModal"
import Modal from './components/Modal'

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
    <div style={styles.container}>
      <Modal label={'Add a new password'} action={'Add'} isOpen={showModalAdd} close={handleCloseModalAdd}
      rows={rows} setRows={setRows} defaultData={{'title':'','login':''}}
      />
      <Modal label={'Change your password'} action={'Edit'} isOpen={showModalEdit} close={handleCloseModalEdit} 
      rows={rows} setRows={setRows} defaultData={rowToEdit}
      />
      <Header/>
      <ButtonOpenModal  handleOpenModal={handleOpenModalAdd}/>
      <Table rows={rows} handleAction={handleAction}/>
    </div>
  );
}

const styles = {
  container: {
    width:'96vw',
    height:'97vh',
    backgroundColor:'#242641',
    fontFamily:'Rubik',
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
}