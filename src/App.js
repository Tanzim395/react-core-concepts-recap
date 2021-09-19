import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
      <MyComponent brand="Apple" price="50000"></MyComponent>
      <MyComponent brand="Samsung" price="35000"></MyComponent>
      <MyComponent brand="Huawei" price="40000"></MyComponent>
      <MyComponent brand="Nokia" price="25000"></MyComponent>
    </div>
  );
}

function LoadUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h1>Users Loaded: {users.length}</h1>
      {
        users.map(user => <User name={user.name} phone={user.phone}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div style={{ backgroundColor: 'cyan', margin: '15px', padding: '5px', border: '3px solid blue', borderRadius: '10px' }}>
      <h2>Name: {props.user}</h2>
      <p>Call me baby {props.phone}</p>
    </div>
  )
}

function MyComponent(props) {
  const [points, setPoints] = useState(2);
  const myStyle = {
    backgroundColor: 'lightblue',
    border: '3px solid blue',
    margin: '10px',
    padding: '5px',
    borderRadius: '10px'
  }
  const handleAddPoints = () => {
    const newPoints = points * 2;
    setPoints(newPoints);
  }
  return (
    <div style={myStyle}>
      <h1 style={{ color: 'magenta' }}>Yo Yo Mama!!! {props.brand}</h1>
      <h4>Asking Price: {props.price}, I have points: {points}</h4>
      <button onClick={handleAddPoints}>Add Points</button>
      <p>I can write my own component</p>
    </div>
  )
}
export default App;
