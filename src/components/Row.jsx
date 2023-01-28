import { useState } from 'react'
import EditIcon from '../assets/edit-icon.svg'
import DeleteIcon from '../assets/trash-icon.svg'


export default function Row({row, handleAction, handleToast}) {
    const [isOver, setIsOver] = useState({'title':false,'login':false,'password':false})
    const [hasCopied, setHasCopied] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)
  

    return (
        <div style={styles.row}>
          <div style={{...styles.rowContent, cursor: !hasCopied ? 'pointer' : 'not-allowed', borderRadius:7, backgroundColor: isOver.title && '#eeeeee'}} 
          onMouseEnter={() => setIsOver({title:true,login:false,password:false})}
          onMouseLeave={() => setIsOver({title:false,login:false,password:false})}
          onMouseDown={() => {navigator.clipboard.writeText(row.title)
            setHasCopied(true)
            handleToast()}}
            onMouseOut={() => setHasCopied(false)}
          >{row.title}</div>

          <div style={{...styles.rowContent, cursor: !hasCopied ? 'pointer' : 'not-allowed', borderRadius:7, backgroundColor: isOver.login && '#eeeeee'}} 
          onMouseEnter={() => setIsOver({title:false,login:true,password:false})}
          onMouseLeave={() => setIsOver({title:false,login:false,password:false})}
          onMouseDown={() => {navigator.clipboard.writeText(row.login) 
            setHasCopied(true)
            handleToast()}}
          onMouseOut={() => setHasCopied(false)}
          >{row.login}</div>

          <div style={{...styles.rowContent, WebkitTextSecurity: 'disc', cursor: !hasCopied ? 'pointer' : 'not-allowed', borderRadius:7, backgroundColor: isOver.password && '#eeeeee'}} 
          onMouseEnter={() => setIsOver({title:false,login:false,password:true})}
          onMouseLeave={() => setIsOver({title:false,login:false,password:false})}
          onMouseDown={() => {navigator.clipboard.writeText(row.password)
            setHasCopied(true)
            handleToast()}}
            onMouseOut={() => setHasCopied(false)}
          >{row.password}</div>

          <div style={{display:'flex', alignContent:'center', marginTop:'auto', marginBottom:'auto' }}>
            <img src={EditIcon} 
            onMouseEnter={()=>setIsEditing(true)}
            onMouseLeave={()=>{setIsEditing(false)}}
            onClick={() => {handleAction(row, 'edit')}}
            style={{width:15, height:15, padding: 9, borderRadius:9, backgroundColor: isEditing && '#eeeeee'}}/>


            <img src={DeleteIcon}
            onMouseEnter={() => setIsDeleting(true)}
            onMouseLeave = {() => {setIsDeleting(false)}}
            onClick = { () => {handleAction(row, 'delete')}}
            style={{width:15, height:15, padding: 9, borderRadius:9, backgroundColor: isDeleting && '#eeeeee'}}
            />
          </div>
        </div>
      )
}

const styles = {
    row:{
        display:'grid',
        gridTemplateColumns: '33% 24% 23% 5%',
        width:'90%',
        gap:10,
        color:'#333333',
        fontWeight:'400',
        fontSize:14,
        marginTop:5,
        marginBottom:5,
        marginRight:'auto',
        marginLeft:'auto',
        transform:'translate(-5px, 0px)',
      },
      rowContent:{
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
        overflow:'hidden',
        padding: '13px 0px 13px 7px',
      },
}

