import React, {useState} from 'react';
import './loginform.css'

const LoginForm = () => {

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      username: enteredUsername,
      password: enteredPassword,
    };
      
    alert(userData.username + "\n" + userData.password);    
  };


  const resetHandler = () => {
    setEnteredUsername("");
    setEnteredPassword("");
  }

  return (
    <div className="cover">
      <h1>Login</h1>
      <input type="type" placeholder="username" value={enteredUsername} onChange={usernameChangeHandler}/>
      <input type="password" placeholder="password" value={enteredPassword}  onChange={passwordChangeHandler}/>

      <div className="login-btn" onClick={submitHandler}>Login</div>

      <button type="submit" className="reset-btn" onClick={resetHandler}>
        reset
      </button>
      
    </div>
  )
}

export default LoginForm


// import React, {useState} from 'react';
// import './loginform.css'

// const LoginForm = () => {

//   const [enteredUsername, setEnteredUsername] = useState("");
//   const [enteredPassword, setEnteredPassword] = useState("");

//   const usernameChangeHandler = (event) => {
//     setEnteredUsername(event.target.value);
//   };

//   const passwordChangeHandler = (event) => {
//     setEnteredPassword(event.target.value);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     const userData = {
//       username: enteredUsername,
//       password: enteredPassword,
//     };
      
//     alert(userData.username + "\n" + userData.password);    
//   };


//   const resetHandler = () => {
//     setEnteredUsername("");
//     setEnteredPassword("");
//   }
//  const [popupStyle, showPopup] = useState('hide')

// const popup = () => {
  
//     showPopup("login-popup")
//     setTimeout(() => showPopup('hide'),3000)
    
// }

//   return (
//     <div className="cover">
//       <h1>Login</h1>
//       <input type="type" placeholder="username" onChange={usernameChangeHandler}/>
//       <input type="password" placeholder="password"  onChange={passwordChangeHandler}/>

//       <div className="login-btn" onClick={submitHandler}>Login</div>

//       <button type="submit" className="btn" onClick={resetHandler}>
//         reset
//       </button>
      
//     </div>
//   )
// }

// export default LoginForm
