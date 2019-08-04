import React from 'react';
import classes from './Spinner.module.css'

const Spinner = (props) => (

    
    <div>
        <div className={classes.loader} />
        <h4 style={{ textAlign: 'center' }}>{props.text}</h4>
        <h5 style={{ textAlign: 'center' }}>{props.subtext}</h5>
    </div>
);

export default Spinner;