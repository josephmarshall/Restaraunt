import React from 'react'
import { Form, FormGroup, Button } from 'semantic-ui-react'

class AddItemForm extends React.Component {
  state = { name: "",
            description: "",
            price: "", }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    this.props.addItem(this.state.name, this.state.description, this.state.price, this.props.menu_id)
    this.setState({ name: "", description: "", price: "", })
  } 

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup >
          <Form.Input
            label="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Form.Input
            label="description"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <Form.Input
            label="price"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
          />
          <Button type="submit">Save</Button>
        </FormGroup>
      </Form>
    )
  }
}

export default AddItemForm