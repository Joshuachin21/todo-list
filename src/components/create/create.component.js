import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

class CreateItem extends React.Component {

    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    };

    handleToggle = value => () => {

    };

    handleNewTodoKeyDown = ()=>{

    };

    handleChange = ()=>{

    };
    render() {
        const { classes } = this.props;

        return (
                <TextField
                    id="create-todo-item"
                    label="Add TODO Item"
                    className='create-todo-item'
                    placeholder-text=''
                    onChange={this.handleChange('name')}
                    margin="normal"
                />


        );
    }
}



export default CreateItem;
