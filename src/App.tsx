import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [dateInput,         setDateInput]         = useState("");
  const [productNameInput,  setProductNameInput]  = useState("");
  const [abvInput,          setAbvInput]          = useState("0");
  const [size0Bottled,      setSize0Bottled]      = useState("0");
  const [size1Bottled,      setSize1Bottled]      = useState("0");
  const [size2Bottled,      setSize2Bottled]      = useState("0");
  const [size3Bottled,      setSize3Bottled]      = useState("0");
  const [size4Bottled,      setSize4Bottled]      = useState("0");
  const [litersBottled,     setLitersBottled]     = useState(0);
  const [LAABottled,        setLAABottled]        = useState(0);

  
  const inputLineListener = (evt: any) => {
    //evt.persist();
    console.log(evt.target.id);
    console.log(evt.target.value);
    calcLitersBottled();
    calcLAABottled();
    evt.stopPropagation()
  }

  useEffect(() => {
    // console.log('text box inside use effect: ', productNameInput);
    // console.log('text box inside use effect: ', abvInput);
    // console.log("text box inside use effect: ", size0Bottled);
    // console.log('text box inside use effect: ', size1Bottled);
    // console.log('text box inside use effect: ', size2Bottled);
    // console.log('text box inside use effect: ', size3Bottled);
    // console.log('text box inside use effect: ', size4Bottled);
    // console.log('text box inside use effect: ', litersBottled);
    // console.log('text box inside use effect: ', LAABottled);
    calcLitersBottled();
    calcLAABottled();
  }, [dateInput, productNameInput, abvInput, size0Bottled, size1Bottled, size2Bottled, size3Bottled, size4Bottled, litersBottled, LAABottled]);

  const calcLitersBottled = () => {
    let liters: number = 0;

    liters = ((parseFloat(size0Bottled) * .2) + (parseFloat(size1Bottled) * .375) + (parseFloat(size2Bottled) * .750) + (parseFloat(size3Bottled) * 1.14) + (parseFloat(size4Bottled) * 1.75))
    console.log(`liters: ${liters}`)
    console.log(`Liters bottled: ${liters}`)

    liters = parseFloat(liters.toFixed(2));

    setLitersBottled(liters);
    return liters;

  }

  const calcLAABottled = () => {
    let LAA: number = 0;
    let liters: number = 0;

    liters = ((parseFloat(size0Bottled) * .2) + (parseFloat(size1Bottled) * .375) + (parseFloat(size2Bottled) * .750) + (parseFloat(size3Bottled) * 1.14) + (parseFloat(size4Bottled) * 1.75))

    LAA = liters * (parseFloat(abvInput) / 100);

    LAA = parseFloat(LAA.toFixed(2));

    setLAABottled(LAA);
    return LAA;
  }

  return (
    <div className="App">
      Bottling Log
      <table>
        <thead>
          <tr>
          <th>Date</th><th>Product</th><th>abv</th><th>200ml</th><th>375ml</th><th>750ml</th><th>1.14L</th><th>1.75L</th><th>Total Liters</th><th>Total LAA</th>
          </tr>
        </thead>
        <tbody>
      <tr id="inputLine"              onChange={(evt) => inputLineListener(evt)}>
        <td><input id="date"          onChange={(evt) => setDateInput(evt.target.value)}          type="date"></input></td>
        <td><input id="product"       onChange={(evt) => setProductNameInput(evt.target.value)}   placeholder='Product Name'></input></td>
        <td><input id='abvInput'      onChange={(evt) => setAbvInput(evt.target.value)}           className='abvInput' placeholder=''></input></td>
        <td><input id='200mlBottled'  onChange={(evt) => setSize0Bottled(evt.target.value)}       className='qtyInput' placeholder=''></input></td>
        <td><input id='375mlBottled'  onChange={(evt) => setSize1Bottled(evt.target.value)}       className='qtyInput' placeholder=''></input></td>
        <td><input id='750mlBottled'  onChange={(evt) => setSize2Bottled(evt.target.value)}       className='qtyInput' placeholder=''></input></td>
        <td><input id='114LBottled'   onChange={(evt) => setSize3Bottled(evt.target.value)}       className='qtyInput' placeholder=''></input></td>
        <td><input id='175LBottled'   onChange={(evt) => setSize4Bottled(evt.target.value)}       className='qtyInput' placeholder=''></input></td>


        <td id="litersDisplay"        >{litersBottled} Liters</td>
        <td id="litersAADisplay"      >{LAABottled} LAA</td>
      </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
