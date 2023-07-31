import "./styles.css";
import {useState} from "react";

export default function App() {
  //setname and setnumber used to enter new values into the name,number,...
  const [name,setName] = useState("");
  const [number,setNumber] = useState ([]);
  const [dob,setDob] = useState([]);

  function main(){
    // now code for alert statements
    if (!name){
      alert("Please Enter Name");
    }
    if (number.length <10){
      alert("Please Enter your conatct number");
     }
     if (number.length >10){
       alert("Thare are more than 10 digits");
     }
     if(!dob){
       alert("Please enter the date of birth");
     }
     // to give a popup if all the details are entered correct  if(
    if(
     document.getElementById("name").value === name &&
    document.getElementById("number").value === number &&
    document.getElementById("dob").value === dob 
  ){
  alert("submitted successfully")
  }
}
  
  return (
    <div className="App">
      <h1>REGISTRATION FORM</h1>
      <form>
        <label>Name: </label>
        <input type="text" 
        placeholder="Enter your name" 
        value={name} 
        id="name"></input>
        <br></br>
        <label>Phone:</label>
        <input type="number"
        placeholder="Enter your number"
        value={number}
        id="number">
        </input>
        <br></br>
        <label>DOB:</label>
        <input type="number"
        placeholder="Enter your DOB"
        value={dob}
        id="dob"></input>

        </form>
    </div>
  );
}