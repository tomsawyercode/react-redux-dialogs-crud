import React, { useState, useEffect } from 'react';
//import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';

//Icons
import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';

//Custom controls
import DialogTitle from  "../controls/DialogTitle";
import {Ad} from '../controls/LabelValue';

//Redux
import { connect } from "react-redux";
import { actClientCreate, actClientFormInit } from "./ClientsActions";


//const useMountEffect = (fun) => useEffect(fun, []);
//https://stackoverflow.com/questions/53120972/how-to-call-loading-function-with-react-useeffect-only-once


function ClientCreateDlg(props){

  const initial = {  name:'',phone:'', mail:'',};    
    
   
  const [state, setState] = useState(initial);  
  const fullScreen = useMediaQuery('(max-width:600px)');// if width<600 go fullscreen


  //Mount - Unmount  
  useEffect(() => {
         props.dispatch(actClientFormInit());  //componentMount    
         //console.log("component Mount");
        return () => {
         props.dispatch(actClientFormInit());  //componentWillUnmount    
         // console.log("componentWillUnmount");
        };
      }, []);// try with props 
  // https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies
  //  https://stackoverflow.com/questions/63205014/react-hook-useeffect-has-a-missing-dependency-props


 
  //componentDidUpdate  status listener  
  useEffect(() => {
    console.log("status Update", props.status);
    if( props.status==='success') props.dispatch({type: 'CLOSE_DLG' });  //trigger UnMount             
     }, [props.status]); 

  const handleChange = (e) => {
    const {name,value} = e.target;
    setState(prevState => ({...prevState,[name]: value}));  
  };

  const handleSubmit = (e) => {
    console.log("handleSubmit:",state)
    e.preventDefault();  // prevent a browser reload/refresh
    props.dispatch(actClientCreate(state)); 
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
    <Dialog onClose={handleCancel} fullScreen={fullScreen} open={true}>
        <div style={{minWidth:'300px',padding:"2px",display: "flex" ,flexDirection: "column"}}>
        <DialogTitle ><ViewHeadlineIcon  />Create new client:</DialogTitle>          
        <form onSubmit={handleSubmit} >
        
        <div style={{minWidth:'50%',boxSizing:'border-box',padding:"2px",display: "flex" ,flexDirection: "column",flexGrow:'1'}}>         
          <TextField name="name"  size="small" placeholder="Name"  onChange={handleChange} />  
          <TextField name="phone"  size="small" placeholder="Phone" onChange={handleChange} />  
          <TextField name="mail"   size="small" placeholder="Mail"  onChange={handleChange} />     
        </div>        

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

export default connect(mapStateToPropsForm)(ClientCreateDlg);
//
//export default withStyles(useStyles)(HarvestImportLogCsv);
//export default (HarvestImportLogCsv);