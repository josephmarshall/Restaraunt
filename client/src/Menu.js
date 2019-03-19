import React from 'react'
import Item from './Item'
import axios from 'axios'
import { Button, } from 'semantic-ui-react'
import AddItemForm from './AddItemForm'
import EditMenuForm from './EditMenuForm'


class Menu extends React.Component {

  state = { items: [],
            addItemToggle: false,
            editMenuName: false }

componentDidMount() {
  this.getItems(this.props.menu.id)
}

getItems = (id) => {
    axios.get(`/api/menus/${id}/items`).then(
    res => {this.setState({items: res.data})})
}

addItem = (name, description, price, menu_id) => {
  axios.post(`/api/menus/${menu_id}/items`, { name, description, price, menu_id }).then(
    res => {
      this.setState({items: [...this.state.items, res.data]})
      this.toggleAddItemForm()
    })
}

itemDeleteButton = (menu_id, item_id) => {
  axios.delete(`/api/menus/${menu_id}/items/${item_id}`).then(
    res => { console.log("menu item deleted")}
  )
  let items = this.state.items.filter(item => item.id !== item_id)
  this.setState( {items, } )
}

editItem = (menu_id, item_id, name, description, price) => {
  axios.put(`/api/menus/${menu_id}/items/${item_id}`, { name, description, price, menu_id } ).then(
    res => {this.setState({items: this.state.items.map( i => {
      if (i.id === item_id)
        return res.data
      return i
        }
      )
    })
  })
}


toggleAddItemForm = () => {
  this.setState({addItemToggle: !this.state.addItemToggle})
}

editMenuNameToggle = () => {
  this.setState({editMenuName: !this.state.editMenuName})
}



  render() {
    return (
      <div>
        {!this.state.editMenuName && this.props.menu.name}
        <Button onClick={this.editMenuNameToggle}>edit</Button>
        {this.state.editMenuName && <EditMenuForm editMenu={this.props.editMenu} menu={this.props.menu} editMenuNameToggle={this.editMenuNameToggle} />}
        {!this.state.editMenuName && <Button onClick={() => this.props.menuDeleteButton(this.props.menu.id)} >delete</Button>}
          <ul>
            {this.state.items.map(item => <Item key={item.id} item={item} 
            menu_id={this.props.menu.id} deleteButton={this.itemDeleteButton} 
            editItem={this.editItem} />)}
            <Button onClick={this.toggleAddItemForm}>addItem</Button>
            { this.state.addItemToggle && <AddItemForm addItem={this.addItem} menu_id={this.props.menu.id} /> }
          </ul>
      </div>
    )
  }
}

export default Menu