import React from 'react'
import Item from './Item'
import axios from 'axios'


class Menu extends React.Component {

  state = { items: [] }

componentDidMount() {
  this.getItems(this.props.menu.id)
}

getItems = (id) => {
    axios.get(`/api/menus/${id}/items`).then(
    res => {this.setState({items: res.data})})
}

itemDeleteButton = (menu_id, item_id) => {
  axios.delete(`/api/menus/${menu_id}/items/${item_id}`).then(
    res => { console.log("menu item deleted")}
  )
  let items = this.state.items.filter(item => item.id !== item_id)
  this.setState( {items, } )
}

  render() {
    return (
      <div>
        {this.props.menu.name}
        <button>edit</button>
        <button onClick={() => this.props.menuDeleteButton(this.props.menu.id)} >delete</button>
          <ul>
            {this.state.items.map(item => <Item key={item.id} item={item} menu_id={this.props.menu.id} deleteButton={this.itemDeleteButton} />)}
            <button>addItem</button>
          </ul>
      </div>
    )
  }
}

export default Menu