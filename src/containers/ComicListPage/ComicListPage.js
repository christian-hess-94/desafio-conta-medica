import { Button, Container, Grid } from '@material-ui/core';
import React, { Component } from 'react'

import ComicCard from '../../components/Comics/ComicCard/ComicCard';
import Spinner from './../../components/UI/Spinner/Spinner'
import marvelInstance from './../../helpers/axios/marvelInstance'

export default class ComicListPage extends Component {

    state = {
        comics: [],
        toWhichComic: 10
    }
    componentDidMount() {
        marvelInstance.get('/v1/public/comics?ts=1&apikey=24f5858e2b4667852c2576f8c1477b9e&hash=48836ab485d1e75d8a06e5c4bece9731')
            .then(response => {
                console.log(response.data.data.results);

                this.setState({
                    comics: response.data.data.results
                })
            })
            .catch(error => {

            })
            .finally(() => {

            })
    }

    handleLoadMore = () => {
        this.setState({
            toWhichComic: this.state.toWhichComic + 5
        })
    }

    render() {
        let firstColumn = []

        let secondColumn = []
        let whichComicsToRender = this.state.comics.slice(0, this.state.toWhichComic)
        whichComicsToRender.forEach((comic, index) => {
            if (index % 2 === 0) {
                firstColumn.push(comic)
            } else {
                secondColumn.push(comic)
            }
        })


        return (
            <Container>
                {
                    this.state.comics.length === 0 ? <Spinner text="Carregando lista de quadrinhos..." /> :
                        <Grid container direction="row" spacing={4} style={{ justifyContent: 'center', alignContent: 'center', marginTop: 90 }}>
                            <Grid spacing={3} item direction="column">
                                {firstColumn.map(comic => {
                                    return (
                                        <Grid key={comic.id}>
                                            <ComicCard comic={comic} />
                                        </Grid>
                                    )
                                })}
                            </Grid>
                            <Grid spacing={3} item direction="column">
                                {secondColumn.map(comic => {
                                    return (
                                        <Grid key={comic.id} item>
                                            <ComicCard comic={comic} />
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Grid>
                }

                {
                    this.state.toWhichComic >= this.state.comics.length ?
                        null
                        :
                        <Button onClick={this.handleLoadMore}>
                            Carregar mais
                            </Button>
                }
            </Container>
        )
    }
}
