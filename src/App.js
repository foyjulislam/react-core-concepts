import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
      const nayoks = ['Anwar', 'Jafor', 'Faruk', 'SalmanShah','Shovo']
      const products = [
        {name:'Photoshop', price:'$90,99'},
        {name:'Illustrator', price:'$60,99'},
        {name:'PDF reader', price:'$06,99'},
        {name:'Premiere EI', price:'$249,99'}
      ]
    //const nayokNames = nayoks.map(nayok => nayok)
    //console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person </p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
          nayoks.map(nayok => <li>{nayok}</li>)
          }
        {
          products.map(product => <li>{product.name}</li>)
        }
        </ul>
        {
          products.map(pd =><Product product={pd}></Product>)
        }
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount]= useState(10);
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers]= useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  
  return(
    <div>
      <h3>Dynamic Users{users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name, price} = props.product;
  return (
  <div style={productStyle}>
    <h3>{name}</h3>
    <h5>{price}</h5>
    <button>Buy now</button>
  </div>
  )
}
export default App;
