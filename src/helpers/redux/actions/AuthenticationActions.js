import {
    ERROR_WHEN_CREATING_ACCOUNT,
    ERROR_WHEN_LOGGING,
    LOG_OFF_ACCOUNT,
    START_ACCOUNT_CREATION,
    START_LOG_INTO_ACCOUNT,
    STOP_ACCOUNT_CREATION,
    STOP_LOG_INTO_ACCOUNT
} from "./types"

import { firebaseAuth } from './../../firebase/FirebaseEnv'

const prefix = '%c [AuthenticationActions]'
export const createNewAccount = (accountData) => dispatch => {
    console.log(prefix, 'color:lightblue', "Iniciando criação de nova conta")
    dispatch({
        type: START_ACCOUNT_CREATION,
    })
    firebaseAuth.createUserWithEmailAndPassword(accountData.email, accountData.password)
        .then((data) => {
            console.log(prefix, 'color:lightblue', "Conta criada com sucesso");
            dispatch({
                type: STOP_ACCOUNT_CREATION,
                payload: accountData
            })
        })
        .catch(error => {
            console.error("Erro ao criar a conta")
            dispatch({
                type: ERROR_WHEN_CREATING_ACCOUNT,
                payload: error.code
            })
        })
}

export const logIntoAccount = (accountData) => dispatch => {
    console.log(prefix, 'color:lightblue', "Iniciando processo de login")
    dispatch({
        type: START_LOG_INTO_ACCOUNT
    })
    firebaseAuth.signInWithEmailAndPassword(accountData.email, accountData.password)
        .then(data => {
            console.log(prefix, 'color:lightblue', "Conta conectada com sucesso");
            dispatch({
                type: STOP_LOG_INTO_ACCOUNT,
                payload: accountData
            })
        })
        .catch(error => {
            console.error("Erro ao realizar login");
            dispatch({
                type: ERROR_WHEN_LOGGING,
                payload: error.code
            })
        })
}


export const logOffAccount = () => dispatch => {
    console.log(prefix, 'color:lightblue', "Desconectando a conta")
    dispatch({
        type: LOG_OFF_ACCOUNT,
    })
}