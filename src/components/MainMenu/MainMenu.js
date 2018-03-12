import React from 'react'
import { connect } from 'react-redux'
import {
    Navbar,
    Nav,
    NavItem
} from 'react-bootstrap'
import {
    withRouter
} from 'react-router-dom'
import {
    LinkContainer
} from 'react-router-bootstrap'
import ShareButton from '../ShareButton'

import { signOut } from '../../state/auth'
import {logo} from './planyo1.png'


const MainMenu = props => (
    <Navbar style={{BorderRadiusBottom:10,
        background: 'white',
        width: '100%'
    }}>
        <Navbar.Header>

        </Navbar.Header>
        <Navbar.Toggle/>
        <Navbar.Brand>
            <img src={require('./planyo1.png')} style={{
                height: 50,
                width: 80
            }} />

        </Navbar.Brand>
        <Navbar.Collapse>
        <Nav>

            <LinkContainer exact to="/">
                <NavItem>Kandydaci</NavItem>
            </LinkContainer>
            <LinkContainer to="/GroupsView">
                <NavItem>Grupy</NavItem>
            </LinkContainer>
            <LinkContainer to="/AddPeopleForm">
                <NavItem>Dodaj kandydata</NavItem>
            </LinkContainer>
            <LinkContainer to="/FavoritesTable">
                <NavItem>Ulubione</NavItem>
            </LinkContainer>

            <NavItem onClick={props.signOutHelper}>Sign out</NavItem>
        </Nav>
            <Nav pullRight>
                <NavItem>
                    <ShareButton/>
                </NavItem>

        </Nav>
        </Navbar.Collapse>
    </Navbar>
)

const mapDispatchToProps = dispatch => ({
    signOutHelper: () => dispatch(signOut())
})

export default withRouter(connect(
    null,
    mapDispatchToProps
)(MainMenu))