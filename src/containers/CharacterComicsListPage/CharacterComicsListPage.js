import React, { Component } from 'react'
import marvelInstance from './../../helpers/axios/marvelInstance'
import Spinner from '../../components/UI/Spinner/Spinner';
import { Container, Card, CardHeader, List, ListItemText, ListItem, CardContent, Avatar, ListItemAvatar } from '@material-ui/core';

class CharacterComicsListPage extends Component {

    state = {
        loading: true,
        error:false,
        comics:[]
    }
    componentDidMount() {
        console.log('Seaching comics')
        marvelInstance.get(`/v1/public/characters/${this.props.match.params.id}/comics?ts=1&apikey=24f5858e2b4667852c2576f8c1477b9e&hash=48836ab485d1e75d8a06e5c4bece9731`)
        .then(res=>{
            console.log("Quadrinhos do heroi", res.data.data.results)
            this.setState({comics: res.data.data.results})
        })
        .catch(error=>{
            console.log('There was an error: ', error)
            this.setState({error:true})
        })
        .finally(()=>{
            this.setState({loading:false})
        })
    }

    handleGoToComicDetails = (comicId) =>{
        this.props.history.push(`/comics/details/${comicId}`)

    }    

    render() {
        return (
            <div style={{marginTop: 100}}>
                {this.state.loading ? 
            <Spinner text={`Loading comics for ${this.props.match.params.name}...`}/>    
            :
            <Container>
                <Card>
                    <CardHeader title={`Comics for ${this.props.match.params.name}`} />
                    <CardContent>
                        <List>
                            {this.state.comics.map(comic=>{
                                let comicAvatar = undefined
                                if (comic.thumbnail) {
                                    comicAvatar = <Avatar src={`${comic.thumbnail.path}/standard_fantastic.${comic.thumbnail.extension}`} />
                                } else {
                                    comicAvatar = <Avatar />
                                }
                                return (
                                    <ListItem key={comic.id} button onClick={() => this.handleGoToComicDetails(comic.id)}>
                                        <ListItemAvatar>
                                            {comicAvatar}
                                        </ListItemAvatar>
                                        <ListItemText primary={comic.title} secondary={`Issue #${comic.issueNumber}`}/>
                                    </ListItem> 
                                )
                            })} 
                        </List>    
                    </CardContent>   
                </Card>
            </Container>
            }
                
            </div>
        )
    }
}

export default CharacterComicsListPage
