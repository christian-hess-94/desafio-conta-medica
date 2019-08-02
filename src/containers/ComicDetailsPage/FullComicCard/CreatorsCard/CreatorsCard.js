import { Avatar, Button, Card, CardContent, CardHeader } from '@material-ui/core';

import Auxiliary from '../../../../hoc/Auxiliary';
import { Link } from 'react-router-dom'
import React from 'react';

const CreatorsCard = (props) => {

    console.table(props.creators);
    return (
        <Auxiliary>

            <CardContent>
                {props.creators.map(creator => {
                    return <CardHeader key={creator.id}
                        avatar={< Avatar src={`${creator.thumbnail.path}/standard_fantastic.${creator.thumbnail.extension}`} />}

                        title={`${creator.firstName} ${creator.middleName} ${creator.lastName}`}
                        subheader={
                            <Link key={creator.id} style={{ textDecoration: 'none' }}>
                                <Button variant="text" color="primary"  >
                                    See all comics made by this creator
                                </Button>
                            </Link>}
                    />
                })}
            </CardContent>
        </Auxiliary>
    );
}

export default CreatorsCard;