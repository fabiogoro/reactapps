import { useState } from "react"
import User from './User'
import Col from 'react-bootstrap/Col'

function UserList() {
  function clickHandler(e){
    const newUsers = [...users]
    const position = e.target.getAttribute('position')
    newUsers[position].votes += 1
    newUsers[position].lastUpdated = (new Date()).toLocaleString()
    newUsers.sort((e1,e2)=>e2.votes-e1.votes)
    setUsers(newUsers)
  }

  const [users, setUsers] = useState([
    {name: 'Alice', votes: 10, lastUpdated: (new Date()).toLocaleString()},
    {name: 'Bob', votes: 10, lastUpdated: (new Date()).toLocaleString()},
    {name: 'Carl', votes: 10, lastUpdated: (new Date()).toLocaleString()},
    {name: 'Dave', votes: 10, lastUpdated: (new Date()).toLocaleString()},
    {name: 'Eric', votes: 10, lastUpdated: (new Date()).toLocaleString()},
  ])

  return (
    <Col>
      {users.map((u, i)=><User user={u} position={i} onClick={clickHandler}></User>)}
    </Col>
  )
}

export default UserList;
