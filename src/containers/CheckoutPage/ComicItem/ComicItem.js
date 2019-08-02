import { Avatar, Card, CardContent, CardHeader, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React, { Component } from 'react';

import Auxiliary from '../../../hoc/Auxiliary';
import marvelInstance from './../../../helpers/axios/marvelInstance'

class ComicItem extends Component {

    state = {
        loading: true,
        error: false,
        comic: {}
    }
    componentDidMount() {
        marvelInstance.get(`/v1/public/comics/${this.props.id_comic}?ts=1&apikey=24f5858e2b4667852c2576f8c1477b9e&hash=48836ab485d1e75d8a06e5c4bece9731`)
            .then(res => {
                console.log("Resposta do comic: ", res.data.data.results[0]);
                this.setState({
                    loading: false,
                    comic: res.data.data.results[0]
                })

            })
            .catch(error => {
                console.log("Erro ao buscar" + error);
                this.setState({
                    loading: false,
                    error: true
                })

            })
    }

    goToDetails = () => {
        console.log(this.props);

        this.props.history.push(`/comics/details/${this.state.comic.id}`)
    }


    render() {

        let comicAvatar = undefined
        if (this.state.comic.thumbnail) {
            comicAvatar = <Avatar src={`${this.state.comic.thumbnail.path}/standard_fantastic.${this.state.comic.thumbnail.extension}`} />
        } else {
            comicAvatar = <Avatar />
        }
        return (
            <ListItem button onClick={this.goToDetails}>
                <ListItemAvatar>
                    {comicAvatar}
                </ListItemAvatar>
                <ListItemText primary={this.state.comic.title} secondary={`Price: ${this.state.comic.prices ? this.state.comic.prices[0].price : 'It\'s free!'}`} />
            </ListItem>
        );
    }
}

export default ComicItem;