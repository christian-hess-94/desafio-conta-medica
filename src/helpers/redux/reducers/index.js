//Arquivo para combinar todos os reducers em um só

import AuthenticationReducer from "./AuthenticationReducer";
import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'

//Importação dos reducers


export default combineReducers({
    form: formReducer,
    authentication: AuthenticationReducer
})