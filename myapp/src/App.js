import logo from './logo.svg';
import './App.css';
import {useState} from "react";


function App() {
  const[firstName,setFirstName]=useState("");
  const[lastName,setLastName]=useState("");
  const[email,setEmail]=useState("");
  const[contact,setContact]=useState("");
  const[gender,setGender]=useState("");
  const [subjects,setSubjects]=useState({
    english:true,
    maths:false,
    physics:false,
  });
  const [resume,setResume]=useState("");
  const [url,setUrl]=useState();
  const [selectedOption,setSelectedOption]=useState("");
  const [about,setAbout]=useState("");

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(
    firstName,
    lastName,
    email,
    contact,
    selectedOption,
    subjects,
    resume,
    url,
    about

  );
}

const handleSubjectChange=(sub)=>{
  setSubjects((prev)=>({
    ...prev,
    [sub]:!prev[sub],
  }))
}

const handleReset=()=>{
  setFirstName("");
  setLastName("");
  setEmail("");
  setContact("");
  setGender("male");
  setSubjects({
    english:true,
    maths:false,
    physics:false,
  });
  setResume("");
  setUrl("");
  setSelectedOption("");
  setAbout("");
};




  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form action='#' method="get">
          {/*Name */}
          <label for="firstname">First Name</label>
            <input type="text" name="firstname" id="firstname" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
          
          <label for="lastname">Last Name</label>
             <input type="text" name="lastname" id="firstname" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>

             {/*Email */}
          <label for="email">Email</label>
             <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>


            {/*Contact Number */}
          <label for="contact">Contact</label>
             <input type="tel" name="contact" id="contact" value={contact} onChange={(e)=>setContact(e.target.value)}/>


          
            {/*Gender */}
          <label for="gender">Gender</label>
            <input type="radio" name="gender" value="male" id="male" checked={gender==="male"} onChange={(e)=>setGender(e.target.value)}
            />Male
              <input type="radio" name="gender" value="female" id="female" checked={gender==="female"} onChange={(e)=>setGender(e.target.value)}
            />Female
                  <input type="radio" name="gender" value="other" id="other" checked={gender==="other"} onChange={(e)=>setGender(e.target.value)}
            />Other

            <label for="lang">  
                        Your best Subject
            </label>
            <input type="checkbox" name="lang" id="english" checked={subjects.english===true} onChange={(e)=>handleSubjectChange("english")}/>English
            <input type="checkbox" name="lang" id="maths" checked={subjects.maths===true} onChange={(e)=>handleSubjectChange("maths")}/>Maths
            <input type="checkbox" name="lang" id="physics" checked={subjects.physics===true} onChange={(e)=>handleSubjectChange("physics")}/>physics

            <label for="file">Upload Resume</label>
            <input type="file" name="file" id="file" onChange={(e)=>setResume(e.target.files[0])}></input>


            <label for="url">Enter URL</label>
            <input type="url" name="url" id="url" onChange={(e)=>setUrl(e.target.value)} />

            <label>Select Your Choice</label>
            <select name="select" id="select" value={selectedOption}>
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

</select>

<label for="about">About</label>
<textarea
  name="about"
  id="about"
  cols="30"
  rows="10"
  onChnage={(e)=>{
    setAbout(e.target.value)
  }}

></textarea>

<button type="reset" value="reset" onClick={()=>handleReset()}>
  Reset
</button>

<button type="submit" value="submit" onClick={(e)=>handleSubmit(e)}>
  Submit
</button>





            



        </form>
      </fieldset>



    </div>
  );
}

export default App;
