import React from "react";
import axios from "axios";
import "./page.css";
import rbLogo from '../../../assets/Logo.png';
import ListMaterial from '../../components/list/list.component';
import CreateItem from '../../components/create/create.component';
import Assignment from '@material-ui/icons/Assignment';

class Page extends React.Component {
    constructor({match}) {
        super();
        this.content = [];
        this.chosenTemplate = [];
        this.storeId = match.params.storeId;
    }

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
                <CreateItem/>
                <ListMaterial/>

            </div>
        );
    }
}

export default Page;
