import { Button, Card, CardActions, CardContent, Grid, TextField, Typography } from '@material-ui/core'
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
            errors[field] = "Obrigatório"
        }
    })
    if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Endereço de e-mail inválido'
    }
    if (values.password && values.password.length < 8) {
        errors.password = "Deve ter no mínimo 8 caracteres"
    }
    return errors
}



const renderTextField = ({
    input,
    label,
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



let CreateAccountForm = (props) => {
    const { handleSubmit, pristine, reset, submitting, classes } = props
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <CardContent>
                    <Typography variant="h5" component="h2">Criar conta</Typography>

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
                                label="Senha"
                                component={renderTextField} />
                        </Grid>


                    </Grid>
                </CardContent>
                <CardActions>
                    <Button type="submit" disabled={pristine || submitting}>
                        Criar conta
                    </Button>

                    <Typography variant="body1" component="h2" color="secondary">{props.errorMessage}</Typography>
                </CardActions>
            </form>
        </Card>
    );
}

CreateAccountForm = reduxForm({
    form: 'login-account',
    validate,
    destroyOnUnmount: false
})(CreateAccountForm)

export default CreateAccountForm;