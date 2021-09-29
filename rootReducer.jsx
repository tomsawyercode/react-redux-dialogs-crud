import { combineReducers } from "redux";

import ClientsReducer from "./clients/ClientsReducer";
import ModalReducer from "./modal/ModalReducer";


export default combineReducers({
  clients :   ClientsReducer, 
  modal:      ModalReducer,

});
