import { Avatar, Button, Grid, Typography } from '@material-ui/core';
import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import LoginForm from './form/LoginForm';
import Spinner from './../../components/UI/Spinner/Spinner'
import { connect } from 'react-redux'
import { logIntoAccount } from './../../helpers/redux/actions/AuthenticationActions'

//Redux config

class LoginPage extends Component {

    state = {
        loading: {
            submitting: false
        },
        errors: {
            loginErrorCode: null
        }
    }

    onSubmit = (values) => {
        this.setState({ loading: { submitting: true } })
        this.props.logIntoAccount(values)
        
    }

    loginAdmin = () =>{}
    render() {

        if (this.props.accountIsLogged && this.props.loggedAccount) {
            this.props.history.push('/comics/list')
        }

        let errorMessage = undefined;
        if (this.props.errorWhenLogging) {
            switch (this.props.errorCodeWhenLogging) {
                case 'auth/user-not-found':
                    errorMessage = "Account doesn't exist"
                    break;
                case 'auth/user-disabled':
                    errorMessage = "This account was disabled"

                    break;
                case 'auth/wrong-password':
                    errorMessage = "Wrong password"
                    break;
                default:
                    errorMessage = "There was an error" + this.props.errorCodeWhenLogging
                    break;
            }

        }
        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={3}
            >
                <Grid item />
                <Grid item>
                    {this.props.loggingIntoAccount ? <Spinner text="Connecting..." subtext="If this takes too long, enable your browser to run 'unsafe' scripts and reload the page." /> : <LoginForm errorMessage={errorMessage} submitting={this.state.submitting} onSubmit={this.onSubmit} />}
                </Grid>
                <Grid item>
                    {this.props.loggingIntoAccount ? null :
                        <Link to="/create_account" style={{ textDecoration: 'none' }}>
                            <Button variant="outlined" color="primary">
                                Create New Account
                            </Button>
                        </Link>
                    }
                    {/*<Button onClick={this.loginAdmin} variant="contained" color="primary">
                        LoginAdmin
                </Button>*/}
                </Grid>

                <Typography variant="caption" component="h2">Created by Christian Hess</Typography>
                <Grid item container spacing={4} style={{ justifyContent: 'center' }}>
                    <Grid item >
                        <a target="_blank" rel="noopener noreferrer" href="mailto:christianhess94@gmail.com">
                            <Avatar src='https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-1.png' />
                        </a>
                    </Grid>
                    <Grid item >
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/christian-wolf-alves-hess-105365116/">
                            <Avatar src='https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png' />
                        </a>
                    </Grid>
                    <Grid item >
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/christian-hess-94/desafio-conta-medica">
                            <Avatar src='https://image.flaticon.com/icons/svg/25/25231.svg' />
                        </a>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = state => ({
    loggingIntoAccount: state.authentication.loggingIntoAccount,
    accountIsLogged: state.authentication.accountIsLogged,
    errorWhenLogging: state.authentication.errorWhenLogging,
    errorCodeWhenLogging: state.authentication.errorCodeWhenLogging,

    loggedAccount: state.authentication.loggedAccount
})

export default connect(mapStateToProps, { logIntoAccount })(LoginPage)