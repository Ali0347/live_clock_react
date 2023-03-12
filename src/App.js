import { useState } from 'react';
import './App.css';

function App() {
let time = new Date().toLocaleTimeString();

const [rtime,  setRtime] = useState(time);

function Update_time (){
  let time = new Date().toLocaleTimeString();
  setRtime(time)
} 

setInterval(Update_time,1000)

  return (
    <div className="App pt-5 pb-5 border border-5 border-danger ms-5 me-5 mt-5 rounded-pill">
<div className="pt-5 m-5">
  <h1 className='display-5 text-muted text-bold border border-3 bg-body rounded-pill shadow-lg '>Developed By  &copy; : Ali Bahadur</h1>
     <h1 className='mt-5 pt-5 fs-bold display-1 text-danger'>Time {rtime}</h1>
     </div>
    </div>
  );
}

export default App;
