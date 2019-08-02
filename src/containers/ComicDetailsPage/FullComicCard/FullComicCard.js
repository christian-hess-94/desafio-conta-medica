import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@material-ui/core';

import { AddShoppingCart } from '@material-ui/icons'
import Auxiliary from './../../../hoc/Auxiliary'
import React from 'react';
import { addToCart } from './../../../helpers/redux/actions/CheckoutActions'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    media: {
        height: 0,
        paddingTop: 400,
        width: 'auto'
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const FullComicCard = (props) => {
    console.log(props.comic.prices);

    const handleAddToCart = () => {
        console.log("Add to cart");
        console.log(props);
        let comic_price = undefined
        if (props.comic.prices[0].price) {
            comic_price = props.comic.prices[0].price
        } else {
            comic_price = 0.0
        }
        let purchaseData = {
            id_comic: props.comic.id,
            id_user: props.loggedAccount.email,
            comic_price: comic_price
        }
        props.addToCart(purchaseData)
    }

    const classes = useStyles();
    return (
        <Auxiliary>
            <CardHeader
                avatar={
                    <Avatar
                        className={classes.avatar}>
                        {props.comic.issueNumber === 0 ? props.comic.title.substring(0, 1) : props.comic.issueNumber}
                    </Avatar>
                }

                title={`${props.comic.title}`}
            />
            <CardMedia
                style={{ resize: "both" }}
                className={classes.media}
                image={props.comic.thumbnail.path ? `${props.comic.thumbnail.path}/standard_fantastic.${props.comic.thumbnail.extension}` : 'https://via.placeholder.com/250'}
                title={props.comic.title}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.comic.description ?
                        props.comic.description.includes('<') ?
                            `${props.comic.description.substring(0, props.comic.description.indexOf('<'))}`
                            :
                            props.comic.description
                        : 'Nenhuma descrição adicionada'}
                </Typography>
                <CardActions style={{ justifyContent: 'center' }}>
                    <Typography variant="h6" color="textSecondary" component="p">
                        Price: {props.comic.prices[0].price ? `$${props.comic.prices[0].price}` : <p>Not informed</p>}
                    </Typography>
                    <Button disabled={props.addingToCart} onClick={handleAddToCart}>
                        <AddShoppingCart /> {props.addingToCart ? 'Adding to cart...' : 'Add to cart'}
                    </Button>
                </CardActions>
            </CardContent>
        </Auxiliary>
    );
}
const mapStateToProps = state => ({
    addingToCart: state.checkout.addingToCart,
    addedToCart: state.checkout.addedToCart,
    errorWhenAddingToCart: state.checkout.errorWhenAddingToCart,
    errorCodeWhenAddingToCart: state.checkout.errorCodeWhenAddingToCart,
    loggedAccount: state.authentication.loggedAccount
})

export default connect(mapStateToProps, { addToCart })(FullComicCard);