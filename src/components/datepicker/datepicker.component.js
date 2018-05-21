import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginTop: 20,
        marginBottom: 0,
        width: 210,
    },
});

function DatePickers(props) {
    const { classes, onChange } = props;

    return (
    <div>
        <TextField
            id="date"
            label="Due Date (optional)"
            type="date"
            className={classes.textField}
            InputLabelProps={{
                shrink: true,
            }}
            onChange={(e)=>onChange(e)}
            onLoad={(e)=>onChange(e)}
        />
    </div>
    );
}

DatePickers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePickers);
