import React from 'react';
import classes from './Spinner.module.css'

const Spinner = (props) => (
    <div>
        <div className={classes.loader} />
        <h4 style={{ textAlign: 'center' }}>{props.text}</h4>
    </div>
);

export default Spinner;