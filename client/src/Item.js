import React from 'react'
import { Form, FormGroup, Button } from 'semantic-ui-react'

class Item extends React.Component{
state = {edit: false,
         name: this.props.item.name,
         description: this.props.item.description,
         price: this.props.item.price        
}

handleChange = (e) => {
  this.setState({[e.target.name]: e.target.value})
}

handleSubmit = (e) => {
  console.log("success")
  this.props.editItem(this.props.menu_id, this.props.item.id, this.state.name, this.state.description, this.state.price)
  this.setState({edit: false})
}

toggleEdit = () => {
  this.setState({edit: true})
}

render() {
  if (this.state.edit === true) {
    return(
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Form.Input
              label={"name"}
              name={"name"}
              value={this.state.name}
              onChange={this.handleChange}
            />
            <Form.Input
              label={"description"}
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
            <Form.Input
              label={"price"}
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
            <Button type="submit">Save</Button>
          </FormGroup>
        </Form>
    )
  } else {
    return (
      <li>
        {this.props.item.name} {this.props.item.description} {this.props.item.price}
        <Button onClick={() => this.toggleEdit()} >edit</Button>
        <Button onClick={() => this.props.deleteButton(this.props.menu_id, this.props.item.id)}>delete</Button>
      </li>
      )
    }
  }
}

export default Item