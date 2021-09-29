import React from 'react';

import Typography from '@material-ui/core/Typography';


export  function LV(props) {


    return (
    <div  style={{display: 'flex' ,alignItems:'baseline',...props.style }}>

    <div style={{flex: '40%'}}><Typography variant="body2" style={{textIndent:'1px',color:'rgba( 0,0,0,0.7)',fontWeight:'900'}}>{props.l}:</Typography></div>
    <div style={{flex: '60%'}}><Typography variant="body2" style={{textIndent:'1px',color:'rgba( 0,0,0,0.7)'}}>{props.v}  </Typography></div>
    </div>
        
    )
}
//  justifyContent: si la toma -main axis
//, minWidth:'110px' alignContent: 'stretch'

export  function L(props) {

    return (
    <Typography variant="body2" style={{textIndent:'1px',color:'rgba( 0,0,0,0.7)',fontWeight:'900'}}>{props.l}</Typography>        
    )
}


export  function V(props) {

    return (
    <Typography variant="body2" noWrap style={{textIndent:'1px',color:'rgba( 0,0,0,0.7)',...props.style}}>{props.l}</Typography>        
    )
}

export  function Ad(props) {

    return (
        <div style={{minHeight:'20px'}}> 
        <Typography  variant='caption' style={{textIndent:'2px',...props.style}} noWrap>{props.l}</Typography>    
        </div>    
    )
}
