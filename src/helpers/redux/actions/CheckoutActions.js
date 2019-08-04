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
} from './types'

import { firebaseFirestore } from './../../firebase/FirebaseEnv'

const prefix = '%c [CheckoutActions]'
export const addToCart = (comicData) => dispatch => {
    console.log(prefix, 'color:lightblue', "Iniciando adição de item no carrinho: ", comicData)
    dispatch({
        type: START_ADDING_TO_CART,
    })
    firebaseFirestore.collection('carrinhos').add(comicData)
        .then(res => {
            console.log(prefix, 'color:lightblue', "Item adicionado no carrinho")
            comicData['id_purchase'] = res.id
            dispatch({
                type: STOP_ADDING_TO_CART,
                payload: comicData
            })
        })
        .catch(error => {
            console.log(prefix, 'color:lightblue', "Erro ao adicionar item no carrinho")
            dispatch({
                type: ERROR_WHEN_ADDING_TO_CART,
                payload: error,
            })
        })
}

export const updateCart = (email) => dispatch => {
    console.log(prefix, 'color:lightblue', "Atualizando carrinho de " + JSON.stringify(email))
    firebaseFirestore.collection('carrinhos').where('id_user', '==', email).get()
        .then(snapshot => {
            let fullCart = []
            snapshot.forEach(purchase => {
                let purchaseId = purchase.id;
                let comicData = purchase.data();
                // console.log("purchase data: ", purchase.data());
                comicData['id_purchase'] = purchaseId
                fullCart.push(comicData)
            })
            console.log(prefix, 'color:lightblue', "Carrinho atualizado")
            dispatch({
                type: STOP_UPDATING_CART,
                payload: fullCart
            })
        })
        .catch(error => {
            console.log(prefix, 'color:lightblue', "Erro ao atualizar Carrinho")

        })
}
export const removeFromCart = (itemId, cart) => dispatch => {
    console.log(prefix, 'color:lightblue', `Iniciando remoção do item ${itemId} do carrinho`)
    dispatch({
        type: START_REMOVING_FROM_CART,
    })
    firebaseFirestore.collection('carrinhos').doc(itemId).delete()
        .then(res => {
            console.log(prefix, 'color:lightblue', `Item ${itemId} removido do carrinho`)
            let newCart = cart.filter(function (obj) {
                return obj.id_purchase !== itemId;
            });
            dispatch({
                type: STOP_REMOVING_FROM_CART,
                payload: newCart
            })
        })
        .catch(error => {
            console.log(prefix, 'color:lightblue', `Erro ao remover Item ${itemId} do carrinho ${error}`)
            let pack = {
                itemId,
                error
            }
            dispatch({
                type: ERROR_WHEN_REMOVING_FROM_CART,
                payload: pack
            })
        })

}