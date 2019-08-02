import { AppBar, Badge, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';

import { MenuOutlined } from '@material-ui/icons'
import React from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { updateCart } from './../../../helpers/redux/actions/CheckoutActions'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    margin: {
        margin: theme.spacing(2),
    },
    padding: {
        padding: theme.spacing(0, 2),
    },
}));

const TopMenu = (props) => {
    console.log("TOPMENU PROPS", props);

    if (!props.updatedCart && props.cart.length >= 0) {
        console.log("Buscando itens do carrinho");

        props.updateCart(props.loggedAccount.email)
    }
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    const handleOpenLista = () => {
        handleClose()
        props.history.push('/comics/list')
    }

    const handleOpenCarrinho = () => {
        handleClose()
        props.history.push('/comics/checkout')
    }

    function handleClose() {
        setAnchorEl(null);
    }
    const classes = useStyles();
    console.log("Numero de coisas no carrinho", props.cart.length);

    return (
        <div className={classes.root}>

            <AppBar position="fixed">
                <Toolbar>
                    <Button color="inherit" onClick={handleOpenLista}>
                        Home
                    </Button>
                    <Typography variant="h6" className={classes.title}>
                        Marvel
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}>
                        <MenuOutlined />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem disabled>Connected as: {props.account.email}</MenuItem>
                        <MenuItem onClick={handleOpenCarrinho}>Checkout
                        <Badge className={classes.margin} badgeContent={props.cart.length} color="primary">
                                <div />
                            </Badge>
                        </MenuItem>
                        <MenuItem onClick={props.logoff}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    )
}
const mapStateToProps = state => ({
    updatingCart: state.checkout.updatingCart,
    updatedCart: state.checkout.updatedCart,
    errorWhenUpdatingCart: state.checkout.errorWhenUpdatingCart,
    errorCodeWhenUpdatingCart: state.checkout.errorCodeWhenUpdatingCart,

    cart: state.checkout.cart,
    loggedAccount: state.authentication.loggedAccount
})

export default connect(mapStateToProps, { updateCart })(TopMenu);