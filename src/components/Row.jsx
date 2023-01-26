import { useState } from 'react'
import EditIcon from '../assets/edit.svg'
import DeleteIcon from '../assets/trash.svg'

export default function Row({row, handleAction}) {
    const [isOver, setIsOver] = useState({'title':false,'login':false,'password':false})
    const [hasCopied, setHasCopied] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)

    return (
        <div style={styles.row}>
          <div style={{...styles.rowContent, cursor: !hasCopied ? 'pointer' : 'not-allowed', borderRadius:7, backgroundColor: isOver.title && 'rgba(0.5,0.5,0.5,0.3)'}} 
          onMouseEnter={() => setIsOver({title:true,login:false,password:false})}
          onMouseLeave={() => setIsOver({title:false,login:false,password:false})}
          onMouseDown={() => {navigator.clipboard.writeText(row.title)
            setHasCopied(true)}}
            onMouseOut={() => setHasCopied(false)}
          >{row.title}</div>

          <div style={{...styles.rowContent, cursor: !hasCopied ? 'pointer' : 'not-allowed', borderRadius:7, backgroundColor: isOver.login && 'rgba(0.5,0.5,0.5,0.3)'}} 
          onMouseEnter={() => setIsOver({title:false,login:true,password:false})}
          onMouseLeave={() => setIsOver({title:false,login:false,password:false})}
          onMouseDown={() => {navigator.clipboard.writeText(row.login) 
            setHasCopied(true)}}
          onMouseOut={() => setHasCopied(false)}
          >{row.login}</div>

          <div style={{...styles.rowContent, WebkitTextSecurity: 'disc', cursor: !hasCopied ? 'pointer' : 'not-allowed', borderRadius:7, backgroundColor: isOver.password && 'rgba(0.5,0.5,0.5,0.3)'}} 
          onMouseEnter={() => setIsOver({title:false,login:false,password:true})}
          onMouseLeave={() => setIsOver({title:false,login:false,password:false})}
          onMouseDown={() => {navigator.clipboard.writeText(row.password)
            setHasCopied(true)}}
            onMouseOut={() => setHasCopied(false)}
          >{row.password}</div>

          <div style={{display:'flex', gridTemplateRows:'2,1fr'}}>
            <img src={EditIcon} 
            onMouseEnter={()=>setIsEditing(true)}
            onMouseLeave={()=>{setIsEditing(false)}}
            onClick={() => {handleAction(row, 'edit')}}
            style={{width:15, height:15, filter: 'invert()', padding:7, borderRadius:9, backgroundColor: isEditing && '#fceee8'}}/>

            <img src={DeleteIcon}
            onMouseEnter={() => setIsDeleting(true)}
            onMouseLeave = {() => {setIsDeleting(false)}}
            onClick = { () => {handleAction(row, 'delete')}}
            style={{filter: 'invert()', width:15, height:15, padding:'8px 8px 8px 8px', borderRadius:9, backgroundColor: isDeleting && '#fceee8'}}
            />
          </div>
        </div>
      )
}

const styles = {
    row:{
        display:'grid',
        gridTemplateColumns: '30% 20% 20% 10%',
        gap:10,
        color:'#cccccc',
        fontWeight:'300',
        fontSize:13,
        marginTop:5,
        marginBottom:5,
      },
      rowContent:{
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
        overflow:'hidden',
        padding:7,
      },
}

