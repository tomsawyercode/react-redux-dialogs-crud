import React from 'react';
import { connect } from "react-redux";


const ModalRoot = ({ dlgComponent, dlgProps }) => {
  if (!dlgComponent) {
    return null 
  }  
  const Dlg = dlgComponent;//just for Uppercase component naming convention
  return <Dlg {...dlgProps} />
}

export default connect(state => state.modal)(ModalRoot);