import {connect} from 'react-redux'
import { COMPLETE_ITEM, OPEN_EDIT, GET_ITEMS } from '../../actions/listActions'
import List from '../../components/lists/list.component';

const mapStateToProps = state => ({
    listItems: state.list
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(COMPLETE_ITEM(id)),
    editItem: item => dispatch(OPEN_EDIT(item)),
    fetchItems: () => dispatch(GET_ITEMS())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)
