import React, { useEffect, useState } from "react";
import data from "./resources/countryData.json";
import "./App.css";

function App() {
  const [value, setvalue] = useState("");
  const [sugges, setSugges] = useState(true);
  const [results,setResults] = useState([])

  function handleEscape(e) {
    e.key == "Escape" ? setSugges(!sugges) : null;
  }

  useEffect(()=>{
    let list = data.map((ele, index) => {
      return ele.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) && value != "" ? (
        <p key={index}>{ele.name}</p>
      ) : null
    })
     setResults(list)
  })

  return (
    <div onKeyDown={(e) => handleEscape(e)} id="wholeContainer">
      <input
        type="text"
        onChange={(e) => setvalue(e.target.value)}
        placeholder="Enter here"
      />

      {sugges
        ? results
        : null}
    </div>
  );
}

export default App;