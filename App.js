import { useSelector, useDispatch} from 'react-redux';
import './App.css';
import { addUser , deleteUser, update} from './Redux/Users';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, Col, Row } from 'react-bootstrap';

function App() {
  const dispatch = useDispatch()
  const userList  = useSelector((state) => state.users.value)
  
 const [ name, setName] = useState("")
 const [department, setDepartment] = useState("")
 const [contact, setContact] = useState("")
 const [newName, setNewName] = useState("")
 



  return (
<div className="App">
  <h2 style={{ textAlign:"center", textDecoration:"underline"}}>STAFF CONTACT DETAILS</h2>
  <Row>
    <Col md ={6}>
  <div className='addUser' >
    <input type="text" placeholder='Name' onChange={(e) => setName (e.target.value)} ></input>
    <input type="text" placeholder='Department' onChange={(e) => setDepartment (e.target.value)}></input>
    <input type="text" placeholder='Contact' onChange={(e) => setContact (e.target.value)}></input>

    <button onClick={() =>  
      {dispatch(addUser ({id:uuidv4(), Name: name, Department: department, Contact: contact}))}} className="add">Submit</button>
  </div>
  </Col>
  <Col md ={6}>
  <div className='displayUser'>
    {userList.map((user) => {
      return(
        <div className='user'>
        <h1> {user.Name} </h1>
        <h3>{user.Department}</h3>
        <h3>{user.Contact}</h3>
        <input type="text" placeholder='update' onChange={(e) => setNewName (e.target.value)} ></input>
      
    <Button onClick={() => {dispatch(update ({id: user.id, Name: newName }))}} className="click">Update Details </Button>
    
    <Button onClick={() => {dispatch(deleteUser ({id: user.id}))}}className="click">Delete </Button>
        </div>
      )
     
    })}
  </div>
  </Col>
  </Row>
    </div>
  );
}

export default App;
