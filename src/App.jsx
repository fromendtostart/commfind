import axios from 'axios'
import './App.css'
import { useEffect } from 'react'
import { useState } from 'react';

function App() {

  const[data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://commfind.s3.ap-south-1.amazonaws.com/?list-type=2")
      .then((response) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response.data, "application/xml");
        const namespace = "http://s3.amazonaws.com/doc/2006-03-01/";
        const keys = xmlDoc.getElementsByTagNameNS(namespace, "Key");

        // Convert NodeList to array
        const keyArray = Array.from(keys).map(keyElement => keyElement.textContent);

        setData(keyArray);
        console.log(keyArray);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  return (
    <div className='app'>
      {data.map((key, index) => (
          <div className='image' key={index}>
            <img src={`https://commfind.s3.ap-south-1.amazonaws.com/${key}`}></img>
          </div>
        ))}  
    </div>
  )
}

export default App
