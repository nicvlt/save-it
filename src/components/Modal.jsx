import React, { useEffect, useState } from 'react'
import ReactModal from 'react-modal';
import Textfield from "./Textfield"
import ButtonModal from "./ButtonModal"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Modal.css'

export default function Modal({label, isOpen, subtitle, close, action, rows, setRows, defaultData}) {
    const [title, setTitle] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

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

    const handleToast = () => {
      toast.error('Please fill all the fields', {
        position: "bottom-center",
        zIndex: 9999,
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        });
    }

    const handleAddRow = () => {
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
      if(title === '' || login === '' || password === '') {
        handleToast()
        return
      }
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
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex:999,
          },
          content: {
            position: 'absolute',
            top: '137px',
            left: '110px',
            right: '110px',
            bottom: '137px',
            border: 'none',
            background: 'white',
            borderRadius: 30,
            transition: 'all 0.7s ease-in-out',
          }
        }}
        >
          <div style={{overflow:'hidden'}}>
            <div style={styles.modalTitle}>
              {label}
            </div>
            <div style={styles.subtitle}>
              {subtitle}
            </div>
            <div style={styles.textfieldContainer}>
              <Textfield label='Title' onChange={setTitle} defaultData={title}/>
              <Textfield label='Login' onChange={setLogin} defaultData={login}/>
              <Textfield label='Password' onChange={setPassword}/>
              <div style={styles.button}>
                <ButtonModal onClick={close} title='Cancel'/>
                <ButtonModal onClick={handleSubmit} title={action}/>
              </div>
            </div>
          </div>
          <ToastContainer />
        </ReactModal>
        
    )
}

const styles = {
    textfieldContainer:{
        display:'grid',
        gridTemplateRows:'repeat(3, 10%)',
        gap:30,
      },
      modalTitle:{
        color: '#444444',
        fontSize: 18,
        fontWeight: '500',
        display:'flex',
        fontFamily:'Rubik',
        userSelect:'none',
        marginTop: 90,
        marginBottom: 10,
        marginLeft:30,
      },
      closeIcon:{
        position:'absolute',
        objectFit:'contain',
        weight:10,
        height:10,
        padding:10,
        transition: 'ease 1s all',
      },
      button:{
        display:'flex',
        alignItems:'end',
        marginLeft:'auto',
        marginRight:24,
        gap:20,
      },
      subtitle:{
        fontFamily:'Rubik',
        userSelect:'none',
        color: '#777777',
        fontSize: 14,
        fontWeight: '400',
        display:'flex',
        marginBottom: 30,
        marginLeft:30,
      }
}