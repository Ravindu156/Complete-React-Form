import logo from './logo.svg';
import './App.css';
import {useState} from "react";


function App() {
  const[firstName,setFirstname]=useState("");
  const[lastName,setLastName]=useState("");
  const[email,setEmail]=useState("");
  const[contact,setContact]=useState("");

  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form action='#' method="get">
          {/*Name */}
          <label for="firstname">First Name</label>
            <input type="text" name="firstname" id="firstname" value={firstName}/>
          
          <label for="lastname">Firt Name</label>
             <input type="text" name="lastname" id="firstname" value={lastName}/>

             {/*Email */}
          <label for="email">Email</label>
             <input type="email" name="email" id="email" value={email}/>


            {/*Contact Number */}
          <label for="contact">Contact</label>
             <input type="tel" name="email" id="email" value={contact}/>


          
            {/*Gender */}
          <label for="gender">Gender</label>
            <input type="radio" name="gender" value="male" id="male" checked={gender==="male"}
            onChange={}/>Male
              <input type="radio" name="gender" value="female" id="female" checked={gender==="female"}
            onChange={}/>Female
                  <input type="radio" name="gender" value="female" id="female" checked={gender==="female"}
            onChange={}/>Other

            <label for="lang">  
                        Your best Subject
            </label>



        </form>
      </fieldset>



    </div>
  );
}

export default App;
