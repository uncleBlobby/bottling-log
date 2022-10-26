import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const inputLineListener = (evt: any) => {
    console.log(evt.target.id);
    console.log(evt.target.value);
    evt.stopPropagation()
  }

  return (
    <div className="App">
      Bottling Log
      <table>
        <thead>
          <td>Date</td><td>Product</td><td>abv</td><td>200ml</td><td>375ml</td><td>750ml</td><td>1.14L</td><td>1.75L</td><td>Total Liters</td><td>Total LAA</td>
        </thead>
        <tbody>
      <tr id="inputLine" onChange={(evt) => inputLineListener(evt)}>
        <td><input type="date"></input></td>
        <td><input placeholder='Product Name'></input></td>
        <td><input id='abvInput' className='abvInput' placeholder=''></input></td>
        <td><input id='200mlBottled' className='qtyInput' placeholder=''></input></td>
        <td><input id='375mlBottled' className='qtyInput' placeholder=''></input></td>
        <td><input id='750mlBottled' className='qtyInput' placeholder=''></input></td>
        <td><input id='114LBottled' className='qtyInput' placeholder=''></input></td>
        <td><input id='175LBottled' className='qtyInput' placeholder=''></input></td>
        <td id="litersDisplay">Liters</td>
        <td id="litersAADisplay">LAA</td>
      </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
