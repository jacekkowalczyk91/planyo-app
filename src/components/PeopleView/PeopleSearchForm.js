import React from 'react'
import {
  InputGroup,
  FormControl
} from 'react-bootstrap'



class PeopleSearchForm extends React.Component {
  render() {
    return (
      <form>
        <InputGroup>
          <FormControl
            onChange={this.props.handleChange}
            value={this.props.currentSearchPhrase}
            type="text"
          />
        </InputGroup>
      </form>
    )
  }
}

export default PeopleSearchForm