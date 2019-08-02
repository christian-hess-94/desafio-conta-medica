import { Button, Grid } from '@material-ui/core';
import React, { Component } from 'react'
import { createNewAccount, logIntoAccount } from './../../helpers/redux/actions/AuthenticationActions'

import CreateAccountForm from './form/CreateAccountForm';
import { Link } from 'react-router-dom'
import Spinner from '../../components/UI/Spinner/Spinner'
import { connect } from 'react-redux'
import { firebaseAuth } from '../../helpers/firebase/FirebaseEnv'

//Redux config

class CreateAccountPage extends Component {

    state = {
        loading: {
            creating: false,
            connecting: false
        },
        errors: {
            createAccountErrorCode: null
        }
    }

    onSubmit = (values) => {
        this.setState({ loading: { creating: true } })
        this.props.createNewAccount(values)
    }
    render() {
        if (this.props.accountCreated) {
            console.log("%c Props: ", 'font-size:24px', this.props);
            this.props.logIntoAccount(this.props.createdAccount)
        }

        let creatingSpinner = null
        if (this.props.creatingAccount) {
            creatingSpinner = <Spinner text="Creating account..." />
        } else {
            creatingSpinner = null
        }

        if (this.props.accountIsLogged && this.props.loggedAccount) {
            this.props.history.push('/comics/list')
        }


        let errorMessage = undefined;
        switch (this.props.errorCodeWhenCreatingAccount) {
            case 'auth/email-already-in-use':
                errorMessage = "E-mail já cadastrado"
                break;
            case 'auth/invalid-email':
                errorMessage = "E-mail inválido"

                break;
            case 'auth/weak-password':
                errorMessage = "Weak password"
                break;
            default:
                if (this.state.errors.createAccountErrorCode) {
                    errorMessage = "Ocorreu um erro: " + this.state.errors.createAccountErrorCode
                }
                break;
        }
        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={3}            >
                <Grid item />
                <Grid item>
                    {
                        this.props.loggingIntoAccount ?
                            <Spinner text="Connecting..." />
                            :
                            <CreateAccountForm errorMessage={errorMessage} creating={this.state.creating} onSubmit={this.onSubmit} />
                    }
                    {creatingSpinner}
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = state => ({
    creatingAccount: state.authentication.creatingAccount,
    accountCreated: state.authentication.accountCreated,
    errorWhenCreatingAccount: state.authentication.errorWhenCreatingAccount,
    errorCodeWhenCreatingAccount: state.authentication.errorCodeWhenCreatingAccount,

    createdAccount: state.authentication.createdAccount,

    loggingIntoAccount: state.authentication.loggingIntoAccount,
    accountIsLogged: state.authentication.accountIsLogged,
    errorWhenLogging: state.authentication.errorWhenLogging,
    errorCodeWhenLogging: state.authentication.errorCodeWhenLogging,

    loggedAccount: state.authentication.loggedAccount,
})

export default connect(mapStateToProps, { createNewAccount, logIntoAccount })(CreateAccountPage)