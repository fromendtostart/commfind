import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react';

function Dashboard() {

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
    <div className='dashboard'>
      <div className='header'>
        <h1 className='text-4xl text-center m-8'>Lost items</h1>
      </div>
      <div className='images flex flex-wrap justify-around gap-16'>
      {data.map((key, index) => (
          <div className='image flex flex-col flex-wrap gap-4' key={index}>
            <img src={`https://commfind.s3.ap-south-1.amazonaws.com/${key}`}></img>
            <div className='itemname text-center'>{key.substring(0, key.indexOf('.'))}</div>
          </div>
        ))}   
      </div> 
    </div>
  )
}

export default Dashboard
