import React,{useState} from "react";
import './../styles/App.css';
import Input from './Form.js';

const App = () => {
  let [name,setName] = useState('default');
  let [email,setEmail] = useState('');
  let [password,setPassword] = useState('');

  function submitting(e){
    e.preventDefault();
    let obj = {
      name,
      email,
      password
    };
    console.log(obj);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <form onSubmit={submitting}>
          <Input type={"text"} label={"Name"} placeholder={"enter name"} updateName={setName}/>
          <Input type={"email"} label={"Email"} placeholder={"enter email"} updateName={setEmail}/>
          <Input type={"password"} label={"Password"} placeholder={"enter password"} updateName={setPassword}/>
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default App
