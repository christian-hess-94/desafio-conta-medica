import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom'

import CheckoutPage from './../CheckoutPage/CheckoutPage'
import ComicDetailsPage from './../ComicDetailsPage/ComicDetailsPage'
import ComicListPage from './../ComicListPage/ComicListPage'
import TopMenu from '../../components/UI/TopMenu/TopMenu';
import { connect } from 'react-redux'
import { logOffAccount } from './../../helpers/redux/actions/AuthenticationActions'

class LayoutPage extends Component {
    render() {
        if (!this.props.accountIsLogged) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <TopMenu history={this.props.history} account={this.props.loggedAccount} logoff={this.props.logOffAccount} />
                <Route path={`${this.props.match.url}/lista`} component={ComicListPage} />
                <Route path={`${this.props.match.url}/detalhes/:id`} component={ComicDetailsPage} />
                <Route path={`${this.props.match.url}/carrinho`} component={CheckoutPage} />
            </div>
        );
    }
}


const mapStateToProps = state => ({
    accountIsLogged: state.authentication.accountIsLogged,
    loggedAccount: state.authentication.loggedAccount
})

export default connect(mapStateToProps, { logOffAccount })(LayoutPage)