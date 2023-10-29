import './App.css';
import React, { useState } from 'react';

function App() {
  const [capcha, setCapcha] = useState('');
  const [userCapcha, setUserCapcha] = useState('');
  const [result, setResult] = useState('');
  let alphabets = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';

  const generateCapcha = () => {
    let captcha;
    let first = alphabets[Math.floor(Math.random() * alphabets.length)];
    let second = Math.floor(Math.random() * 10);
    let third = Math.floor(Math.random() * 10);
    let fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
    let fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
    let sixth = Math.floor(Math.random() * 10);
    captcha =
      first.toString() +
      second.toString() +
      third.toString() +
      fourth.toString() +
      fifth.toString() +
      sixth.toString();
    setCapcha(captcha);
    setResult('');
    // document.getElementById('generated-captcha').value = captcha;
    // document.getElementById('entered-captcha').value = '';
    // status.innerText = 'Captcha Generator';
  };

  const checkCapcha = () => {
    // console.log(status)
    // let userValue = document.getElementById("entered-captcha").value;
    // console.log(captcha);
    // console.log(userValue);
    if (userCapcha === capcha) {
      // status.innerText = "Correct!!"
      setResult('Correct!!');
    } else {
      setUserCapcha('');
      generateCapcha();
      setResult('Incorrect!!');
      // status.innerText = "Try Again!!"
      // document.getElementById("entered-captcha").value = '';
    }
  };

  React.useEffect(() => {
    generateCapcha();
  }, []);

  return (
    <div className="App">
      <div class="wrapper"></div>
      <h2
        id="status"
        style={{
          color: '#ee7e6a',
        }}
      >
        Captcha Generator
      </h2>

      <h2
        id="status"
        style={{
          color: '#ee7e6a',
        }}
      >
        {result}
      </h2>
      <div>
        <input type="text" readonly id="generated-captcha" value={capcha} />
      </div>
      <div>
        <input
          type="text"
          value={userCapcha}
          onChange={(e) => setUserCapcha(e.target.value)}
          id="entered-captcha"
          placeholder="Enter the captcha.."
        />
      </div>
      <button type="button" onClick={checkCapcha}>
        check
      </button>
      <button type="button" onClick={generateCapcha} id="gen">
        Generate
      </button>
    </div>
  );
}

export default App;
