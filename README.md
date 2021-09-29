# react-redux-dialogs-crud

A CRUD example that show how to use redux for inject dialogs in the main content app area.

It is a react client phone contacts CRUD implented with MATERIAL-UI Dialogs.

The opening and closing of the dialogue will be made with redux. Injecting the dialog in the props of a "Dialog-root" component.
 Also the asynchronic interaction of the dialog with the api will be handled by redux thunk.
 The dialog make the api request with Axios, if is all is ok it close by self, if not error advices are showed.

Bassically reduce all to a single line of code:

**Opening:**

	`dispatch(showDialog(ClientEditDlg,{clientId,someCallback}))`

**Closing:**

	Raw version: ` this.props.dispatch({type: 'CLOSE_DLG' }); // do not need to import actions`
	Action defined:   `this.props.dispatch(actCloseDlg()); // must to import actCloseDlg from modalActions.jsx`

It is important to note that this methodology can be applied in other types of controls such as:
toast, snack bar, banners, or also side columns contents.

[Full description in dev.to](https://dev.to).

