import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import Textfield from "./Textfield"
import ButtonModal from "./ButtonModal"
import CloseIcon from "../assets/close.svg"


export default function Modal({label, isOpen, close, action, rows, setRows, defaultData}) {
    const [title, setTitle] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [isCloseHovered, setIsCloseHovered] = useState(false)

    useEffect(()=>{
        if(!defaultData) return
        setTitle(defaultData.title)
        setLogin(defaultData.login)
    },[defaultData])

    const handleEditRow = () => {
        if(title === '' || login === '' || password === '') return
        const newRows = rows.map((row) => {
            if(row.title === defaultData.title && row.login === defaultData.login && row.password === defaultData.password){
                return {title, login, password}
            }
            return row
        })
        setRows(newRows)
        localStorage.setItem('rows', JSON.stringify(newRows))
        setTitle('')
        setLogin('')
        setPassword('')
        close()
    }

    const handleAddRow = () => {
        if(title === '' || login === '' || password === '') return
        const newRow = {title, login, password}
        if(rows[0].title === '' && rows[0].login === '' && rows[0].password === '')
        {
          setRows([newRow])
          localStorage.setItem('rows', JSON.stringify([newRow]))
        }
        else {
          setRows([...rows, newRow])
          localStorage.setItem('rows', JSON.stringify([...rows, newRow]))
        }
        setTitle('')
        setLogin('')
        setPassword('')
        close()
    }

    const handleSubmit = () => {
        if(action==='Add') handleAddRow()
        else if(action==='Edit') handleEditRow()
    }

    return(
        <ReactModal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={close}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          },
          content: {
            position: 'absolute',
            top: '70px',
            left: '60px',
            right: '60px',
            bottom: '70px',
            border: 'none',
            background: '#303151',
            borderRadius:5,
          }
        }}
        >
          <div style={{weight:'100%', display:'flex', justifyContent:'end',}}>
            <img 
            //animation
            onMouseEnter={() => setIsCloseHovered(true)}
            onMouseLeave={() => setIsCloseHovered(false)}
            src={CloseIcon} 
            style={{...styles.closeIcon, transform: isCloseHovered && 'rotate(0.5turn) scale(1.1)'}} 
            //action
            onClick={close}/>
          </div>
          <div style={styles.modalTitle}>
            {label}
          </div>
          <div style={styles.textfieldContainer}>
            <Textfield label='Title' onChange={setTitle} defaultData={title}/>
            <Textfield label='Login' onChange={setLogin} defaultData={login}/>
            <Textfield label='Password' onChange={setPassword}/>
            <ButtonModal onClick={handleSubmit} title={action}/>
          </div>
        </ReactModal>
    )
}

const styles = {
    textfieldContainer:{
        display:'grid',
        gridTemplateRows:'repeat(3, 10%)',
        gap:40,
        
      },
      modalTitle:{
        color: '#cccccc',
        fontSize: 20,
        marginTop: 35,
        marginBottom: 50,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontFamily:'Rubik',
        fontWeight:400,
        userSelect:'none',
      },

      closeIcon:{
        objectFit:'contain',
        weight:10,
        height:10,
        filter: 'invert()',
        padding:5,
        transition: 'ease 1s all',
      },
}