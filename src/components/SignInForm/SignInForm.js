import React from 'react'
import { connect } from 'react-redux'

import { signIn } from '../../state/auth'
import {FormGroup, FormControl, Button} from 'react-bootstrap'

class SignInForm extends React.Component {

  state = {
    email: '',
    password: '',
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  handleSubmit = event => {
    event.preventDefault()
    this.props.signInHelper(this.state.email, this.state.password)
  }

  render() {
    return (
        <div className="box" style={{
                width: '60vw',
                borderRadius: 2,
                padding: 15,
                boxShadow: '0px 0px 10px lightgrey',
                margin: '0 auto',
                marginTop: '5%'
            }}>

      <form onSubmit={this.handleSubmit}>
        <h2>Zaloguj się</h2>

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



        <Button type={"submit"} bsStyle={"warning"}>Zaloguj się</Button>
      </form>
        </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signInHelper: (email, password) => dispatch(signIn(email, password))
})

export default connect(
  null,
  mapDispatchToProps
)(SignInForm)