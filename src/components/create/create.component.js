import React from 'react';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux'
import {ADD_ITEM, GET_ITEMS, RECEIVE_DATA, RECEIVE_DATA_ERROR} from '../../actions/listActions'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DatePicker from '../datepicker/datepicker.component';
class CreateItem extends React.Component {
    constructor({addItem, fetchItems}) {
        super();
        this.addItem = addItem;
        this.handleChange.bind(this);
        this.fetchItems = fetchItems;
    }

    state = {
        name: '',
        dateDue: null
    };
    handleChange = this.handleChange.bind(this);
    handleDateChange = this.handleDateChange.bind(this);

    handleChange(event) {
        this.setState({name: event.target.value});
    }
    handleDateChange(event) {
        this.setState({dateDue: event.target.value});
    }
    componentDidMount() {
        //this.fetchItems();
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
                this.addItem(this.state.name.trim(), this.state.dateDue);
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


function fetchPosts() {
    const URL = "../../mock/mock_todo_items.js";
    return fetch(URL, { method: 'GET'})
        .then( response => Promise.all([response, response.json()]));
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    fetchItems: () => {
        dispatch(GET_ITEMS());
        return fetchPosts().then(([response, json]) =>{
            if(response.status === 200){
                dispatch(RECEIVE_DATA(json))
            }
            else{
                dispatch(RECEIVE_DATA_ERROR())
            }
        });
    },
    addItem: (title, date) => dispatch(ADD_ITEM(title, date))

});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateItem)
