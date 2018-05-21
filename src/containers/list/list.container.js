import {connect} from 'react-redux'
import { COMPLETE_ITEM } from '../../actions/listActions'
import List from '../../components/lists/list.component';

const mapStateToProps = state => ({
    listItems: state.list
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(COMPLETE_ITEM(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)
