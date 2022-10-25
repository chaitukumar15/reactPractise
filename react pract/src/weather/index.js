import axios from "axios";
import React, {  useState } from "react";
import "./index.css"
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

let WeatherApp=()=>{
let [Latitude,setLatitude]=useState();
let [Longitude,setLongitude]=useState();
let [GeoLocationListData,setLocationListData]=useState({});
let [CityName,setCityName]=useState();
let [CityData,setCityData]=useState({})

let HandleChange=(e)=>{

setCityName(e.target.value);
console.log(CityName);
}




let success=(position)=>{
    console.log(position);
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    console.log(`${Latitude} and ${Longitude}`);
}

let failure=(error)=>{

    console.error(error);
}

navigator.geolocation.getCurrentPosition(success,failure);

 
    
   
let weatherData=()=>{
   
let apiId = "bf89bc2cde67abeceea98d4c23a10716" ;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${Latitude}&lon=${Longitude}&appid=${apiId}`)
    .then(val=>setLocationListData(val.data));
if(CityName != ""){

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=${apiId}`)
    .then(val=>setCityData(val.data))
}
setCityName("")
}


console.log(CityData);
console.log(GeoLocationListData);
    return(
        <>

        {/* { Object.keys(GeoLocationListData).length != 0 ? 
              <div>
                <div >

                <h1 >{ GeoLocationListData.name}</h1>
                </div>
                


                <h2>country: {GeoLocationListData.sys.country}</h2>
                <h2>{GeoLocationListData.main.temp}</h2>
                <h1>{GeoLocationListData.main.humidity}</h1>
                <h1>{GeoLocationListData.weather[0].main}</h1>

                <Navbar bg="dark" variant="dark" >
      <Container fluid>
        <Navbar.Brand >{ GeoLocationListData.name}</Navbar.Brand>
       
      </Container>
      <Container>

      </Container>
    </Navbar>
              </div>
:(null)

        } */}
       

<div className="inputBtn">
<br/>
<input value={CityName} placeholder="enter city name" onChange={HandleChange}/>
      <Button variant="secondary" onClick={weatherData}>get weather data</Button>
</div>
  {   Object.keys(CityData).length != 0 ? 

<div className="tableData">

<Table    variant="dark">
<tr>
          <th>CityName</th>
          <td>{CityData.name}</td>
          
        </tr>
        <tr>
          <th>temperature</th>
          <td>{(CityData.main.temp-273.15).toFixed(2)}&#8451; </td>
          
        </tr>
        <tr>
          <th>humidity</th>
          <td>{CityData.main.humidity}</td>
          
        </tr>
        <tr>
          <th>weather</th>
          <td>{CityData.weather[0].main}</td>
          
        </tr>
</Table>
</div>
:
(null)
}       




        </>
    )
}
export default WeatherApp;