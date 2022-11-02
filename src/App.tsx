import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List'
import Form from './components/Form';
import {Sub} from './types'


interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

const INITAL_STATE = [
  {
      nick:"eddard",
      avatar: "https://i.pravatar.cc/150?u=eddard",
      subMonth: 7,
      description: "The winter is coming!"
  
    },
    {
      nick:"rick",
      avatar: "https://i.pravatar.cc/150?u=rick",
      subMonth: 12,
      description: "don't be stupid morty!"
  
    },
    {
      nick:"He-man",
      avatar: "https://i.pravatar.cc/150?u=He-man",
      subMonth: 42,
      description: "Por el poder de greyscol!"
  
    }
  ]


function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])
  //const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)

  useEffect(()=> {
    setSubs(INITAL_STATE)
  }, [])

  
  return (
    <div className="App">
     <h1>Create Your Own Character!!!</h1>
     <List subs={subs}/>
     <Form onNewSub={setSubs}/>
    </div>
  );
}

export default App;
