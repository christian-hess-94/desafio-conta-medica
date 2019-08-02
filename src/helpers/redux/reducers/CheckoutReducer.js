import {
    ERROR_WHEN_ADDING_TO_CART,
    ERROR_WHEN_BUYING_CART,
    ERROR_WHEN_REMOVING_FROM_CART,
    ERROR_WHEN_UPDATING_CART,
    START_ADDING_TO_CART,
    START_BUYING_CART,
    START_REMOVING_FROM_CART,
    START_UPDATING_CART,
    STOP_ADDING_TO_CART,
    STOP_BUYING_CART,
    STOP_REMOVING_FROM_CART,
    STOP_UPDATING_CART
} from './../actions/types'

const prefix = '%c [CheckoutReducer]'
const initialState = {
    addingToCart: false,
    addedToCart: false,
    errorWhenAddingToCart: false,
    errorCodeWhenAddingToCart: '',

    removingFromCart: false,
    removedFromCart: false,
    errorWhenRemovingFromCart: false,
    errorCodeWhenRemovingFromCart: '',

    updatingCart: false,
    updatedCart: false,
    errorWhenUpdatingCart: false,
    errorCodeWhenUpdatingCart: '',

    cart: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case START_ADDING_TO_CART:
            console.log(prefix, 'color:lightgreen', "Foi iniciado o processo de adição no carrinho")
            return {
                ...state,
                addingToCart: true,
            }
        case STOP_ADDING_TO_CART:
            console.log(prefix, 'color:lightgreen', "Adicionado no carrinho com sucesso")
            let newCart = state.cart
            newCart.push(action.payload)
            return {
                ...state,
                addingToCart: false,
                addedToCart: true,
                cart: newCart
            }
        case ERROR_WHEN_ADDING_TO_CART:
            console.log(prefix, 'color:lightgreen', "Houve um erro ao adicionar no carrinho")
            return {
                addingToCart: false,
                addedToCart: false,
                errorWhenAddingToCart: true,
                errorCodeWhenAddingToCart: action.payload
            }
        case START_UPDATING_CART:
            console.log(prefix, 'color:lightgreen', "Iniciando atualização do carrinho")
            return {
                ...state,
                updatedCart: false,
                updatingCart: true
            }

        case STOP_UPDATING_CART:
            console.log(prefix, 'color:lightgreen', "Carrinho atualizado")
            return {
                ...state,
                updatingCart: false,
                updatedCart: true,
                cart: action.payload
            }

        case ERROR_WHEN_UPDATING_CART:
            console.log(prefix, 'color:lightgreen', "Erro ao atualizar o carrinho")
            return {
                ...state,
                updatingCart: false,
                updatedCart: true,
                cart: action.payload
            }



        default:
            return state;
    }
}