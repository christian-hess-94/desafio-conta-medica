import { AcUnit, MenuOutlined } from '@material-ui/icons'
import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

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
}));

const TopMenu = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    const handleOpenLista = () => {
        handleClose()
        props.history.push('/quadrinhos/lista')
    }

    const handleOpenCarrinho = () => {
        handleClose()
        props.history.push('/quadrinhos/carrinho')
    }

    function handleClose() {
        setAnchorEl(null);
    }
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <AppBar position="fixed">
                <Toolbar>
                    <Button color="inherit" onClick={handleOpenLista}>
                        Início
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
                        <MenuItem disabled>Logado como: {props.account.email}</MenuItem>
                        <MenuItem onClick={handleOpenCarrinho}>Ver carrinho</MenuItem>
                        <MenuItem onClick={props.logoff}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default TopMenu;