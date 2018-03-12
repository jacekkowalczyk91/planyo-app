import React from 'react'
import { connect } from 'react-redux'

import { addPeopleTask } from '../../state/people'
import {FormControl, Button} from 'react-bootstrap'


class AddTaskForm extends React.Component {

    state = {
        first_name: '',
        last_name: '',
        proffesion: '',
        city: '',
        isFavorite: false
    }

    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })

    handleSubmit = event => {
        event.preventDefault()
        if(this.validate())
            this.props.addPeopleHelper(this.state)
        else
            alert('Podaj poprawne dane!')
        alert("Dodałeś kandydata do bazy")
    }

    validate = () => {
        if (
            this.state.first_name
            &&
            this.state.last_name
            &&
            this.state.proffesion
            &&
            this.state.city
        )
            return true
        return false
    }

    render() {
        return (
            <div>
                <h2 style={{
                    marginTop: 80,
                    paddingBottom: 40
                }}>Dodaj kandydata</h2>
            <form
                onSubmit={this.handleSubmit}
            >
                <FormControl
                    name="first_name"
                    type="text"
                    value={this.state.first_name}
                    onChange={this.handleChange}
                    placeholder="Imię"
                >
                </FormControl>
                <FormControl
                    name="last_name"
                    type="text"
                    value={this.state.last_name}
                    onChange={this.handleChange}
                    placeholder="Nazwisko"
                >
                </FormControl>
                <FormControl
                    name="proffesion"
                    type="text"
                    value={this.state.proffesion}
                    onChange={this.handleChange}
                    placeholder="Profesja"
                >
                </FormControl>
                <FormControl
                    name="city"
                    type="text"
                    value={this.state.city}
                    onChange={this.handleChange}
                    placeholder="Miasto"
                >
                </FormControl>
                <FormControl
                    name="age"
                    type="text"
                    value={this.state.age}
                    onChange={this.handleChange}
                    placeholder="Wiek"
                >
                </FormControl>
                <FormControl
                    name="phone"
                    type="text"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    placeholder="Telefon"
                >
                </FormControl>
                <FormControl
                    name="email"
                    type="text"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="Email"
                >
                </FormControl>
                <br/>

                <Button bsStyle="success" onClick={this.handleSubmit} >
                    Zapisz kandydata
                </Button>

            </form>
            </div>

        )

    }

}





const mapDispatchToProps = dispatch => ({
    addPeopleHelper: content => dispatch(addPeopleTask(content))
})

export default connect(
    null,
    mapDispatchToProps
)(AddTaskForm)