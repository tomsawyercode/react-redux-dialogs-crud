import React from "react";
import Typography from '@material-ui/core/Typography';


export default class DialogTitle extends React.Component {   

 
  render() { 
  
  //console.log("Title:",Object.keys(this.props));
  //const cnt = React.Children.count(this.props.children);
  //const right = cnt === 1 ? this.props.children : this.props.children[1] ;
  //console.log("cnt:",cnt);
  //background:"#8f8f8f",
  //if (cnt===1)
  //,marginBottom:'15px'
  return (  
    <div  style={{display: 'flex' ,alignItems:'center',background:'#8f8f8f',padding:'2px 2px 0px 4px',
    borderTopLeftRadius:' 3px',
    borderTopRightRadius:'3px',
    borderBottom:'2px solid rgb(0,0,0,0.5)',
    marginBottom:'3px' }}>
    {this.props.children[0]}
    <Typography  variant='subtitle1' style={{fontWeight:'600',textIndent:'6px'}} noWrap>{this.props.children[1]} </Typography>             
    </div>  
  )
}
}

