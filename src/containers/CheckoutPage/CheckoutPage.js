import { Button, Card, CardActions, CardContent, Container, List, Typography, CardHeader } from '@material-ui/core';
import React, { Component } from 'react';

import ComicItem from './ComicItem/ComicItem';
import { connect } from 'react-redux'
import { ShoppingCart } from '@material-ui/icons';

class CheckoutPage extends Component {

    state = {
        loading: false
    }

    handlePurchase = () => {
        alert(`Thank you for purchasing: ${JSON.stringify(this.props.cart)}`)
    }

    render() {
        return (
            <Container style={{ marginTop: 100 }}>
                <Card>
                    <CardContent>
                        <CardHeader
                            title={
                                <Typography variant="h4" component="h4">
                                    Your cart <ShoppingCart />
                                </Typography>
                            } />
                        <List>
                            {this.props.cart.length > 0 ?
                                this.props.cart.map(purchase => {
                                    return (
                                        <ComicItem history={this.props.history} key={purchase.id_purchase} id_purchase={purchase.id_purchase} id_comic={purchase.id_comic} />
                                    )
                                })
                                :
                                <Typography variant="subtitle2" component="p">
                                    No items added to cart :/
                                </Typography>
                            }
                        </List>
                        {
                            this.props.cart.length > 0 ?
                                <CardActions>
                                    <Button onClick={this.handlePurchase} fullWidth color="primary">Purchase all</Button>
                                </CardActions>
                                :
                                null
                        }

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