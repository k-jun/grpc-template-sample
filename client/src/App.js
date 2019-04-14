import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import helloworld from './grpc/helloworld_grpc_web_pb'

const greeter = new helloworld.GreeterPromiseClient('http://localhost:8080')
const req = new helloworld.HelloRequest()

function App() {
  const [responseString, setResponseString] = useState('Not Yet')
  const [inputString, setInputString] = useState('')

  const handleOnClick = async () => {
    req.setName(inputString)
    const response = await greeter.sayHello(req)
    setResponseString(response.array[0])
      
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          response from the gRPC server is: { responseString }
        </p>
        <input type="text" value={inputString} onChange={(e) => setInputString(e.target.value)} />
        <button onClick={() => handleOnClick()}>Submit</button>
      </header>
    </div>
  );
}

export default App;
