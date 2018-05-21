import React from "react";
import axios from "axios";
import "./home.css";
import List from '../../containers/list/list.container';
import CreateItem from '../../components/create/create.component';
import FormDialog from '../../components/detailModal/detailModal';
import Assignment from '@material-ui/icons/Assignment';

class Home extends React.Component {

    componentDidMount() {
//redux action
    }



    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Assignment className='App-logo'/>
                    <span className="App-title">TODO-List</span>
                </header>
                <FormDialog></FormDialog>
                <CreateItem/>
                <div className="container">
                    <List/>
                </div>
            </div>
        );
    }
}

export default Home;
