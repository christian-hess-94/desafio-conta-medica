import { CardHeader, Avatar, Button, Card, CardActionArea, CardActions, CardContent, Grid, TextField, Typography } from '@material-ui/core'
import { Field, reduxForm } from 'redux-form'

import React from 'react';

const validate = values => {
    const errors = {}
    const requiredFields = [
        'email',
        'password'
    ]

    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = "Required"
        }
    })
    if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid e-mail address'
    }
    return errors
}



const renderTextField = ({
    label,
    input,
    type,
    meta: { touched, invalid, error }
}) => (
        <TextField
            margin="normal"
            variant="outlined"
            fullWidth
            type={type}
            label={label}
            placeholder={label}
            error={touched && invalid}
            helperText={touched && error}
            {...input}
        />
    );



let LoginForm = (props) => {
    const { handleSubmit, pristine, reset, submitting, classes } = props
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <CardHeader 
                title={<Typography variant="h3" component="h2">Welcome to Marvel Online Store!</Typography>}
                avatar = {
                    <Avatar src="https://vignette.wikia.nocookie.net/logopedia/images/d/d1/Marvel_Entertainment_Logo_%282002%29.jpg/revision/latest?cb=20190325210454"/>
                }
                />
                <CardContent>
                    <Typography variant="body1" component="h2">Please log in below, or create an account to continue</Typography>

                    <Grid container spacing={3}>
                        <Grid container>
                            <Field
                                type="text"
                                name="email"
                                label="E-mail"
                                component={renderTextField} />
                        </Grid>
                        <Grid container>
                            <Field
                                type="password"
                                name="password"
                                label="Password"
                                component={renderTextField} />
                        </Grid>


                    </Grid>

                </CardContent>
                <CardActions>
                    <Button type="submit" disabled={pristine || submitting}>
                        Connect
                    </Button>

                    <Typography variant="body1" component="h2" color="secondary">{props.errorMessage}</Typography>
                </CardActions>
            </form>
        </Card>
    );
}

LoginForm = reduxForm({
    form: 'login-account',
    validate,
})(LoginForm)

export default LoginForm;