import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from 'react-redux';
import {
    COMPLETE_ITEM,
    OPEN_EDIT,
    CLOSE_EDIT,
    UPDATE_ITEM,
    DELETE_ITEM,
    UPDATE_EDIT_ITEM
} from "../../actions/listActions";

let state = {};
const FormDialog = ({dialogState, closeDialog, deleteItem, updateItem, updateEditItem}) => {

    let editingItem = Object.assign({}, dialogState.editItem || {});
    let handleChange = (e, attr) => {

        editingItem[attr] = e.target.value;

        return updateEditItem(editingItem);
    };

    return (
        <div>

            <Dialog
                open={dialogState.editing}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Edit Item</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type="text"
                        fullWidth
                        value={editingItem.title || ''}
                        onChange={(e) => {
                            return handleChange(e, 'title');
                        }}

                    />
                    <TextField
                        id="text"
                        label="description"
                        margin="normal"
                        value={editingItem.text || ''}
                        onChange={(e) => {
                            return handleChange(e, 'text');
                        }}
                    />
                    <TextField
                        id="date"
                        label="Due Date (optional)"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={editingItem.dateDue || ''}
                        onChange={(e) => {
                            return handleChange(e, 'dateDue');
                        }}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={() => closeDialog()} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => deleteItem(editingItem.id)} color="secondary">
                        DELETE
                    </Button>
                    <Button onClick={() => updateItem(editingItem)} color="primary">
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};


const mapStateToProps = state => ({
    dialogState: state.dialog
});

const mapDispatchToProps = dispatch => ({
    closeDialog: () => dispatch(CLOSE_EDIT()),
    deleteItem: id => dispatch(DELETE_ITEM(id)),
    updateItem: item => dispatch(UPDATE_ITEM(item)),
    updateEditItem: item => dispatch(UPDATE_EDIT_ITEM(item))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormDialog)
