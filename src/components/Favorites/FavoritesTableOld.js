import React from 'react'
import {Table} from 'react-bootstrap'

class FavoritesTable extends React.Component  {
    state = {collections: []}

    componentWillMount() {
        this.setState({
            collections: JSON.parse(localStorage.getItem('userId')) || [
                {"id":18,"first_name":"Vina","last_name":"Greer","email":"vgreerh@google.com.hk","phone":"2261756642","proffesion":"Programmer Analyst III","age":32,"city":"Wrocław","adress":"6 Dovetail Center"},
                {"id":19,"first_name":"Johna","last_name":"Nettles","email":"jnettlesi@cyberchimps.com","phone":"2345663175","proffesion":"Recruiting Manager","age":74,"city":"Lublin","adress":"5 Sugar Crossing"},
            ],
            favorites: JSON.parse(localStorage.getItem('favorites')) || [],
        })
    }



    render() {
        return (
            <div>
                <Table striped bordered condensed hover style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>Imię</th>
                        <th>Nazwisko</th>
                        <th>Profesja</th>
                        <th>Miasto</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.favorites.map(
                            person =>

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
                                        {/*<Button to={'/GroupsView/' + person.id}>Delete</Button>*/}
                                        {/*<Button*/}
                                            {/*onClick={() => {*/}
                                                {/*this.handleRemoveTaskClick(data)*/}
                                            {/*}}*/}
                                        {/*>*/}
                                            {/*delete*/}
                                        {/*</Button>*/}
                                    </td>
                                </tr>
                        )
                    }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default FavoritesTable