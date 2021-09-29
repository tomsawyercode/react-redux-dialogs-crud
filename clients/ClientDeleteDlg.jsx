import React, {  useEffect } from 'react';

import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
//Icons
import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteIcon from '@material-ui/icons/Delete';

//Custom controls
import DialogTitle from  "../controls/DialogTitle";
import {Ad} from '../controls/LabelValue';

//Redux
import { connect } from "react-redux";
import { actClientDelete, actClientFormInit } from "./ClientsActions";


//const useMountEffect = (fun) => useEffect(fun, []);
//https://stackoverflow.com/questions/53120972/how-to-call-loading-function-with-react-useeffect-only-once


function ClientDeleteDlg(props){


  //Mount - Unmount  
  useEffect(() => {
         props.dispatch(actClientFormInit());  //componentMount           
        return () => {
         props.dispatch(actClientFormInit());  //componentWillUnmount            
        };     
      }, []);
  
 
  //componentDidUpdate  status listener  
  useEffect(() => {
    console.log("status Update", props.status);
    if( props.status==='success') props.dispatch({type: 'CLOSE_DLG' });  //trigger UnMount             
     }, [props.status]); 



  const handleSubmit = (e) => {
    console.log("handleSubmit:",props.id)
    e.preventDefault();  // prevent a browser reload/refresh
    props.dispatch(actClientDelete(props.id)); 
  };

  const handleCancel = () => {    
    props.dispatch({type: 'CLOSE_DLG' });
  } ; 

  const { status, msg } = props; //server api responses   

  var advice = null;         
  if (status === "loading") advice = "Procesing...";    
  if (status === "error") advice =  "Error: " + msg;  //network error       
  if (status === "success") {  return null; }    
      
  return (
    <Dialog onClose={handleCancel}  open={true}>
        <div style={{minWidth:'300px',padding:"2px",display: "flex" ,flexDirection: "column"}}>
        <DialogTitle ><DeleteIcon  />Delete client:</DialogTitle>          
        <form onSubmit={handleSubmit} >
        
           
        <Typography variant="body1" style={{textIndent:'7px',color:'black',fontWeight:'600'}}> 
            Please confirm action   </Typography> 
        
        
        <div style={{           
           display: "flex" ,                    
           flexDirection: "row",      
           alignItems: "center",
           justifyContent: "space-around" }}> 

        <IconButton  type="submit"  >   <CheckCircleIcon  color="primary"/> </IconButton>    
        <IconButton onClick={handleCancel}  > <CancelIcon/></IconButton>   
        </div>       
        <Ad l={advice}/>        
       
        </form>
        </div>
    </Dialog>
);

}

const mapStateToPropsForm = state => ({    
  status:state.clients.formStatus,
  msg:state.clients.formMsg,   
});

export default connect(mapStateToPropsForm)(ClientDeleteDlg);
