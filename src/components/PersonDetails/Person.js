import React from 'react'

import {connect} from 'react-redux'
import { Button, Table, ListGroup, ListGroupItem } from 'react-bootstrap'

import {toggleFav, toggleGroupInUser} from '../../state/person'


class Person extends React.Component {

    render() {
        const personId = this.props.match.params.personId
        const person = this.props.data.find(person => person.id === personId);

        if (person === undefined) {
            return null
        }

        return (
            <div>
                <h2 style={{
                    marginTop: 80,
                    paddingBottom: 40
                }}>Informacje szczegółowe</h2>

                <Table striped bordered condensed hover highlight style={{
                    marginTop: 40
                }}>
                    <thead>
                    <tr style={{
                        backgroundColor: '#76acdb'
                    }}>
                        <th>Imię</th>
                        <th>Nazwisko</th>
                        <th>Profesja</th>
                        <th>Miasto</th>
                        <th>Wiek</th>
                        <th>Telefon</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr key={person.id}>
                        <td>
                            {person.first_name}
                        </td>
                        <td>
                            {person.last_name}
                        </td>
                        <td>
                            {person.proffesion}
                        </td>
                        <td>
                            {person.city}
                        </td>
                        <td>
                            {person.age}
                        </td>
                        <td>
                            {person.phone}
                        </td>
                        <td>
                            {person.email}
                        </td>
                    </tr>
                    </tbody>
                </Table>

                <Button bsStyle="warning"
                    onClick={()=>this.props.toggleFav(person.id)}>
                    {
                        person.isFavorite ?
                            'Usuń z ulubionych' :
                            'Dodaj do ulubionych'
                    }
                </Button>

                <br/>
                <br/>
                <br/>
                <h2 style={{
                    marginTop: 40,
                    paddingBottom: 40}}> Grupy kandydata</h2>
                    <ListGroup>
                    {this.props.groups && this.props.groups.map((group)=>{
                        return <ListGroupItem bsStyle="info" onClick={()=>{this.props.toggleGroupInUser(person.id , group.key)}}>
                            {person.groups && person.groups.includes(group.key) ? 'X ' : ''}
                            {group.name}
                            </ListGroupItem>
                })}
                    </ListGroup>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.people.data,
    groups: state.groups.data
})

const mapDispatchToProps = dispatch =>({
    toggleFav: id => dispatch(toggleFav(id)),
    toggleGroupInUser: (userId, groupId) => dispatch(toggleGroupInUser(userId, groupId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Person)