import React, {useState} from 'react';
import "./App.css";
import AboutMe from './components/AboutMe';
import MyTown from './components/MyTown';

const App = () => {
  const [state, updateState] = useState(true)
    return (
      <div className="myDivClass">
        <>
          <button className="button-class button1" onClick={() => updateState(true)}> About Me </button>
          <button className="button-class button1" onClick={() => updateState(false)}> My Town </button>
        </>
        <>
          {state === true ? <AboutMe /> : <MyTown /> }
        </>
      </div>
    )
}
export default App;