import {
    ERROR_WHEN_CREATING_ACCOUNT,
    ERROR_WHEN_LOGGING,
    LOG_OFF_ACCOUNT,
    START_ACCOUNT_CREATION,
    START_LOG_INTO_ACCOUNT,
    STOP_ACCOUNT_CREATION,
    STOP_LOG_INTO_ACCOUNT
} from "../actions/types"

const prefix = '%c [AuthenticationReducer]'
const initialState = {
    creatingAccount: false,
    accountCreated: false,
    errorWhenCreatingAccount: false,
    errorCodeWhenCreatingAccount: '',

    createdAccount: {},

    loggingIntoAccount: false,
    accountIsLogged: false,
    errorWhenLogging: false,
    errorCodeWhenLogging: '',

    loggedAccount: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case START_ACCOUNT_CREATION:
            console.log(prefix, 'color:lightgreen', "Foi iniciado o processo de criação de conta")
            return {
                ...state,
                creatingAccount: true,
            }
        case STOP_ACCOUNT_CREATION:
            console.log(prefix, 'color:lightgreen', "Conta foi criada com sucesso")
            return {
                ...state,
                creatingAccount: false,
                accountCreated: true,
                createdAccount: action.payload
            }
        case ERROR_WHEN_CREATING_ACCOUNT:
            console.log(prefix, 'color:lightgreen', "Houve um erro ao criar a conta")
            return {
                creatingAccount: false,
                accountCreated: false,
                errorWhenCreatingAccount: true,
                errorCodeWhenCreatingAccount: action.payload
            }
        case START_LOG_INTO_ACCOUNT:
            console.log(prefix, 'color:lightgreen', "Foi iniciado o processo de conectar a conta")
            return {
                ...state,
                accountCreated: false,
                loggingIntoAccount: true
            }
        case STOP_LOG_INTO_ACCOUNT:
            console.log(prefix, 'color:lightgreen', "Conta foi conectada com sucesso")
            return {
                ...state,
                loggingIntoAccount: false,
                accountIsLogged: true,
                loggedAccount: action.payload
            }
        case ERROR_WHEN_LOGGING:
            console.log(prefix, 'color:lightgreen', "Houve um erro ao conectar a conta")
            return {
                loggingIntoAccount: false,
                accountIsLogged: false,
                errorWhenLogging: true,
                errorCodeWhenLogging: action.payload
            }
        case LOG_OFF_ACCOUNT:
            console.log(prefix, 'color:lightgreen', "Logoff realizado")
            return {
                creatingAccount: false,
                accountCreated: false,
                errorWhenCreatingAccount: false,
                errorCodeWhenCreatingAccount: '',

                createdAccount: {},

                loggingIntoAccount: false,
                accountIsLogged: false,
                errorWhenLogging: false,
                errorCodeWhenLogging: '',

                loggedAccount: {}
            }
        default:
            return state
    }
}