import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import {withStyles} from "@material-ui/core/styles/index";
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import defaultAvatar from '../../../assets/user1.png';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

const TodoList = ({listItems, toggleTodo, editItem}) => (
    <div>
        <List>
            {listItems.map(listItem => (
                <ListItem
                    key={listItem.id}
                    dense
                    button
                    onClick={()=>toggleTodo(listItem.id)}
                >
                    <Checkbox
                        checked={listItem.completed}
                        tabIndex={-1}
                        disableRipple
                    />
                    <Avatar alt="User1" src={defaultAvatar}/>
                    <ListItemText primary={`${listItem.title}   ${listItem.dateDue ? '(' + listItem.dateDue + ')' : ''}`}/>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Edit" onClick={()=>editItem(listItem)}>
                            <EditIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    </div>

);

export default withStyles(styles)(TodoList);
