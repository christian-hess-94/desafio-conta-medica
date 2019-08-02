import { Avatar, Button, Card, CardContent, CardHeader } from '@material-ui/core';

import Auxiliary from '../../../../hoc/Auxiliary';
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
                            <Link key={character.id} style={{ textDecoration: 'none' }}>
                                <Button variant="text" color="primary"  >
                                    Ver todos os quadrinhos com este herói
                                </Button>
                            </Link>}
                    />
                })}
            </CardContent>
        </Auxiliary>
    );
}

export default CharactersCard;