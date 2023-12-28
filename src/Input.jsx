import React, { useState, useEffect } from "react";
import Info from "./Info";
import appData from "./resources/countryData.json";

const data = appData;

function Input() {
  const [text, setText] = useState("");
  const [result, setResult] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const filterResults = () => {
    const filteredList = data
      .filter((item) => item.name.toLowerCase().includes(text.toLowerCase()))
      .map((item, index) => (
        <div key={index} className="name" onClick={() => handleResultClick()}>
          {item.name}
        </div>
      ));

    setResult(filteredList);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      console.log(e.key);
      setShowPopup(false);
    }
  };

  const handleResultClick = () => {
    console.log("escape");
    setShowPopup(false);
  };

  const handleSubmit = () => {
    filterResults();
    setShowPopup(true);
  };

  useEffect(() => {
    filterResults();
    setShowPopup(false); 
  }, [text]);

  return (
    <div onKeyDown={(e) => handleKeyDown(e)}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSubmit}>Submit</button>
      {showPopup && result.length > 0 && <Info text={result} />}
    </div>
  );
}

export default Input;
