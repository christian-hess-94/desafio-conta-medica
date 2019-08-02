import { Avatar, Card, CardContent, CardHeader, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import React, { Component } from 'react'

import CharactersCard from './FullComicCard/CharactersCard/CharactersCard'
import CreatorsCard from './FullComicCard/CreatorsCard/CreatorsCard';
import FullComicCard from './FullComicCard/FullComicCard';
import Spinner from '../../components/UI/Spinner/Spinner';
import marvelInstance from './../../helpers/axios/marvelInstance'

export default class ComicDetailsPage extends Component {


    state = {
        comicLoading: true,
        charactersLoading: true,
        creatorsLoading: true,
        comicError: false,
        charactersError: false,
        creatorsError: false,
        characters: [],
        creators: [],
        comic: {}
    }


    componentDidMount() {
        console.clear()
        //!pegando comic
        marvelInstance.get(`/v1/public/comics/${this.props.match.params.id}?ts=1&apikey=24f5858e2b4667852c2576f8c1477b9e&hash=48836ab485d1e75d8a06e5c4bece9731`)
            .then(response => {
                console.log('Response comic', response);
                console.log("%c STATE antes comic", 'font-size:25px;color:green', this.state);
                this.setState({
                    comicLoading: false,
                    comic: response.data.data.results[0],
                })
                console.log("%c STATE apos comic", 'font-size:25px;color:red', this.state);
            })
            .catch(error => {
                console.log('Error comic', error);
                this.setState({
                    comicLoading: false,
                    comicError: true,
                })
            })
        //! pegando characters
        marvelInstance.get(`/v1/public/comics/${this.props.match.params.id}/characters?ts=1&apikey=24f5858e2b4667852c2576f8c1477b9e&hash=48836ab485d1e75d8a06e5c4bece9731`)
            .then(response => {
                console.log('Response characters', response.data);
                console.log("%c STATE antes characters", 'font-size:25px;color:green', this.state);
                this.setState({
                    charactersLoading: false,
                    characters: response.data.data.results
                })
                console.log("%c STATE apos characters", 'font-size:25px;color:red', this.state);

            })
            .catch(error => {
                console.log('Error characters', error);
                this.setState({
                    charactersLoading: false,
                    charactersError: true
                })
            })

        //! pegando creators
        marvelInstance.get(`/v1/public/comics/${this.props.match.params.id}/creators?ts=1&apikey=24f5858e2b4667852c2576f8c1477b9e&hash=48836ab485d1e75d8a06e5c4bece9731`)
            .then(response => {
                console.log('Response creators', response.data);
                console.log("%c STATE antes creators", 'font-size:25px;color:green', this.state);
                this.setState({
                    creatorsLoading: false,
                    creators: response.data.data.results ? response.data.data.results : []
                })
                console.log("%c STATE apos creators", 'font-size:25px;color:red', this.state);
            })
            .catch(error => {
                console.log('Error creators', error);
                this.setState({
                    creatorsLoading: false,
                    creatorsError: true
                })
            })
    }


    render() {

        let fullComicCard = undefined
        let loadingComicSpinner = undefined

        if (this.state.comicLoading) {
            loadingComicSpinner = <Spinner text="Loading quadrinho..." />
        } else {
            loadingComicSpinner = undefined
            if (this.state.comic && (!this.state.comicError)) {
                console.log("%c Renderizando informações do quadrinho", 'font-size:25px;color:lightblue', this.state);

                fullComicCard = <FullComicCard
                    comic={this.state.comic} />
            } else {
                fullComicCard = <Typography variant="h5" component="h2" color="secondary">Erro ao recuperar informações</Typography>
            }
        }

        let charactersCard = undefined
        let loadingCharactersSpinner = undefined
        if (this.state.charactersLoading) {
            loadingCharactersSpinner = <Spinner text="Loading heroes..." />
        } else {
            loadingCharactersSpinner = undefined
            if (this.state.characters && (!this.state.charactersError)) {
                console.log("%c Renderizando informações dos heroes", 'font-size:25px;color:lightblue');
                if (this.state.characters.length > 0) {
                    charactersCard = <CharactersCard characters={this.state.characters} />
                } else {
                    console.log("%c Não tem heroes", 'font-size:15px;color:lightblue');
                    charactersCard = <Typography variant="h6" component="h2">Este quadrinho não possui heroes</Typography>
                }

            }
        }


        let creatorsCard = undefined
        let loadingCreatorSpinner = undefined
        if (this.state.creatorsLoading) {
            loadingCreatorSpinner = <Spinner text="Loading criadores..." />
        } else {
            loadingCreatorSpinner = undefined
            if (this.state.creators && (!this.state.creatorsError)) {
                console.log("%c Renderizando informações dos criadores", 'font-size:25px;color:lightblue');
                if (this.state.creators.length > 0) {
                    creatorsCard = <CreatorsCard creators={this.state.creators} />
                } else {
                    console.log("%c Não tem criadores", 'font-size:15px;color:lightblue');
                    creatorsCard = <Typography variant="h6" component="h2">Este quadrinho não possui criadores</Typography>
                }

            }
        }
        return (
            <Container style={{ marginTop: 100 }}>
                <Card>
                    {loadingComicSpinner}

                    {fullComicCard}
                    <CardContent>
                        <hr />
                        <Grid style={{ justifyContent: 'space-around', }} container spacing={4}>
                            <Grid item>
                                <Typography variant="h5" component="h2">Heroes</Typography>
                                {loadingCharactersSpinner}

                                {charactersCard}
                            </Grid>
                            <Grid item>
                                <Typography variant="h5" component="h2">Criadores</Typography>
                                {loadingCreatorSpinner}

                                {creatorsCard}
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        )
    }
}
