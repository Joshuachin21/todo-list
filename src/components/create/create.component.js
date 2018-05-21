import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux'
import {ADD_ITEM} from '../../actions/listActions'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DatePicker from '../datepicker/datepicker.component';


class CreateItem extends React.Component {
    constructor({dispatch}) {
        super();
        this.dispatch = dispatch;
        this.handleChange.bind(this);
    }

    state = {
        name: '',
        dateDue: null
    };
    handleChange = this.handleChange.bind(this);
    handleDateChange = this.handleDateChange.bind(this);

    handleChange(event) {
        console.log(event.target.value);
        this.setState({name: event.target.value});
    }
    handleDateChange(event) {
        console.log(event.target.value);
        this.setState({dateDue: event.target.value});
    }

    render() {
        return (

            <form
                className='createForm'
                onSubmit={e => {
                e.preventDefault();
                if (!this.state.name.trim()) {
                    return;
                }
                this.dispatch(ADD_ITEM(this.state.name.trim(), this.state.dateDue));
                this.setState({name: ''});
            }}>

                <DatePicker onChange={this.handleDateChange}/>

                <TextField
                    id="create-todo-item"
                    label="Add TODO Item"
                    className='create-todo-item'
                    placeholder-text=''
                    margin="normal"
                    value={this.state.name}
                    onChange={this.handleChange}
                />

                <IconButton aria-label="Add" type="submit">
                    <AddIcon/>
                </IconButton>
            </form>

        );
    }
}

export default connect()(CreateItem)
