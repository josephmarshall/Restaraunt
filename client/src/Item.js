import React from 'react'

const Item = ({item, deleteButton, menu_id}) => (

  <li>
    {item.name} {item.description} {item.price}
    <button>edit</button>
    <button onClick={() => deleteButton(menu_id, item.id)}>delete</button>
  </li>
)

export default Item