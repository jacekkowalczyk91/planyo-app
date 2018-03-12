import React from 'react'
import { connect } from 'react-redux'

import { addGroupTask } from '../../state/groups'
import {FormControl, Button, InputGroup, Glyphicon, Table} from 'react-bootstrap'


class AddGroupForm extends React.Component {

    state = {
        name: ''
    }

    handleChange = event => this.setState({
        name: event.target.value
    })

    handleSubmit = event => {
        event.preventDefault()
        this.props.addGroupHelper(this.state)
        this.setState({
            name: ''
        })
    }


    render() {
        return (
            <div>
                <h2 style={{
                marginTop: 80,
                paddingBottom: 40
            }}>Dodaj grupę</h2>

            <form style={{
                width: '30%',
                margin: '0 auto'
            }}
                onSubmit={this.handleSubmit}
            >
                <InputGroup>
                <FormControl
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="name"
                >
                </FormControl>
                <br/><br/>


                <Button bsStyle="info" onClick={this.handleSubmit}>
                    <Glyphicon glyph="plus-sign"/> Zapisz grupę
                </Button>
                </InputGroup>
            </form>




            </div>




        )
    }
}



const mapDispatchToProps = dispatch => ({
    addGroupHelper: content => dispatch(addGroupTask(content))
})

export default connect(
    null,
    mapDispatchToProps
)(AddGroupForm)