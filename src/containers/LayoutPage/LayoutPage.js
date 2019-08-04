import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom'

import CheckoutPage from './../CheckoutPage/CheckoutPage'
import ComicDetailsPage from './../ComicDetailsPage/ComicDetailsPage'
import ComicListPage from './../ComicListPage/ComicListPage'
import TopMenu from '../../components/UI/TopMenu/TopMenu';
import { connect } from 'react-redux'
import { logOffAccount } from './../../helpers/redux/actions/AuthenticationActions'
import CharacterComicsListPage from '../CharacterComicsListPage/CharacterComicsListPage';
import CreatorComicsListPage from '../CreatorComicsListPage/CreatorComicsListPage'

class LayoutPage extends Component {
    render() {
        if (!this.props.accountIsLogged) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <TopMenu history={this.props.history} account={this.props.loggedAccount} logoff={this.props.logOffAccount} />
                <Route path={`${this.props.match.url}/list`} component={ComicListPage} />
                <Route path={`${this.props.match.url}/details/:id`} component={ComicDetailsPage} />
                <Route path={`${this.props.match.url}/checkout`} component={CheckoutPage} />
                <Route path={`${this.props.match.url}/comics-for-characters/:id/:name`} component={CharacterComicsListPage} />
                <Route path={`${this.props.match.url}/comics-for-creators/:id/:name`} component={CreatorComicsListPage} />
            </div>
        );
    }
}


const mapStateToProps = state => ({
    accountIsLogged: state.authentication.accountIsLogged,
    loggedAccount: state.authentication.loggedAccount
})

export default connect(mapStateToProps, { logOffAccount })(LayoutPage)