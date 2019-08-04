import { Button, Card, CardActions, CardContent, Container, List } from '@material-ui/core';
import React, { Component } from 'react';

import ComicItem from './ComicItem/ComicItem';
import { connect } from 'react-redux'

class CheckoutPage extends Component {

    state = {
        loading: false
    }

    handlePurchase = () => {
        alert("Thank you for purchasing!")
    }

    render() {
        return (
            <Container style={{ marginTop: 100 }}>
                <Card>
                    <CardContent>
                        <List>
                            {this.props.cart.map(purchase => {
                                return (
                                    <ComicItem history={this.props.history} key={purchase.id_purchase} id_purchase={purchase.id_purchase} id_comic={purchase.id_comic} />
                                )
                            })}
                        </List>
                        <CardActions>
                            <Button onClick={this.handlePurchase} fullWidth color="primary">Purchase all</Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.checkout.cart
})

export default connect(mapStateToProps, {})(CheckoutPage);