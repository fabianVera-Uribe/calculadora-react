import { useState } from 'react'
import './App.css'

function App() {

  const [resultado, setResultado] = useState(0)
  let arr = []
  const getNumber = (event) => {
    // console.log(event.target.innerHTML)
    arr.push(event.target.innerHTML)
    return arr
  }
  const operacion = () => {
    if(arr.some( e => e === "+")) {
      setResultado(parseInt(arr[0]) + parseInt(arr[2]))
      arr = []
      console.log(resultado)
    } else if(arr.some( e => e === "*")) {
      setResultado(parseInt(arr[0]) * parseInt(arr[2]))
      console.log(resultado)
      arr = []
    } else if(arr.some( e => e === "*")) {
      setResultado(parseInt(arr[0]) * parseInt(arr[2]))
      console.log(resultado)
      arr = []
    } else if(arr.some( e => e === "/")) {
      setResultado(parseInt(arr[0]) / parseInt(arr[2]))
      console.log(resultado)
      arr = []
    }
    return resultado
  }
  const reset = () => {
    setResultado(0)
    arr = []
  }


  return (
    <div className="App">
      <h2>{resultado}</h2>

      <button onClick={getNumber}>0</button>
      <button onClick={getNumber}>1</button>
      <button onClick={getNumber}>2</button>
      <button onClick={getNumber}>3</button>
      <button onClick={getNumber}>4</button>
      <button onClick={getNumber}>5</button>
      <button onClick={getNumber}>6</button>
      <button onClick={getNumber}>7</button>
      <button onClick={getNumber}>8</button>
      <button onClick={getNumber}>9</button>
      <button onClick={getNumber}>+</button>
      <button onClick={getNumber}>-</button>
      <button onClick={getNumber}>*</button>
      <button onClick={getNumber}>/</button>
      <button onClick={reset}>C</button>
      <button onClick={operacion}>=</button>
    </div>
  )
}

export default App
