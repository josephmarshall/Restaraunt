import React from 'react'
import { Form, } from 'semantic-ui-react'


class EditMenuForm extends React.Component{
  state = { name: this.props.menu.name }

  handleChange = (e) => {
    this.setState({name: e.target.value})
  }

  handleSubmit = () => {
    this.props.editMenu(this.state.name, this.props.menu.id)
    this.props.editMenuNameToggle()
  }

  render() {
    return(
      <Form onSubmit={this.handleSubmit} >
        <Form.Input
          label="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
      </Form>
    )
  }
}

export default EditMenuForm