import { Avatar, Card, CardActionArea, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@material-ui/core'

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        margin: 20
    },
    media: {
        height: 0,
        paddingTop: 200, // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const ComicCard = (props) => {

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardHeader
                    avatar={
                        <Avatar
                            className={classes.avatar}>
                            {props.comic.issueNumber === 0 ? props.comic.title.substring(0, 1) : props.comic.issueNumber}
                        </Avatar>
                    }

                    title={`${props.comic.title.substring(0, 30)}...`}
                    subheader={`$${props.comic.prices[0].price}`}
                />
                <CardMedia
                    style={{ resize: "both" }}
                    className={classes.media}
                    image={props.comic.thumbnail.path ? `${props.comic.thumbnail.path}/standard_fantastic.${props.comic.thumbnail.extension}` : 'https://via.placeholder.com/250'}
                    title={props.comic.title}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.comic.description ? `${props.comic.description.substring(0, 100)}...` : 'Nenhuma descrição adicionada'}
                    </Typography>

                    <Typography variant="subtitle2" color="textSecondary" component="p">
                        Clique para saber mais!
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ComicCard;