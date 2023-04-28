import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from "react";
import axios from "axios"

function App() {
  const [studentData, setStudentData] = useState([])
  const [name,setName] = useState("")
  const [rollno,setRollno] = useState("")
  const [roomno,setRoomno] = useState("")
  
  const addtolist = () => {
    JSON.stringify()
    axios.post("http://localhost:3001/Student",{name:name,rollno:rollno,roomno:roomno})

  }
  const getStudentData = () => {
    axios.get("https://hostel-management-production.up.railway.app/Student").then(res => {
      setStudentData(res.data)
    }).catch(err => {
      console.log("getting data failed", err);
    });


    // fetch('https://hostel-management-production.up.railway.app/Student').then(res => res.json()).then(res => res.data)
  }
  useEffect(() => {
    getStudentData()
  },[])

  return (
    <div className="App">
      <table>
 <thead>
          <tr>
            <td>Name</td>
            <td>RollNo</td>
            <td>RoomNo</td>
          </tr>
          </thead>
          <tbody>
   {
    studentData?.map(itm => {
      return (
        <tr>
        <td>itm.name</td>
        <td>itm.roomno</td>
        <td>itm.rollno</td>
        </tr>
      )
    })
   }
   </tbody>
   </table>


      <form>
    <input type="text" onChange={(event) => {setName(event.target.value)}}></input>
    <input type="text" onChange={(event) => {setName(event.target.value)}}></input>
    <input type="text" onChange={(event) => {setName(event.target.value)}}></input>
    <input type="file"></input>
    <button>Submit</button>
   </form>
    </div>
  );
}

export default App;
