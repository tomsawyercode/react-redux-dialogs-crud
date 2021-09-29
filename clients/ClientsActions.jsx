import axios from 'axios';


//-----------------------
// Form =>  Create, Update, Delete
//-----------------------
export function actClientCreate(d) {return actClientsFormApi(d,"clientsresponse")};
export function actClientUpdate(d) {return actClientsFormApi(d,"clientsresponse")};
export function actClientDelete(d) {return actClientsFormApi(d,"clientsresponse")};

//------------------------------------------------------
function actClientsFormApi(d,url) { 
   
  return dispatch => {
    dispatch(actClientFormSubmit());// for processing advice msg

    axios.post(process.env.REACT_APP_API_BASE_URL+url,d, {withCredentials: true})
    .then(response => { dispatch(actClientFormResponse(response.data));
                        dispatch(actClientsSetDirty()) ;})
    .catch(error => { dispatch(actClientFormResponse({status:'error',msg:error.message+', ' + (error.response && error.response.data.msg)}));
                    })
        
  };
}

export const actClientFormInit = () => ({
  type: 'CLIENT_FORM_INIT'  
});
export const actClientFormSubmit = () => ({
  type: 'CLIENT_FORM_SUBMIT'  
});
export const actClientFormResponse = (resp) => ({
  type: 'CLIENT_FORM_RESPONSE',
  payload : resp
});


//------------------------------------------------------
// Data Fetch
//------------------------------------------------------
export function actClientsFetch(f) { 
  return dispatch => {
    dispatch(actClientsFetchBegin());  // for loading message or spinner
    
    axios.post(process.env.REACT_APP_API_BASE_URL+"clientslist",f,{withCredentials: true} )
    .then(response => { dispatch(actClientsFetchSuccess(response.data.items));})
    .catch(error => { //console.log("fetchZones:",error.message+', ' +error.response.data.msg);                      
                      //console.log(Object.keys(error));
                      //dispatch(actClientsFetchError(error.message)); 
                      dispatch(actClientsFetchError(error.message+', ' + (error.response && error.response.data.msg)))
                     } );    
  };
}
export const actClientsFetchBegin = () => ({
  type: 'CLIENTS_FETCH_BEGIN'
});

export const actClientsFetchSuccess = items => ({
  type: 'CLIENTS_FETCH_SUCCESS',
  payload: { items: items  }
});

export const actClientsFetchError = msg => ({
  type: 'CLIENTS_FETCH_ERROR',
  payload: { msg: msg}
});

export const actClientsSetDirty = () => ({
  type: 'CLIENTS_SET_DIRTY'
});







