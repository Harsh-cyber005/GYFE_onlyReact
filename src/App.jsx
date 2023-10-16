/* eslint-disable no-unused-vars */
import SignInPage from "./components/SignInPage"
import { useState } from "react";
function App() {

  let [roll,setRoll] = useState("");
  let [password,setPassword] = useState("");
  let [q1,setQ1] = useState("");
  let [a1,setA1] = useState("");
  let [q2,setQ2] = useState("");
  let [a2,setA2] = useState("");
  let [q3,setQ3] = useState("");
  let [a3,setA3] = useState("");

  function HandleLogin(roll,password,q1,a1,q2,a2,q3,a3){
    setRoll(roll);
    setPassword(password);
    setQ1(q1);
    setA1(a1);
    setQ2(q2);
    setA2(a2);
    setQ3(q3);
    setA3(a3);
  }

  return (
    <div>
      <SignInPage HandleLogin={HandleLogin}/>
    </div>
  )
}

export default App
