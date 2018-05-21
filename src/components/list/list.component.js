import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
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

class CheckboxList extends React.Component {

    constructor({listItems, listItemsStub}) {
        super();
        this.listItems = listItems;

        this.listItemsStub = listItemsStub;
        console.log(listItems);
        console.log(listItemsStub);
    }

    state = {
        checked: [0],
    };

    handleToggle = value => () => {
        const {checked} = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };

    render() {
        const {classes} = this.props;
        console.log(this.context.store);
        return (
            <div className={classes.root}>
                <List>
                    {this.listItems.map(listItem => (
                        <ListItem
                            key={listItem.id}
                            dense
                            button
                            onClick={this.handleToggle(listItem.id)}
                            className={classes.listItem}
                        >
                            <Checkbox
                                checked={this.state.checked.indexOf(listItem.id) !== -1}
                                tabIndex={-1}
                                disableRipple
                            />
                            <Avatar alt="User1" src={defaultAvatar}/>
                            <ListItemText primary={`${listItem.title}`}/>
                            <ListItemSecondaryAction>
                                <IconButton aria-label="Edit">
                                    <EditIcon/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}

CheckboxList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxList);
