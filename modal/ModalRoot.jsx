import React from 'react';
import { connect } from "react-redux";


//Dan Abramov
//https://stackoverflow.com/questions/35623656/how-can-i-display-a-modal-dialog-in-redux-that-performs-asynchronous-actions

//Dlg List
//const MODAL_COMPONENTS = { ModalDialog,addLayerCropDlg};
//const Dlg = MODAL_COMPONENTS[modalType]

const ModalRoot = ({ dlgComponent, dlgProps }) => {
  if (!dlgComponent) {
    return null 
  }  
  const Dlg = dlgComponent;//just for Uppercase component naming convention
  return <Dlg {...dlgProps} />
}

export default connect(state => state.modal)(ModalRoot);