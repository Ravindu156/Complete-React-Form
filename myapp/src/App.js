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
                  <input type="radio" name="gender" value="other" id="other" checked={gender==="other"}
            onChange={}/>Other

            <label for="lang">  
                        Your best Subject
            </label>
            <input type="checkbox" name="lang" id="english" checked={subjects.english===true}/>English
            <input type="checkbox" name="lang" id="maths" checked={subjects.english===true}/>English
            <input type="checkbox" name="lang" id="physics" checked={subjects.english===true}/>English

            <label for="url">Enter URL</label>
            <input type="url" name="url" id="url" />

            <label>Select Your Choice</label>
            <option value="" disabled selected={selectedOption===""}>Select Your Answer</option>


            <optgroup label="Beginers">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>

            <optgroup label="Advance">
              <option value="1">React</option>
              <option value="2">Node</option>
              <option value="3">Express</option>
              <option value="t">MongoDB</option>
            </optgroup>




            





            



        </form>
      </fieldset>



    </div>
  );
}

export default App;
