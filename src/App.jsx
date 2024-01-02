import React, { useEffect, useState } from 'react'
import './App.css'
import SearchData from './resources/countryData.json'

function App() {
  const [results, setResults] = useState([])
  const [inputValue, setInputValue] = useState("")

  const search = (value) => {
    const searchArray = SearchData.filter((el) =>
      el.name.toLowerCase().startsWith(value.toLowerCase())
    );
    setResults(searchArray)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setResults([])
    }
  }

  const handleSelect = (value) => {
    setInputValue(value)
    setResults([])
  }

  const handleChange = (value) => {
    setInputValue(value)
    search(value)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div id='App'>
      <h1>Search</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className={`auto-complete ${results.length > 0 ? 'show' : ''}`}>
        {results.map((el) => (
          <p key={el.code} onClick={() => handleSelect(el.name)}>
            {el.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default App
