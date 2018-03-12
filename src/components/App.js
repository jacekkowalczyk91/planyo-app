import React, {Component} from 'react';
import './App.css';
import PeopleView from "./PeopleView";

import Person from "./PersonDetails/Person";
import ShareButton from "./ShareButton/index"

import {
    BrowserRouter as Router, Route

} from 'react-router-dom'
import {
    Grid
} from 'react-bootstrap'

import GroupsView from './GroupsView/index'
import MainMenu from './MainMenu/index'
import AddPeopleForm from './AddPeopleForm'
import Favorites from './Favorites/index'

class App extends Component {
    render() {
        return (
            <Router>
                <Grid>
                    <MainMenu/>
                    <Route exact path="/" component={PeopleView}/>
                    <Route path="/people/:groupId" component={PeopleView}/>
                    <Route path="/PersonDetails/:personId" component={Person}/>
                    <Route exact path="/ShareButton" component={ShareButton}/>
                    <Route exact path='/GroupsView' component={GroupsView}/>
                    <Route exact path="/AddPeopleForm" component={AddPeopleForm}/>
                    <Route exact path="/FavoritesTable" component={Favorites}/>
                </Grid>
            </Router>
        );
    }
}

export default App;
