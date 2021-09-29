
const initialState = {dlgComponent: null, dlgProps: {},}
  
export default  function ModalReducer(state = initialState, action) {
    switch (action.type) {
      case 'SHOW_DLG':
        return { dlgComponent: action.dlgComponent,  dlgProps: action.dlgProps}       
        
      case 'CLOSE_DLG':
        return initialState
        
      default:
        return state
    }
  }