import React from 'react'
import {Table, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'
import {deletePeople} from "../../state/people";


class PeopleViewsTable extends React.Component {

    render() {
        const search = this.props.currentSearchPhrase || ''
        const groupIdFilter = this.props.groupIdFilter || null
        const data = this.props.data || [];

        return (
            <div>

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
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data && data.filter(
                            people =>
                                (
                                    people.first_name.toLowerCase().includes(search.toLowerCase())

                                    ||

                                    people.last_name.toLowerCase().includes(search.toLowerCase())

                                    ||

                                    people.proffesion.toLowerCase().includes(search.toLowerCase())

                                    ||

                                    people.city.toLowerCase().includes(search.toLowerCase())

                                ))
                            .filter(people => {
                                if(groupIdFilter === null)
                                    return true
                                return people.groups && people.groups.includes(groupIdFilter)
                            })
                            .map(people =>
                                <tr key={people.id}>
                                    <td>
                                        {people.first_name}
                                    </td>
                                    <td>
                                        {people.last_name}
                                    </td>
                                    <td>
                                        {people.proffesion}
                                    </td>
                                    <td>
                                        {people.city}
                                    </td>
                                    <td>
                                        <Link to={'/PersonDetails/' + people.id}>Pokaż szczegóły</Link>
                                    </td>
                                    <td>
                                        <Button bsStyle="danger" onClick={() => {
                                            this.props.deletePeople(people.id)
                                        }}>Usuń użytkownika</Button>
                                    </td>
                                </tr>
                            )

                    }
                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    deletePeople: id => dispatch(deletePeople(id))
})

const mapStateToProps = state => ({
    data: state.people.data
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PeopleViewsTable)