import { Avatar, Button, Card, CardContent, CardHeader } from '@material-ui/core';

import Auxiliary from '../../../hoc/Auxiliary';
import { Link } from 'react-router-dom'
import React from 'react';

const CharactersCard = (props) => {

    console.table(props.characters);
    return (
        <Auxiliary>

            <CardContent>
                {props.characters.map(character => {
                    return <CardHeader key={character.id}
                        avatar={
                            <Avatar src={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`}>
                                F
                            </Avatar>
                        }

                        title={character.name}
                        subheader={
                            <Link to={`/comics/comics-for-characters/${character.id}/${character.name}`} key={character.id} style={{ textDecoration: 'none' }}>
                                <Button variant="text" color="primary"  >
                                    See all comics with this hero
                                </Button>
                            </Link>}
                    />
                })}
            </CardContent>
        </Auxiliary>
    );
}

export default CharactersCard;