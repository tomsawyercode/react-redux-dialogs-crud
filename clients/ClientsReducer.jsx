
const initialState = {
  items: [],  
  status : null,
  msg: null,
  isDirty : true, // to trigger initial load
  formStatus : 'normal',
  formMsg: null
};


export default function ClientsReducer(state = initialState,action)
 {
  switch (action.type) {
    case 'CLIENTS_FETCH_BEGIN':
      return {
        ...state,
        status: 'loading' // show a spinner or something       
      };

    case 'CLIENTS_FETCH_SUCCESS':
      // All done: set status = "success", and replace the items with api response      
      return {
        ...state,
        status: 'success',        
        items: action.payload.items,
        isDirty : false
      };


    case 'CLIENTS_FETCH_ERROR':   
      return {
        ...state,
        status: "error",
        msg: action.payload.msg,
        items: []        
      };
    case 'CLIENT_FORM_INIT':             
        return {
          ...state,
          formStatus: 'normal',
          formMsg: '',          
        };   
    case 'CLIENT_FORM_SUBMIT':   
        return {
          ...state,
          formStatus: 'loading',
          formMsg: '',          
        };   

    case 'CLIENT_FORM_RESPONSE':    
      
      return {
        ...state,
        formStatus: action.payload.status,
        formMsg: action.payload.msg,
        
      };   

    case 'CLIENTS_SET_DIRTY':  
    
      return {
        ...state,
        isDirty : true
      };          

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
