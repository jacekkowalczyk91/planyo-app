import React from 'react'
import { connect } from 'react-redux'

import { signUp } from '../../state/auth'
import {FormGroup, FormControl, Button} from 'react-bootstrap'
import styles from './Start.css'


class SignUpForm extends React.Component {

  state = {
    email: '',
    password: '',
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  handleSubmit = event => {
    event.preventDefault()
    this.props.signUpHelper(this.state.email, this.state.password)
  }

  render() {
    return (
        <div className="box" style={{

            width: '60vw',
            borderRadius: 2,
            padding: 15,
            boxShadow: '0px 0px 10px lightgrey',
            marginTop: '20px'

        }}>
      <form onSubmit={this.handleSubmit}>
        <h2>Zarejestruj się</h2>
        <FormControl
          type="text"
          name="email"
          placeholder="email"
          onChange={this.handleChange}
          value={this.state.email}
        >
        </FormControl>
        <br/>

          <FormControl
          type="password"
          name="password"
          placeholder="password"
          onChange={this.handleChange}
          value={this.state.password}
        >
          </FormControl><br/>

        <Button type={"submit"} bsStyle={"warning"}>Zarejestruj się</Button>
      </form>
        </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUpHelper: (email, password) => dispatch(signUp(email, password))
})

export default connect(
  null,
  mapDispatchToProps
)(SignUpForm)