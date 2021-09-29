import React from "react";
import Typography from '@material-ui/core/Typography';

//export default class DialogTitle extends React.Component {   
export default  function DialogTitle(props){ 
  

  return (  
    <div  style={{display: 'flex' ,alignItems:'center',background:'#8f8f8f',padding:'2px 2px 0px 4px',
    borderTopLeftRadius:' 3px',
    borderTopRightRadius:'3px',
    borderBottom:'2px solid rgb(0,0,0,0.5)',
    marginBottom:'3px' }}>
    {props.children[0]}
    <Typography  variant='subtitle1' style={{fontWeight:'600',textIndent:'6px'}} noWrap>{props.children[1]} </Typography>             
    </div>  
  )

}

