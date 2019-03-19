import React, { Component } from 'react';
import { Container, } from "semantic-ui-react"
import axios from 'axios'
import Menu from './Menu.js'
import AddMenuForm from './AddMenuForm'

class App extends Component {

  state = { menus: [] }

  componentDidMount() {
    this.getMenus()
  }

  getMenus = () => {
    axios.get(`/api/menus`).then(
    res => {this.setState({menus: res.data})}
    )}    

  delete = (id) => {
    axios.delete(`/api/menus/${id}`).then(
      res => {
        let menus = this.state.menus.filter(menu => menu.id !== id)
        this.setState( {menus, } )
        console.log("entire menu deleted")
    }
  )}

  addMenu = (name) => {
    axios.post(`/api/menus/`, { name } ).then(
      res => {
        const menus = this.state.menus
        this.setState( {menus: [...menus, res.data]} )
      }
    )
  }

  editMenu = (name, id) => {
    axios.put(`/api/menus/${id}`, { name } ).then( res =>
      this.setState({menus: this.state.menus.map(m => {
        if (m.id === id)
          return res.data
        return m
            }
          )
        })
      )
    }
  

  render() {
    return (
      <Container>
        <h1>Restaraunt Menus</h1>
        <AddMenuForm addMenu={this.addMenu} /> 
          {this.state.menus.map( menu => <Menu key={menu.id} menu={menu} menuDeleteButton={this.delete} editMenu={this.editMenu} />)}
      </Container>
    );
  }
}

export default App;
