import { useState } from 'react'

function App() {
  // deklarasi state "count" dengan nilai awal 0
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1) // update state → memicu rerender
    console.log(count + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Za Warudo</h1>
        <p>Count is : {count}</p>
        <button onClick={handleClick}>Press to add +1</button>
        <p>Test doang</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
