import React, {useState} from 'react'
import { lowerCaseLetters, numbers, specialCharacters, upperCaseLetters } from './Character';

export default function Design() {

  const [password, setPassword] = useState(null);
  const [passwordLength, setPasswordLength] = useState(26);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeSpecial, setIncludeSpecial] = useState(false);


  const handleGeneratePassword =()=>{

    let number = document.getElementById("number").value;
    if(number >26 ){
      alert("Enter password size less than 26");
      document.getElementById("number").value = '0';
    } 

    if(!includeNumbers && !includeLowercase && !includeUppercase && !includeSpecial){
      alert("To generate password you must select atleast one checkbox");
    }
    else{
      let characterList = "";
      if(includeNumbers){
        characterList += numbers;
      }
      if(includeLowercase){
        characterList += lowerCaseLetters;
      }
      if(includeUppercase){
        characterList += upperCaseLetters;
      }
      if(includeSpecial){
        characterList += specialCharacters;
      }

      setPassword(createPassword(characterList));
      setTimeout(() => {
        alert("Password Generated Succesfully")
      }, 300);
      
    }
  }

  const createPassword =(characterList)=>{
    let password="";
    let characterListLength = characterList.length;
    for(let i=0;i<passwordLength;i++){
      let characterListIndex = Math.round(Math.random()* characterListLength);
      password += characterList.charAt(characterListIndex);
    }
    return password;
  }


  return (
    <div className='head'>
      <div className="main">
        <h3>Password Generator</h3>
        <input defaultValue={password} type="text" name="text" id="text" />

      <div className="section">

        <div className="sectionPass">
          <span>Password Length</span>
          <input type="number" name="number" defaultValue={passwordLength} onChange={(e)=>{setPasswordLength(e.target.value)}} id="number" max={'26'} min={'8'} />
        </div>

        <div className="section1">
            <span>Add Numbers</span>
            <input checked={includeNumbers}  onChange={(e)=>{setIncludeNumbers(e.target.checked) }} type="checkbox" className='input'  name="numbers" id="numbers" />
        </div>
        <div className="section2">
            <span>Add Uppercase</span>
            <input checked={includeUppercase} onChange={(e)=>{setIncludeUppercase(e.target.checked) }} type="checkbox" className='input' name="uppercase" id="uppercase" />
        </div>
        <div className="section3">
            <span>Add Lowercase</span>
            <input checked={includeLowercase} onChange={(e)=>{setIncludeLowercase(e.target.checked) }} type="checkbox" className='input' name="lowercase" id="lowercase" />
        </div>
        <div className="section4">
            <span>Add Symbols</span>
            <input checked={includeSpecial} onChange={(e)=>{setIncludeSpecial(e.target.checked) }} type="checkbox" className='input' name="special" id="special" />
        </div>        
      </div>

      <div className="end text-center">
        <button id='btn' onClick={handleGeneratePassword} >Generate Password</button>
      </div>

      </div>
    </div>
  )
}
