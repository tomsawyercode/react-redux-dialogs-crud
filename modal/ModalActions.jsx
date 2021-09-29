

// Usage :
//this.props.dispatch(showDialog(editClientDlg,{clientid}));
//this.props.dispatch({type: 'CLOSE_DLG' });

export  const showDialog = (dlgComponent,dlgProps) => ({type:  'SHOW_DLG',  dlgComponent, dlgProps });
export  const closeDialog = () => ({type:  'CLOSE_DLG' });  