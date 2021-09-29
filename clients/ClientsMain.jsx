import React from "react";
import { connect } from "react-redux";


// Material Controls -----
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// Custom Control --------
import {L,V,LV} from '../controls/LabelValue';

// Icons -----------------
import IconButton from "@material-ui/core/IconButton";

// Icons -----------------
import EditIcon from '@material-ui/icons/Edit';//Pencil
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';//black fill


// Dialogs ---------------

import {showDialog} from '../modal/ModalActions';

// Activity Dialogs ------

import ClientCreateDlg from "./ClientCreateDlg";
import ClientEditDlg from "./ClientEditDlg";
import ClientDeleteDlg from "./ClientDeleteDlg";

// Actions -------------
import { actClientsFetch } from "./ClientsActions";


//--------------------------------------------------------
// Main
//--------------------------------------------------------
const cssLayers = theme => ({


  root: {    
      
      marginLeft: '0px',       
      marginRight: '0px', 
      padding: '0px 0px 0px 0px',
      width: '100%',
      
     
    },
  
    listItem: {      
      margin: '0px',       
      padding: '0px' ,
      paddingLeft: '6px',       
      paddingBottom:'4px',         
      backgroundColor: theme.palette.background.paper   ,
      borderBottom: '1px solid grey', 
    },
  
      
  });

class ClientsMain extends React.Component {

  constructor(props) {
    super(props);   
  }
  

  componentDidMount() {
    console.log("ComponentDidMount");      

    if (this.props.isDirty && this.props.status !== 'loading')
    {
      console.log("actClientFetch");     
      this.props.dispatch(actClientsFetch());
      return;
    }    
  }
    
  componentDidUpdate(prevProps, prevState) {
    console.log("DidUpdate:",this.props.isDirty);

    if (this.props.isDirty && this.props.status !== 'loading')    {
      console.log("actClientFetch");     
      this.props.dispatch(actClientsFetch());
    }    
  }
 
  addClient = () => {  this.props.dispatch(showDialog(ClientCreateDlg))  };
  editClient = (id) => {  this.props.dispatch(showDialog(ClientEditDlg,{id}))  };
  deleteClient = (id) => {  this.props.dispatch(showDialog(ClientDeleteDlg,{id}))  };
 
  
  render() {
    //console.log("Render, isDirty:",this.props.isDirty);
    const { status, msg, items } = this.props;
    
   
    const { classes } = this.props; 
    var advice= items && '('+items.length+')';
    if (status === "error") { advice= 'Error:'+msg }
    if (status === "loading") { advice = 'Loading...' }   

     
    return (

      <div  style={{width: "500px" , display: "flex", flexDirection: "column",alignItems:"center"}} >

      <div style={{padding:"4px",background:"#8f8f8f",
                     display: "flex" ,                    
                     flexDirection: "row",
                     alignItems:"center",
                     position: "relative",   
                     width: "100%"
                                      
                     }}>   
   
            <Typography variant="body1" style={{textIndent:'7px',color:'black',fontWeight:'600'}}> 
            Clients:     </Typography>      

            <div style={{marginLeft: "auto"}} ><V l={advice} /></div>
      </div>
      <div style={{width:'100%',display:"flex",flexDirection: "row",alignItems: "center", justifyContent: "space-around"}} >                   
      <L l={'Name'} /> <L l={'Phone'} /> <L l={'Mail'} /><L l={''} /> <L l={''} />
      </div>
      <List   className={classes.root}  >        
        { items && items.map( (e,i) => (
        
          <ListItem  className={classes.listItem} key={e.id}>
         
            <div style={{width:'100%',display:"flex",flexDirection: "row",alignItems: "center", justifyContent: "space-around"}} >    
            
            <V l={e.name} />
            <V l={e.phone} />                                    
            <V l={e.mail} />            

            <IconButton onClick={() => this.editClient(e.id)}  > <EditIcon/></IconButton> 
            <IconButton onClick={() => this.deleteClient(e.id) }  > <DeleteIcon/> </IconButton> 


            </div>           
           
           </ListItem>
            
            
        ))}                 
         
      </List>      
     
      <IconButton onClick={this.addClient} color='primary' > <AddCircleIcon/></IconButton> 
     
      </div>
    );
  }
}




const mapStateToProps = state => ({
  
  items: state.clients.items,
  status: state.clients.status,
  msg: state.clients.msg,
  isDirty : state.clients.isDirty
});

export default connect(mapStateToProps)(withStyles(cssLayers)(ClientsMain));

