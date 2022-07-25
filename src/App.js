import './App.css';
import React,{useState} from "react";

const App = () => {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("")
  const clickHandler = e =>{
    setCity(e.target.value);
  
  }
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=40e18c3e93924a078c3722f1392ad262`).then(
      response => response.json()).then(
        data => {
          const kelvin = data.main.temp;
          const celsius = kelvin - 273.15;
          setResult(`Temperature at ${city} is `+Math.round(celsius)+"°c");
          setCity("");
        }).catch(error =>console.log(error));
    
  } 
  return (
    <div className="App">
      <center>
        <div className="card">
          <div className="card-body">
            <h4 className='card-title'>Weather App</h4>
            <form onSubmit={submitHandler}>
              <input type='text' name='city' value={city} onChange={clickHandler}/><br/><br/>
              <input type= "submit" value ='Get Temperature' />
            </form>
            <h1>{result}</h1>
          </div>
        </div>

      </center>
    </div>
  );
}

export default App;
