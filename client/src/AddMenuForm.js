import React from 'react'
import { Form, } from 'semantic-ui-react'

class AddMenuForm extends React.Component {

  state = { name: "" }

  handleChange = (e) => {
    this.setState({name: e.target.value})
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addMenu(this.state.name)
    this.setState({name: ""})
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="name"
          name="name"
          placeholder="Menu Name"
          value={this.state.name}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </Form> 
    )
  }
}

export default AddMenuForm